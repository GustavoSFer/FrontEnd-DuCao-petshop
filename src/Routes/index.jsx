import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "../Pages/Login";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}

export default Routers;