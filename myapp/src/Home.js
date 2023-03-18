import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Create a Professional Resume in Minutes</h1>
        <p>Create, edit and share your professional resume with ease</p>
        <div className="hero-buttons">
           <Link to="/templates"><button className="create-button">Create Resume</button></Link>
          <button className="explore-button">Explore</button>
        </div>
      </div>
      <div className="step-container">
        <div className="step">
          <div className="step-icon">1</div>
          <h2>Pick a Template</h2>
          <p>
            Choose a professional template that best suits your skills and
            experience
          </p>
        </div>
        <div className="step">
          <div className="step-icon">2</div>
          <h2>Fill Out Information</h2>
          <p>
            Add your personal information, work experience, education, and
            skills
          </p>
        </div>
        <div className="step">
          <div className="step-icon">3</div>
          <h2>Customize Your Layout</h2>
          <p>
            Change the layout, fonts, and colors to make your resume unique and
            professional
          </p>
        </div>
        <div className="step">
          <div className="step-icon">4</div>
          <h2>Complete and Download Your CV</h2>
          <p>
            Review your resume and make any necessary changes, then download it
            in PDF format
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
