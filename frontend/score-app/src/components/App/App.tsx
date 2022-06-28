import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


const options = {
  method: 'GET',
  url: 'https://flashscore.p.rapidapi.com/v1/tournaments/standings',
  params: {
    locale: 'en_GB',
    standing_type: 'overall',
    tournament_stage_id: 'C4LC0aVr',
    tournament_season_id: 'tdkpynmB'
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': 'flashscore.p.rapidapi.com'
  }
};



const App = () => {

  const [ teams, setTeams ] = useState([])
  
  useEffect(() => {
      axios.request(options).then((response) => {
        console.log(response.data);
        setTeams(response.data.DATA[0].ROWS)
      }).catch((error) => {
        console.error(error);
      });
    
  }, []);
  
  
  // let printData: any = (tableData: any) => {
  //   let getData = tableData()
  //   let data = getData.DATA[0].ROWS
  //   return (
  //     <p>{
  //       data.map((team: any) => {return <p>{team.TEAM_NAME}</p>})
  //       }</p>
  //   )
  // }

  // let getData = tableData()
  // let data = getData.DATA[0].ROWS

  return (
    <div className="App">
      <header className="App-header">
        <h1>Oscars och Peters väldigt fina resultatapp</h1>
        <div>
          {
            teams.map((team: any) => {return <p key={team.TEAM_ID}>{team.TEAM_NAME}</p>})
            }
        </div>
      </header>
    </div>
  );
}

export default App;
