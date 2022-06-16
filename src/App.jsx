import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//reset css
import "./css/reset.css"
import "./css/global.css"

export default function App() {
    const [token, setToken] = useState(null);
    return (
        <>
            <BrowserRouter>
                <AuthContext.Provider value={{ token, setToken }}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </AuthContext.Provider>
            </BrowserRouter>
        </>
    )
}