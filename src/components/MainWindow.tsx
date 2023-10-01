import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import JSONFormatter from '../features/JSONFormatter'; // Assuming you have a JSONFormatter component
import HTMLEditor from '../features/HTMLEditor'; // Assuming you have an HTMLEditor component
import Dashboard from '../features/Dashboard';
import { links } from './Sidebar';

interface Header{
  title: string;
  description?: string;
}

const MainWindow: React.FC = () => {
  const [headerData, setHeaderData] = useState({title: "", description: ""});
  const location = useLocation();

  useEffect(() => {
    const link = links.find((link) => link.href === location.pathname);
    setHeaderData({title: link?.name ?? "", description: link?.description ?? ""});
  }, [location]);

  return (
    <div className="MainWindow">
      <div className="MainWindow-header">
      <h3>{headerData.title}</h3>
      <p>{headerData.description}</p>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/json/formatter" element={<JSONFormatter />} />
        <Route path="/html/editor" element={<HTMLEditor />} />
      </Routes>
    </div>
  );
}

export default MainWindow;
