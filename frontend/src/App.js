import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";

import AppContext from './utils/Context';

import Home from './Home/Home';
import CourseDetails from './CourseDetails/jsx/CourseDetails';
import Dashboard from './StudentDashboard/Dashboard';
import SignIn from './signin/SignIn';
import Signup from './Signup/Signup';
import Search from './Search/jsx/Search';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <AppContext>
            <CssBaseline />

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/signin' element={<SignIn/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/user/:userName' element={<Dashboard/>} />
              <Route path='/course-details/:courseId' element={<CourseDetails/>} />
              <Route path='/search/:query' element={<Search/>} />
              <Route path='*' element={<h1>Not Found 404</h1>} />
            </Routes>
          </AppContext>
        </BrowserRouter>
    </div>
  );
}

export default App;
