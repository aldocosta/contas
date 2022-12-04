import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../views/About";
import Home from "../../views/Home";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/about' element={< About />}></Route>
        </Routes>
    )
}

export default AppRoutes