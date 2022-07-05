import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {getLeagueTable} from '../../api/getLeagueTable'


interface ITable {
  ranking: number,
  teamQualification: string,
  TUC: string,
  teamName: string,
  teamId: string,
  matchesPlayed: number,
  wins: number,
  goals: string,
  points: number,
  dynamicColumnsData: string[],
  participantId: number,
  dynamicColumnsDatalive: number|null,
  teamImgPath: string 
}

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

export const getTable = createAsyncThunk('skahaettname', 
    async () => {
      const response = await getLeagueTable()
      return response
    }
)

export const getLeagueTable2 = createAsyncThunk(
  'todos/getTodoAsync',
  async () => {
    // const resp = await fetch ('')
    axios.request(options).then((response) => {
      // console.log(response.data);
      const result: ITable[] = response.data.DATA[0].ROWS 
      return(result)
    }).catch((error) => {
      console.error(error);
    });
  }
)

export const LeagueTableSlice: any = createSlice({
  name: 'LeagueTable',
  initialState: [
    ],
    reducers: {
      getLeagueTable: (state, action) => {
        const table: ITable = {
          ranking: action.payload.RANKING,
          teamQualification: action.payload.TEAM_QUALIFICATION,
          TUC: action.payload.TUC,
          teamName: action.payload.TEAM_NAME,
          teamId: action.payload.TEAM_ID,
					matchesPlayed: action.payload.MATCHES_PLAYED,
					wins: action.payload.WINS,
					goals: action.payload.GOALS,
					points: action.payload.POINTS,
					dynamicColumnsData: action.payload.DYNAMIC_COLUMNS_DATA,
					participantId: action.payload.PARTICIPANT_ID,
					dynamicColumnsDatalive: action.payload.DYNAMIC_COLUMNS_DATA_LIVE,
					teamImgPath: action.payload.TEAM_IMAGE_PATH 
        }
        // state.push(table)
      }
    }
})

// export const { getLeagueTable }