import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "../Pages/Login";
import HomeAdm from "../Pages/HomeAdm";
import Home from "../Pages/Home";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homeAdm" element={<HomeAdm />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default Routers;