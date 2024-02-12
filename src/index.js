import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { pointsTableObj } from "./points-table/pointsTableObj";
import { teamsInMatches } from "./helpers/teamsInMatches";
import { matches } from "./data/matches";
import { tournamentConfig } from "./data/tournamentConfig";
import { sortPointsTable } from "./points-table/sortPointsTable";

function App() {
  const [formData,setformData] = useState({
    date:'',
    t1:"",
    t1Ov:0,
    t1Ru:0,
    t1Wk:0,
    t2:"",
    t2Ov: 40,
    t2Ru: 212,
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
    matches.push(newlist);
  }
  

  console.log(
    matches.filter(
      match => match.t1 === "SL" && match.t2 === "SA"
    )
  );
  const pointsTableData = pointsTableObj({
    teams: teamsInMatches(matches),
    matches,
    config: tournamentConfig
  });
  const sortedPointsTable = sortPointsTable(
    Object.keys(pointsTableData).map(
      key => pointsTableData[key]
    )
  );
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th align="right">P</th>
            <th align="right">W</th>
            <th align="right">L</th>
            <th align="right">NRR</th>
            <th align="right">Pts</th>
          </tr>
        </thead>
        <tbody>
          {sortedPointsTable.map(team => (
            <tr key={team.team}>
              <td>{team.team}</td>
              <td align="right">{team.played}</td>
              <td align="right">{team.won}</td>
              <td align="right">{team.lost}</td>
              <td align="right">{team.netrr}</td>
              <td align="right">{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label><b>Date :</b></label>
        <input type="date" value={formData.date}
                name="date"
                onChange={handleChange}
                required />
        <label><b>Team 1 Name :</b></label>
        <input type="text" value={formData.t1}
                name="t1"
                onChange={handleChange}
                required />
        <label>Team 1 Over Played:</label>
        <input type="number" value={formData.t1Ov}
                name="t1Ov"
                onChange={handleChange}
                required />
        <label>Team 1 Run Made:</label>
        <input type="number" value={formData.t1Ru}
                name="t1Ru"
                onChange={handleChange}
                required />
        <label>Team 1 Wickets:</label>
        <input type="number" value={formData.t1Wk}
                name="t1Wk"
                onChange={handleChange}
                required />
        <label><b>Team 2 Name :</b></label>
        <input type="text" value={formData.t2}
                name="t2"
                onChange={handleChange}
                required />
        <label>Team 2 Over Played:</label>
        <input type="number" value={formData.t2Ov}
                name="t2Ov"
                onChange={handleChange}
                required />
        <label>Team 2 Run Made:</label>
        <input type="number" value={formData.t2Ru}
                name="t2Ru"
                onChange={handleChange}
                required />
        <label>Team 2 Wickets:</label>
        <input type="number" value={formData.t2Wk}
                name="t2Wk"
                onChange={handleChange}
                required />
      </form>
      <button onClick={handleButtonClick}>Upadate List</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
