import { call, put } from "redux-saga/effects";
import { requestLogin, requestSignUp } from "../../service";
import { setError, setLoading, setToken } from "../actions/loginAction";

export function* handlerLogin(action) {
    const { email, password } = action
    try {
        yield put(setLoading(true))
        const response = yield call(requestLogin, { email, password })
        const { token } = response?.data;
        console.log(token);
        yield put(setError(false))
        yield put(setToken(token))
    } catch (error) {
        yield put(setError(true))
        console.log(error.message);
    }
}

export function* handlerSignUp(action) {
    const { email, password } = action
    try {
        yield put(setLoading(true))
        const response = yield call(requestSignUp, { email, password })
        const { token } = response?.data;
        console.log(token);
        yield put(setError(false))
        yield put(setToken(token))
    } catch (error) {
        yield put(setError(true))
        console.log(error.message);
    }
}

