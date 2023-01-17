const instance = axios.create({
    baseURL: 'realty-in-us.p.rapidapi.com',
    timeout: 1000,
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3f969f773fmsh5981edd5b209872p162883jsn7907b57650ff',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
      },
  });