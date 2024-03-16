import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const Subtitle = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    const typeText = (text, index) => {
        if (index < text.length) {
            // Check if the character at the current index is the desired stop point
            if (index === 22) { // Change 15 to the desired stop position
                setDisplayText(prevText => prevText + text.charAt(index) + '<br>'); // Add a newline character
            } else {
                setDisplayText(prevText => prevText + text.charAt(index));
            }
            setTimeout(() => typeText(text, index + 1), 100); // Adjust typing speed here (milliseconds)
        }
    };

    // Start typing when component mounts
    useState(() => {
        typeText(text, 0);
    }, [text]);

    return <div className="Subtitle" dangerouslySetInnerHTML={{ __html: displayText }} />; // Use dangerouslySetInnerHTML to render HTML
};

export default Subtitle;
