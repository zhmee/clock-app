import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DigitalClock from './components/DigitalClock';
import Timer from './pages/timer';
import TodoList from './pages/todoList';


function App(){ return (
  <BrowserRouter>
    <div className="app-container">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<DigitalClock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
      
      <nav className="navigation-bar">
        <div className="button-container">
          <Link to="/" style={{ textDecoration: 'none' }} className="nav-button clock-button">
            Digital Clock
          </Link>
          <Link to="/timer" style={{ textDecoration: 'none' }} className="nav-button timer-button">
            Timer
          </Link>
          <Link to="/todo" style={{ textDecoration: 'none' }} className="nav-button todo-button">
            Todo List
          </Link>
        </div>
      </nav>
    </div>
  </BrowserRouter>
);
};

export default App
