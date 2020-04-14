import { take, put, call, apply, takeLatest } from 'redux-saga/effects';
import { getQuran, setQuran, getError } from '../Slices/Quran';
import axios from 'axios';

export function* getQuranData() {
    try {
        const { data } = yield call(axios.get, 'http://api.alquran.cloud/v1/quran/ar.muyassar');
        const { surahs } = data.data
        yield put(setQuran({ data: surahs }));
    } catch (error) {
        yield put(getError({ error:'Error' }));
    }
}

export function* watchGetQuranData() {
    yield takeLatest(getQuran.type, getQuranData);
}