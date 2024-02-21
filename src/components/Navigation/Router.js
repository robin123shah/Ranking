import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Table from "../table";
import NavBar from "./NavBar";
import Addmatch from "../Addmatch";
import Register from "../Register";
const Router = () => {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path = "/Ranking" element= {<Table />} />
            <Route path = "/AddMatch" element= {<Addmatch />} />
            <Route path = "/Register" element= {<Register />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;