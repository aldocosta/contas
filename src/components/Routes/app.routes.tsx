import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../views/About";
import Home from "../../views/Home";
import User from "../../views/User";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/about' element={< About />}></Route>
            <Route path='/caduser' element={<User />}></Route>
        </Routes>
    )
}

export default AppRoutes