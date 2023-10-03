import React, { useEffect, useState } from 'react';
import '../App.css';

const HTMLEditor: React.FC = () => {
  const [htmlInput, setHtmlInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlInput(e.target.value);
  };

  useEffect(() => {
    // Prevent bugs with browser if saving w/ ctrl + s 
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Prevent default behavior of Ctrl+S
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array to only add the event listener once


  return (
    <div className="Container">
      <div className="Editor">
        <textarea
          className="EditorInput"
          value={htmlInput}
          onChange={handleInputChange}
          placeholder="Enter HTML code here"
        />
      </div>
      <div style={styles.View} dangerouslySetInnerHTML={{ __html: htmlInput }} />
    </div>
  );
}

const styles = {
  View: {
    backgroundColor: 'white',
    width: '77%',
    borderRadius: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    overflow: 'auto',
    color: 'black'
  }
}

export default HTMLEditor;
