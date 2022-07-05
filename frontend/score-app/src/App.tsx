import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getLeagueTable } from './api/getLeagueTable';


const App = () => {
  const round = [1,2,3,4,5,6,7,8,9,10]
  const [ teams, setTeams ] = useState([])
  
  useEffect(() => {
      // axios.request(options).then((response) => {
      //   // console.log(response.data.DATA[0].ROWS);
      //   setTeams(response.data.DATA[0].ROWS)
      // }).catch((error) => {
      //   console.error(error);
      // });

      // med api funktioner direkt in i useEffecten va
    // const loadData = async () => {
    //   const response = await getLeagueTable()
    //   setTeams(response)
    // }
    // loadData()
  
  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sc0re App</h1>
      </header>
      <div className='fliks'>
        <select name="" id="">
          <option value="" disabled selected>Select Country</option>
          <option value="hej">Sweden</option>
          <option value="korb">Denmark</option>
          <option value="korb">Norway</option>
          <option value="korb">Finland</option>
        </select>
        <select name="" id="">
          <option value="" disabled selected>Select Round</option>
          {round.map((n) => {return <option>{n}</option>})}
        </select>
        <div>flik1one</div>
        <div>flik2two</div>
        <div>flik3three</div>
      </div>
      <div>
        {teams.map((team: any) => {return <p key={team.TEAM_ID}>{team.TEAM_NAME}</p>})}
      </div>
    </div>
  );
}

export default App;
