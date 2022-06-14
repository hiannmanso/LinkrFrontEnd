import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Login from "./pages/Login";

export default function App() {
    const [token, setToken] = useState(null);
    return (<>

        <BrowserRouter>
            <AuthContext.Provider value={{ token, setToken }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    </>
    )
}