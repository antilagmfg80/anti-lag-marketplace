// Local storage utility module

export function getFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Error reading from storage (${key}):`, error);
        return null;
    }
}

export function saveToStorage(key, value) {
    try {
        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        console.error(`Error writing to storage (${key}):`, error);
    }
}

export function clearStorage() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
}
