import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
//reset css
import "./css/reset.css"
import "./css/global.css"
import Home from "./pages/Home/index.jsx";
import HashtagPage from "./pages/HashtagPage/index.jsx";

export default function App() {
    const [token, setToken] = useState(null);
    const [infoUser, setInfoUser] = useState("");
    const [id, setID] = useState("");
    return (<>

        <BrowserRouter>
            <AuthContext.Provider value={{ token, setToken, infoUser, setInfoUser, id, setID }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/timeline" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path='hashtag/:hashtag' element={<HashtagPage />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    </>
    )
}