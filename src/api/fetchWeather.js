import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '919b297fae15e1182c7a6bef0983a928';

export const fetchWeather = async (query) => {

    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units:  'metric',
            APPID: API_KEY,
        }

    });
    return data;
}

