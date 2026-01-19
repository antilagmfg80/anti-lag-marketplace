// Authentication module
import { getFromStorage, saveToStorage } from './storage.js';

export async function initAuth() {
    const token = getFromStorage('authToken');
    
    if (token) {
        // Verify token is still valid
        console.log('Auth token found');
    } else {
        console.log('No auth token found');
    }
}

export function login(credentials) {
    // Login logic here
    saveToStorage('authToken', credentials.token);
}

export function logout() {
    saveToStorage('authToken', null);
}
