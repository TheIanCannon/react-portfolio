import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import 'Career' from './pages/Career.jsx';
import 'Coding' from './pages/Coding.jsx';
import 'Contact' from './pages/Contact.jsx';
import 'Status' from './pages/Status.jsx';
import 'Voice' from './pages/Voice.jsx';
import 'Welcome' from './pages/Welcome.jsx';
import 'Writing' from './pages/Writing.jsx';
import './App.css';

export default function App() {

    return(
        < Routes >
            < Route path="/*" element={<Navigate to="Welcome" />} />
            < Route path="/Career" element={<Career />} />
            < Route path="/Coding" element={<Coding />} />
            < Route path="/Contact" element={<Contact />} />
            < Route path="/Status" element={<Status />} />
            < Route path="/Voice" element={<Voice />} />
            < Route path="/Writing" element={<Writing />} />
            < Route path="/Welcome" element={<Welcome />} />
    );

}


