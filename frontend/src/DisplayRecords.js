import React from 'react';
import './DisplayRecords.css'; // Import the CSS file

function DisplayRecords({ numberOfRectangles }) {
  const rectangles = Array.from({ length: numberOfRectangles }, (_, index) => index);

  return (
    <div className="rectangle-container">
      {rectangles.map((index) => (
        <div key={index} className="rectangle">
          <div className="rectangle-content">
            <span className="rectangle-date">Date</span>
          </div>
          <div className="rectangle-content">
            <span className="rectangle-text">Text</span>
          </div>
          <button className="access-button">Access</button>
        </div>
      ))}
    </div>
  );
}

export default DisplayRecords;
