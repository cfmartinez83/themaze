const api = (url, data, method, contentType='application/json', accept='application/json') => fetch(url, {
  method,
  headers: {
    'content-type': contentType,
    'accept': accept,
  },
  body: data ? JSON.stringify(data) : null,
})
.then(response => response)
.catch(err => err);

export default api;
