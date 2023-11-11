import * as ct from './Constants';
import axios from 'axios';
import * as api from './Api';

const linkList = [
    'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2019/05/sale_19347_primary_image.jpg',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*YQgaKfVzK-YpxyT3NYqJAg.png',
    'https://cdn.mindmajix.com/courses/javascript-training-120620.png',
    'https://qph.cf2.quoracdn.net/main-qimg-f9514ea83444ef5dfded019d798ca48b-lq',
]

const courseNames = [
    'The Complete Python Bootcamp From Zero to Hero in Python',
    'The Complete JavaScript Course 2020: Build Real Projects!',
    'The Complete 2020 Web Development Bootcamp',
    'The Complete Node.js Developer Course (3rd Edition)',
    'The Complete React Native + Hooks Course [2020 Edition]',
    'The Complete Web Developer Course 2.0',
    'The Complete 2020 Flutter Development Bootcamp with Dart',
    'The Complete Android N Developer Course',
    'The Complete iOS 13 Developer Course - and SwiftUI!',
    'The Complete Android Oreo(8.1) , N ,M and Java Development',
    'The Complete Android P + Java Developer Course™ : 2019',
    'The Complete Android Kotlin Developer Course',
    'The Complete Android Oreo Developer Course - Build 23 Apps!',
    'The Complete Android 10 & Kotlin Development Masterclass',
    'The Complete Android Q + Java Developer Course™ : 2020',
    'The Complete Android 10 Developer Course: Build REAL Apps!',
    'The Complete Android Material Design Course™',
    'The Complete Android Oreo(8.1), N, M and Java Development',
    'The Complete Android 10 Developer Course: Build REAL Apps!',
    'The Complete Android Material Design Course™',
    'The Complete Android Oreo(8.1), N, M and Java Development',
    'The Complete Android P + Java Developer Course™ : 2019',
    'The Complete Android Kotlin Developer Course',
    'The Complete Android Oreo Developer Course - Build 23 Apps!',
    'The Complete Android 10 & Kotlin Development Masterclass',
    'The Complete Web Developer Course 2.0',
    'The Complete 2020 Flutter Development Bootcamp with Dart',
    'The Complete Android N Developer Course',
    'The Complete iOS 13 Developer Course - and SwiftUI!',
]

const instructors = [
    'Dr. Angela Yu',
    'Colt Steele',
    'Maximilian Schwarzmüller',
    'Stephen Grider',
    'Andrei Neagoie',
    'Rob Percival',
    'Dr. Angela Yu',
    'Rob Percival',
    'Dr. Angela Yu',
    'Sriyank Siddhartha',
]

const generateDummyCourses = () => {
    const dummyCourses = [];
  
    for (let i = 1; i <= 30; i++) {
      const course = {
        id: ct.generateId(),
        name: courseNames[i % courseNames.length],
        instructor: instructors[i % instructors.length],
        description: `Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games`,
        details: `Interested in the field of Machine Learning? Then this course is for you!

        This course has been designed by a Data Scientist and a Machine Learning expert so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way.
        
        Over 900,000 students world-wide trust this course.
        
        We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science.
        
        This course can be completed by either doing either the Python tutorials, or R tutorials, or both - Python & R. Pick the programming language that you need for your career.
        
        This course is fun and exciting, and at the same time, we dive deep into Machine Learning. It is structured the following way:
        
        Part 1 - Data Preprocessing
        
        Part 2 - Regression: Simple Linear Regression, Multiple Linear Regression, Polynomial Regression, SVR, Decision Tree Regression, Random Forest Regression
        
        Part 3 - Classification: Logistic Regression, K-NN, SVM, Kernel SVM, Naive Bayes, Decision Tree Classification, Random Forest Classification
        
        Part 4 - Clustering: K-Means, Hierarchical Clustering
        
        Part 5 - Association Rule Learning: Apriori, Eclat
        
        Part 6 - Reinforcement Learning: Upper Confidence Bound, Thompson Sampling
        
        Part 7 - Natural Language Processing: Bag-of-words model and algorithms for NLP
        
        Part 8 - Deep Learning: Artificial Neural Networks, Convolutional Neural Networks
        
        Part 9 - Dimensionality Reduction: PCA, LDA, Kernel PCA
        
        Part 10 - Model Selection & Boosting: k-fold Cross Validation, Parameter Tuning, Grid Search, XGBoost
        
        Each section inside each part is independent. So you can either take the whole course from start to finish or you can jump right into any specific section and learn what you need for your career right now.
        
        Moreover, the course is packed with practical exercises that are based on real-life case studies. So not only will you learn the theory, but you will also get lots of hands-on practice building your own models.
        
        And as a bonus, this course includes both Python and R code templates which you can download and use on your own projects.
        
        `,
        enrollmentStatus: i % 3 === 0 ? 'Closed' : i % 2 === 0 ? 'InProgress' : 'Open',
        thumbnail: linkList[i % 4],
        duration: `${i % 2 === 0 ? '8' : '10'} weeks`,
        schedule: `Mondays and Wednesdays, ${i % 2 === 0 ? '7:00 PM - 9:00 PM' : '6:00 PM - 8:00 PM'}`,
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ],
        students: [
          {
            id: i * 100 + 1,
            name: `Student ${i * 100 + 1}`,
            email: `student${i * 100 + 1}@example.com`,
          },
          {
            id: i * 100 + 2,
            name: `Student ${i * 100 + 2}`,
            email: `student${i * 100 + 2}@example.com`,
          },
        ],
        ratings: [
            {
                id: i * 100 + 1,
                name: `Student ${i * 100 + 1}`,
                rating: 4,
                comment: 'This course is great!'
            },
            {
                id: i * 100 + 2,
                name: `Student ${i * 100 + 2}`,
                rating: 5,
                comment: 'This course is awesome!'
            },
        ],
        totalRatings: 12000,
        totalEnrolled: 30000,
        averageRating: 4.5,
        price: 4999,
        discountedPrice: 499,
        languages: ['English', 'Hindi'],
        tags: ['Python', 'Programming', 'Web Development'],
        captions: ['English', 'Hindi', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Russian', 'Portuguese', 'Turkish'],
        level: 'Beginner',
        certificate: 'Yes',
        shareableLink: 'https://www.google.com',
        youWillLearn: [
            'Build Python Graphical User Interfaces(GUI) with Tkinter',
            'Be able to use the in-built Python modules for their own projects',
            'Use programming fundamentals to build a calculator',
            'Use advanced Python concepts to code',
            'Build Your Own Python Applications',
            'Learn How to Build a Python GUI Application',
            'Learn How to Build a Python GUI Calculator',
            'Learn How to Build a Python GUI Tic Tac Toe Game',
            'Learn How to Build a Python GUI RSS Feed Web App',
            'Learn How to Build a Python GUI Contact Book Web App',
            'Learn How to Build a Python GUI Database',
            'Learn How to Build a Python GUI Webcam Recorder',
            'Learn How to Build a Python GUI Chat App with Sockets',
            'Learn How to Build a Python GUI Web Browser',
        ],
      };
  
      dummyCourses.push(course);
    }
  
    return dummyCourses;
};

export const storeDummyCourses = async() => {
    const dummyCourses = generateDummyCourses();
    for(let i = 0; i < dummyCourses.length; i++) {
        const response = await axios.post(api.baseUrl + api.storeCourse, dummyCourses[i], {
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        if (response.status === 200) {
            console.log('Successfully stored dummy course');
        } else {
            console.log('Failed to store dummy course');
        }
    }
};