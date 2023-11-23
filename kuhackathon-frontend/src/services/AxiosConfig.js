import axios from 'axios';

export const AxiosConfig = axios.create({
    baseURL: 'http://hackathon.django.ratchaphon1412.co',
    headers: {
        'Content-Type': 'application/json',
    },
});
