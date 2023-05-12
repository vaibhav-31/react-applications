import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'e3903ef6b6mshe4e3531d5f54183p1bf901jsnb4e4dd8eab33'
    }
  });

  return data;
}