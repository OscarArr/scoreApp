import axios from "axios"
import baseAxios from "./config"
const baseAxio = baseAxios

// hämtar allsvenskan, för dynamik ändra i params. stage_id för byte av liga.
export const getLeagueTable = async () => {
    const leaguetable = await axios.get('tournaments/standings', 
    {  params: {
        locale: 'en_GB',
        standing_type: 'overall',
        tournament_stage_id: 'C4LC0aVr',
        tournament_season_id: 'tdkpynmB'
    }})

    // console.log(leaguetable.data.DATA[0].ROWS);
    
    return leaguetable.data.DATA[0].ROWS
}