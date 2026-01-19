// Configuration module
const DEFAULT_CONFIG = {
    apiUrl: process.env.API_URL || 'http://localhost:3000/api',
    environment: process.env.NODE_ENV || 'development',
};

let config = DEFAULT_CONFIG;

export async function loadConfig() {
    // Load config from server or environment
    console.log('Config loaded:', config);
    return config;
}

export function getConfig() {
    return config;
}

export function setConfig(newConfig) {
    config = { ...config, ...newConfig };
}
