import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'be522f5ebamsh2728573ec4fc2f0p1566fajsn75cc99767e92',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}