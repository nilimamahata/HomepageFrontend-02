import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [language, setLanguage] = useState('EN');

  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle('high-contrast');
  };

  const increaseFont = () => {
    setFontSize(prev => Math.min(prev + 0.1, 1.5));
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  };

  const decreaseFont = () => {
    setFontSize(prev => Math.max(prev - 0.1, 0.8));
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  };

  const switchLanguage = () => {
    setLanguage(language === 'EN' ? 'हिंदी' : 'EN');
  };

  return (
    <>
      {/* Top Slim Strip */}
      <div className="top-strip">
        <div className="strip-text">
        </div>
        <div className="strip-controls">
          <button onClick={toggleContrast} className="accessibility-btn" aria-label="Toggle contrast">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </button>
          <button onClick={decreaseFont} className="accessibility-btn" aria-label="Decrease font size">
            A-
          </button>
          <button onClick={increaseFont} className="accessibility-btn" aria-label="Increase font size">
            A+
          </button>
          <button onClick={switchLanguage} className="language-btn">
            {language}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-left">
          <img src="/Shiksha.png" alt="Shiksha Logo" className="logo" />
          <div className="title">
            <h1>ShikshaCom</h1>
            <p>Empowerment Through Education</p>
          </div>
        </div>
        <div className="header-right">
          <span className="badge">Student Dashboard</span>
          <span className="badge">Teacher Dashboard</span>
          <span className="badge">Advance Teachings</span>
          <span className="badge">Career Councelling</span>
          <span className="badge">Digital India</span>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#courses">Courses</a>
            <ul className="dropdown-menu">
              <li><a href="#class8">Class 8</a></li>
              <li><a href="#class9">Class 9</a></li>
              <li><a href="#class10">Class 10</a></li>
              <li><a href="#class11">Class 11</a></li>
              <li><a href="#class12">Class 12</a></li>
              <li><a href="#science">Science</a></li>
              <li><a href="#math">Mathematics</a></li>
              <li><a href="#social">Social Studies</a></li>
              <li><a href="#english">English</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#live-classes">Live Classes</a>
          </li>
          <li className="nav-item">
            <a href="#recorded-classes">Recorded Classes</a>
          </li>
          <li className="nav-item">
            <a href="#assignments">Assignments</a>
          </li>
          <li className="nav-item">
            <a href="#quizzes">Quizzes</a>
          </li>
          <li className="nav-item">
            <a href="#study-materials">Study Materials</a>
          </li>
          <li className="nav-item">
            <a href="#teachers">Teachers</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
