import axios from 'axios';

const basesUrl = process.env.BACKEND_URL || "http://localhost:3000";

const baseConfig = {
    baseURL: `${basesUrl}`,
    timeout: 10000,
};

const axiosInstance = axios.create({
    ...baseConfig,
});

export const api = axiosInstance;
