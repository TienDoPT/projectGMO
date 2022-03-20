import { takeLatest } from "redux-saga/effects"
import { USER_LOGIN, USER_SIGNUP} from "../actions/actionsType"
import { handlerLogin, handlerSignUp } from "./handler"

export function* watcherSaga() {
    yield takeLatest(USER_LOGIN, handlerLogin);
    yield takeLatest(USER_SIGNUP, handlerSignUp);
}