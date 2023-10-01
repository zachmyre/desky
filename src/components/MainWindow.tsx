import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JSONFormatter from '../features/JSONFormatter'; // Assuming you have a JSONFormatter component
import HTMLEditor from '../features/HTMLEditor'; // Assuming you have an HTMLEditor component
import Dashboard from '../features/Dashboard';

const MainWindow: React.FC = () => {
  return (
    <div className="MainWindow">
      <h1>Title</h1>
      <p>Desc</p>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/json/formatter" element={<JSONFormatter />} />
        <Route path="/html/editor" element={<HTMLEditor />} />
      </Routes>
    </div>
  );
}

export default MainWindow;
