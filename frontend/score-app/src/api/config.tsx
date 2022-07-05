import axios from "axios"

// export default axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
export default axios.defaults.baseURL = 'https://flashscore.p.rapidapi.com/v1/'
axios.defaults.headers.common = {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': 'flashscore.p.rapidapi.com' 
}