import React from 'react';

function DisplayRecords({ numberOfRectangles }) {
  // Create an array of length 'numberOfRectangles'
  const rectangles = Array.from({ length: numberOfRectangles }, (_, index) => index);

  return (
    <div className="rectangle-container">
      {rectangles.map((index) => (
        <div key={index} className="rectangle">
          {/* You can customize the styles of each rectangle here */}
          Rectangle {index + 1}
        </div>
      ))}
    </div>
  );
}

export default DisplayRecords;
