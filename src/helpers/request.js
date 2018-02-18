const API_URL = 'https://glacial-escarpment-58268.herokuapp.com/';
const loadToken = (request) => {
  const data = localStorage.getItem('token');

  if (data) {
    const token = JSON.parse(data);
    request.token = token.token;
  } else {
    request.token = '';
  }
};
const request = {
  post: async ({
    path, body, success, failure, dispatch,
  }) => {
    loadToken(this);
    try {
      const res = await fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.status || res.status >= 400) {
        dispatch({ type: failure });
        return;
      }
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
  put: async ({
    path, body, success, failure, dispatch,
  }) => {
    loadToken(this);
    try {
      const res = await fetch(`${API_URL}${path}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.status || res.status >= 400) {
        dispatch({ type: failure });
        return;
      }
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
  delete: async ({
    path, body, success, failure, dispatch,
  }) => {
    loadToken(this);
    try {
      const res = await fetch(`${API_URL}${path}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.status || res.status >= 400) {
        dispatch({ type: failure });
        return;
      }
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
  get: async ({
    path, success, failure, dispatch,
  }) => {
    loadToken(this);
    try {
      const res = await fetch(`${API_URL}${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
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
};


export default request;
