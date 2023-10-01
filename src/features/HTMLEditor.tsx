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
    <div style={styles.Container}>
      <div style={styles.Editor}>
        <textarea
          style={styles.EditorInput}
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
  Container: {
    display: 'flex',
    height: '85%', // Adjust the height as needed
    width: '100%'
  },
  Editor: {
    backgroundColor: '#f9f9f9',
    width: '33%',
    marginRight: '5px',
    borderRadius: '10px',
    padding: '10px',
  },
  EditorInput: {
    height: '100%',
    width: '100%',
    border: 'none',
    fontSize: '14px',
    fontFamily: 'monospace',
    outline: 'none',
    resize: 'none' as 'none' // Set resize to none
  },
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
