import axios from "axios";

const instance = axios.create({
  baseURL: "https://zillow-com1.p.rapidapi.com",
  timeout: 1000,
  headers: {
    "X-RapidAPI-Key": "3f969f773fmsh5981edd5b209872p162883jsn7907b57650ff",
    "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
  },
});

export const searchProperty = (params) => {
  instance
    .get("/propertyExtendedSearch", { params })
    .then((res) => console.log(res.data));
};

searchProperty({ location:'woodmere, ny',  home_type:'', isBasementFinished: 1});
