import React from 'react';
import './Templates.css';

function Templates() {
  return (
    <div className="templates-page">
      <h1>CV Templates</h1>
      <div className="templates-container">
        <div className="template-card">
          <img src="1.png" alt="Template 1" />
          <h2>Template 1</h2>
          <p>Description of Template 1</p>
          <button>Browse</button>
        </div>
        <div className="template-card">
          <img src="2.png" alt="Template 2" />
          <h2>Template 2</h2>
          <p>Description of Template 2</p>
          <button>Browse</button>
        </div>
        <div className="template-card">
          <img src="3.png" alt="Template 3" />
          <h2>Template 3</h2>
          <p>Description of Template 3</p>
          <button>Browse</button>
        </div>
      </div>
    </div>
  );
}

export default Templates;
