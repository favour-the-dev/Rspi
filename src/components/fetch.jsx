import axios from "axios";

const Url = 'https://yummly2.p.rapidapi.com/categories/list';
const options = {
    headers: {
        'X-RapidAPI-Key': '788d4c2c7cmsh6d917adc023661ep1519b7jsn94278f9cec63',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
};
export async function fetchApi(url){
    const response = await axios.get(`${Url}/${url}`, options);
    const data = response.data;
    return data;
}
