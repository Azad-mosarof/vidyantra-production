const express = require('express');
const cors = require('cors');
const { db, auth, dbRef, storage, createAccount} = require('./firebase.js');
const ct = require('./constants.js');
const { query, collection, where, getDocs, orderBy } = require("firebase/firestore");

const app = express();

app.use(cors());
app.use(express.json()); 

/**
 * get all courses
 * @returns {Array} courses
 * @throws {500} Internal Server Error
 */
app.get('/api/getCourses', async (req, res) => {
    try {
      const coursesSnapshot = await db.collection(ct.courseCollection).get();
      const courses = [];
      
      coursesSnapshot.forEach((doc) => {
        courses.push(doc.data());
      });
  
      res.json(courses);
    } catch (error) {
      console.error('Error getting courses:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


/**
 * get course by id
 * @param {string} id
 * @returns {Object} course
 * @throws {404} Course not found
 * @throws {500} Internal Server Error
*/
app.get('/api/courses/:id', async (req, res) => {
    try {
      const courseSnapshot = await db.collection(ct.courseCollection).doc(req.params.id).get();
      const course = courseSnapshot.data();

      if (!course) {
        res.status(404).json({ error: 'Course not found' });
      } else {
        res.json(course); 
      }
    } catch (error) {
      console.error('Error getting course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


/**
 * store a course
 * @param {Object} course
 * @throws {500} Internal Server Error
*/
app.post('/api/storeCourse', async (req, res) => {
    try {
      const course = req.body;
      const newCourse = await db.collection(ct.courseCollection).doc(course.id).set(course);
      res.json(newCourse);
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


/**
 * update course by id
 * @param {string} id
 * @throws {500} Internal Server Error
*/
app.put('/api/updateCourse/:id', async (req, res) => {
    try {
      const course = req.body;
      const updatedCourse = await db.collection(ct.courseCollection).doc(req.params.id).update(course);
      res.json(updatedCourse);
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


/**
 * create a new account
 * @param {Object} student
 * @throws {500} Internal Server Error
*/
app.post('/api/newAccount', async (req, res) => {
    try {
      const student = req.body;
      console.log('Received student data:', student);
      const result = await createAccount(student.id, student.firstName, student.lastName, student.phone, student.email, student.password);
      res.json(result);
    } catch (error) {
      console.error('Error creating account:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


/**
 * sign in to an account
 * @param {Object} student
 * @returns {Object} student
 * @throws {404} Student not found
 * @throws {500} Internal Server Error
*/
app.post('/api/signIn', async (req, res) => {
  try {
    const student = req.body;
    console.log('Received student data:', student);
    try {
      await auth.signInWithEmailAndPassword(student.email, student.password);
  
      const studentInfo = await db.collection(ct.studentsCollection).where('email', '==', student.email).get();

      if (!studentInfo.empty) {
        const studentData = studentInfo.docs[0].data();
        res.status(200).json(studentData);
      } else {
        res.status(404).json({ error: 'Student not found' });
        console.log("Student not found");
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      res.status(404).json({ error: error.message });
    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/**
 * Buy a course
 * @param {Object} student
 * @throws {500} Internal Server Error
 */
app.post('/api/buyCourse', async (req, res) => {
  try {
    const student = req.body;
    console.log('Received student data:', student);
    const enrolledCourses = await db.collection(ct.studentsCollection).doc(student.studentId).get();
    const courses = enrolledCourses.data().courses || [];
    courses.push(student.courseId);
    const result = await db.collection(ct.studentsCollection).doc(student.studentId).update({courses: courses});
    res.json(result);
  } catch (error) {
    console.error('Error buying course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/**
 * get all enrolled courses
 * @param {string} userId
 * @returns {Array} enrolledCourses
 * @throws {500} Internal Server Error
*/
app.get('/api/getAllEnrolledCourses/:userId', async (req, res) => {
  try {
    const coursesSnapshot = await db.collection(ct.studentsCollection).doc(req.params.userId).get();
    const courses = coursesSnapshot.data().courses || [];
    const enrolledCourses = [];
    for (const courseId of courses) {
      const courseSnapshot = await db.collection(ct.courseCollection).doc(courseId).get();
      enrolledCourses.push(courseSnapshot.data());
    }
    res.json(enrolledCourses);
  } catch (error) {
    console.error('Error getting enrolled courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/**
 * search courses by name, instructor, or location
 * @param {string} query
 * @returns {Array} searchResults
 * @throws {500} Internal Server Error
*/
app.get('/api/searchCourses/:query', async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const normalizedQuery = searchQuery.toLowerCase();
    const collectionRef = collection(db, ct.courseCollection);
    const q = query(
      collectionRef,
      orderBy('name')
    );
    
    const docRefs = await getDocs(q);
    const searchResults = [];

    docRefs.forEach((courseDoc) => {
      const courseData = courseDoc.data();
      const searchableFields = [
        courseData.name,
        courseData.instructor,
        courseData.location,
      ];

      if (
        searchableFields.some((field) =>
          typeof field === 'string' && field.toLowerCase().includes(normalizedQuery)
        )
      ) {
        searchResults.push(courseData);
      }
    });

    res.json(searchResults);
  } catch (error) {
    console.error('Error searching courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/**
 * start the server
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
