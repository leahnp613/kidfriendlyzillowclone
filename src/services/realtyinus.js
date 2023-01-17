const instance = axios.create({
    baseURL: 'realty-in-us.p.rapidapi.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });