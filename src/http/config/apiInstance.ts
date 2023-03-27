import axios from 'axios';

const basesUrl = ["http://localhost:3000"]
const [localBaseUrl] = basesUrl;

const baseConfig = {
    baseURL: `${localBaseUrl}`,
    timeout: 10000,
};

const axiosInstance = axios.create({
    ...baseConfig,
});

export const api = axiosInstance;
