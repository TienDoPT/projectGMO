import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
});

export const getUser = () => {
    return instance.get('/users');
}

export const userLogin = (user) => {
    return instance.post('/login', user)
}

export const userSignUp = (user) => {
    return instance.post('/register', user)
}