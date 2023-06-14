import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/login.jsx';
import SignupPage from './pages/signup';
import DictionaryPage from './pages/dictionary/AddWordForm';
import CommunityPage from './pages/community/CommunityPage';
import WordListPage from './pages/dictionary/WordList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/main' element={<MainPage/>}/>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/signup' element={<SignupPage/>}/>
          <Route exact path='/dictionary' element={<DictionaryPage/>}/>
          <Route exact path='/CommunityPage' element={<CommunityPage/>}/>
          <Route exact path='/WordList' element = {<WordListPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;