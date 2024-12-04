export function saveStateToLocalStorage(title, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(title, serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage \n", e);
    return undefined;
  }
}

export function loadStateFromLocalStorage(title) {
  try {
    const serializedState = localStorage.getItem(title);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading state from localStorage \n", e);
    return undefined;
  }
}
