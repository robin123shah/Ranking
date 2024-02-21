import React, { useState,useEffect } from "react";
import "../styles.css";
import { pointsTableObj } from "../points-table/pointsTableObj";
import { teamsInMatches } from "../helpers/teamsInMatches";
import { matches } from "../data/matches";
import { tournamentConfig } from "../data/tournamentConfig";
import { sortPointsTable } from "../points-table/sortPointsTable";

export default function Table() {
  // const items = JSON.parse(localStorage.getItem('items'));
  const [items,setitem] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/getallusers') // Assuming your Express server is running on the same domain
      .then(response => response.json())
      .then(data => {
        setitem(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);



  if (items) {
  for(const ele of items){
    matches.push(ele)
    }
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
    <div className="App1">
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
    </div>
  );
}
