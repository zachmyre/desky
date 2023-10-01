import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JSONFormatter from '../features/JSONFormatter'; // Assuming you have a JSONFormatter component
import HTMLEditor from '../features/HTMLEditor'; // Assuming you have an HTMLEditor component
import Dashboard from '../features/Dashboard';

const MainWindow: React.FC<{ selectedRoute: string | null }> = ({ selectedRoute }) => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Placeholder route */}
        <Route path="/json/formatter" element={<JSONFormatter />} />
        <Route path="/html/editor" element={<HTMLEditor />} />
      </Routes>
  );
}

export default MainWindow;
