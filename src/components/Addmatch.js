import React from "react";
import { useState, useEffect } from "react";
import "./Addmatch.css"
export default function Addmatch() {
        var matches = [];

        const [formData,setformData] = useState({
                date:'',
                t1:"",
                t1Ov:0,
                t1Ru:0,
                t1Wk:0,
                t2:"",
                t2Ov: 0,
                t2Ru: 0,
                t2Wk: 0,
              })
        const handleChange = (event) => {
        const { name, value } = event.target;
        setformData(prevState => ({
                ...prevState,
                [name]: value
        }));
        };
        const handleButtonClick = () => {
        var newlist = {
                date: formData.date,
                type: 1,
                fin: 1,
                t1: formData.t1,
                t1NR: 0,
                t1Ov: parseInt(formData.t1Ov),
                t1Ru: parseInt(formData.t1Ru),
                t1SupOvrR: 0,
                t1SupOvrW: 0,
                t1Wk: parseInt(formData.t1Wk),
                t2: formData.t2,
                t2NR: 0,
                t2Ov: parseInt(formData.t2Ov),
                t2Ru: parseInt(formData.t2Ru),
                t2SupOvrR: 0,
                t2SupOvrW: 0,
                t2Wk: parseInt(formData.t2Wk),
                dlmethod: false
        };
        console.log(newlist)
        let items = JSON.parse(localStorage.getItem('items'));
        
        if (items){
                items.push(newlist)
        }
        else{
                items = [newlist]
                console.log(items)
        }
        localStorage.setItem('items', JSON.stringify(items));
        }
        return (
                <div className="form">
                <form>
                <label><b>Date :</b></label>
                <input type="date" 
                value={formData.date}
                        name="date"
                        onChange={handleChange}
                        required />
                <label><b>Team 1 Name :</b></label>
                <input type="text" 
                value={formData.t1}
                        name="t1"
                        onChange={handleChange}
                        required />
                <label>Team 1 Over Played:</label>
                <input type="number"
                 value={formData.t1Ov}
                        name="t1Ov"
                        onChange={handleChange}
                        required />
                <label>Team 1 Run Made:</label>
                <input type="number" 
                value={formData.t1Ru}
                        name="t1Ru"
                        onChange={handleChange}
                        required />
                <label>Team 1 Wickets:</label>
                <input type="number" 
                value={formData.t1Wk}
                        name="t1Wk"
                        onChange={handleChange}
                        required />
                <label><b>Team 2 Name :</b></label>
                <input type="text" 
                value={formData.t2}
                        name="t2"
                        onChange={handleChange}
                        required />
                <label>Team 2 Over Played:</label>
                <input type="number" 
                value={formData.t2Ov}
                        name="t2Ov"
                        onChange={handleChange}
                        required />
                <label>Team 2 Run Made:</label>
                <input type="number"
                 value={formData.t2Ru}
                        name="t2Ru"
                        onChange={handleChange}
                        required />
                <label>Team 2 Wickets:</label>
                <input type="number" 
                        value={formData.t2Wk}
                        name="t2Wk"
                        onChange={handleChange}
                        required />
        </form>
        <button onClick={handleButtonClick}>Upadate List</button>
        </div>
        );
}