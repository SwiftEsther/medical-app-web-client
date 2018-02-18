const KEY = 'MEDICAL_APP_STATE';
const persist = {
  saveState: (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  },

  loadState: () => {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
};
export default persist;
