import React from 'react';
import { Route, Routes } from "react-router-dom";

import SignIn from '../../views/SignIn';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
    </Routes>
);
export default AuthRoutes;