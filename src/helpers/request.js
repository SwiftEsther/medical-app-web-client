const request = {
  post: async ({ path, body, success, failure, dispatch }) => {
    try {
      const res = await fetch(`http://localhost:1337/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
  get: async ({ path, body, success, failure, dispatch }) => {
    try {
      const res = await fetch(`http://localhost:1337/${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      dispatch({ type: success, data });
    } catch (e) {
      dispatch({ type: failure });
    }
  },
};
export default request;
