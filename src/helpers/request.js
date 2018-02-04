const request = {
  post: async ({ path, body, success, failure, dispatch }) => {
    loadToken();
    try {
      const res = await fetch(`http://localhost:1337/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.a.token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.status) {
        dispatch({ type: failure });
        return;
      }
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
  get: async ({ path, body, success, failure, dispatch }) => {
    loadToken();
    try {
      const res = await fetch(`http://localhost:1337/${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.a.token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.status) {
        dispatch({ type: failure });
        return;
      }
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
  token: '',
};
const loadToken = () => {
  const data = localStorage.getItem('token');

  if (data) {
    const token = JSON.parse(data);
    request.token = token['token'];
  }

};

export default request;
