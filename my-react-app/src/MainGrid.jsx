import './MainGrid.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const MainGrid = () => {
  return (
    <div className="main-grid">
      {/* Left Column */}
      <div className="left-column">
        {/* Highlight Card */}
        <div className="highlight-card">
          <div className="card-image">
            <div className="login-options">
              {/*<button className="login-btn">Teachers Login</button>
              <button className="login-btn">Students Login</button>*/}
              <button className="signup-btn">Students Signup</button>
            </div>
          </div>
          <div className="card-content">
            <h2>Learning Never Stops</h2>
            <p>Welcome to Shiksha</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel">
          <h3>Advance Teachings</h3>
          <div className="carousel-container">
            <div className="carousel-item">
              <h4>JEE Preparation, 1 Year</h4>
              <p>Mathematics, Physics, Chemistry</p>
            </div>
            <div className="carousel-item">
              <h4>NEET Preparation, 1 Year</h4>
              <p>Biology, Chemistry, Physics</p>
            </div>
            <div className="carousel-item">
              <h4>MBSE Class 12</h4>
              <p>All Subjects</p>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="announcements">
        {/*  <div className="announcement-icon">
            📣
          </div>*/}
          <h3>Latest Updates</h3>
          <ul>
            <li>New courses available</li>
            <li>Live class schedules updated</li>
            <li>Upcoming events</li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Connect Box */}
        <div className="connect-box">
          <h3>Connect with Shiksha</h3>
          <ul>
            <li><a href="#">Ask Doubts</a></li>
            <li><a href="#">Join Live Chat</a></li>
            <li><a href="#">Download App</a></li>
          </ul>
        </div>

        {/* Dashboard Button */}
        <button className="dashboard-btn">Visit Student Dashboard</button>

        {/* Social Media */}
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=61580053190184" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/shikshacom/" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/@Shikshacom-edu" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
        </div>

        {/* Achievers Feed */}
        <div className="achievers-feed">
          <h3>Top Achievers</h3>
          <div className="feed-item">
            <img src="/placeholder.jpg" alt="Achiever" />
            <p>Student A scored 95% in JEE</p>
          </div>
          <div className="feed-item">
            <img src="/placeholder.jpg" alt="Achiever" />
            <p>Student B topped the class</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;
