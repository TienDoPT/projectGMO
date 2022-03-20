import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
});

export const requestUser = () => {
    return instance.get('/users');
}

export const requestLogin = (user) => {
    return instance.post('/login', user)
}

export const requestSignUp = (user) => {
    return instance.post('/register', user)
}