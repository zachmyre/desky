import { useEffect, useState } from 'react';
import '../App.css';

const JSONFormatter: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [formattedJson, setFormattedJson] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setJsonInput(inputValue);

    try {
      const parsedJson = convertStringToJson(inputValue);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      console.log(error);
      setFormattedJson('');
    }
  };

  const copyJsonToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = formattedJson;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('JSON copied to clipboard!');
  };

  useEffect(() => {
    // Prevent bugs with browser if saving w/ ctrl + s
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        // Prevent default behavior of Ctrl+S
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Empty dependency array to only add the event listener once

  return (
    <div className="Container">
      <div className="Editor">
        <textarea
          className="EditorInput"
          value={jsonInput}
          onChange={handleInputChange}
          placeholder="Enter JavaScript object here"
        />
      </div>
      <div className="View">
        <pre>{formattedJson}</pre>
        <button onClick={copyJsonToClipboard}>Copy JSON</button>
      </div>
    </div>
  );
};

const convertStringToJson = (inputString: string) => {
  const keyValuePairs = inputString.split(',\n');
  let jsonObject : any = {};

  keyValuePairs.forEach(pair => {
      const [key, value] = pair.split(':').map(item => {
        console.log(item);
        return item.trim()
      });
      if (value.startsWith('"') && value.endsWith('"')) {
          jsonObject[key] = value.slice(1, -1); // Remove quotes from strings
      } else if (value === 'true') {
          jsonObject[key] = true;
      } else if (value === 'false') {
          jsonObject[key] = false;
      } else if (!isNaN(Number(value))) {
          jsonObject[key] = Number(value);
      } else if (value.startsWith('[') && value.endsWith(']')) {
          jsonObject[key] = JSON.parse(value);
      } else if (value.startsWith('{') && value.endsWith('}')) {
          jsonObject[key] = JSON.parse(value);
      }
  });

  return jsonObject;
}


export default JSONFormatter;
