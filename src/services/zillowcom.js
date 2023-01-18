import axios from "axios";

const instance = axios.create({
  baseURL: "https://zillow-com1.p.rapidapi.com",
  timeout: 1000,
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "3f969f773fmsh5981edd5b209872p162883jsn7907b57650ff",
    "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
  },
});

export const searchProperty = () =>{

   return axios.get("/propertyExtendedSearch", {
      params: { location: "santa monica, ca", home_type: "Houses" },
    }).then( res => console.log(res.data));
}
