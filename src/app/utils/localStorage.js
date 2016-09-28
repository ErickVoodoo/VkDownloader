export const getFromLocalStorage = (name) => JSON.parse(localStorage.getItem(name));

export const setToLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value));
