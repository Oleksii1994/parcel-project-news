export function setToLS(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function getFromLS(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
export function getReadingNews() {
  return JSON.parse(localStorage.getItem('readingNews'));
}
