import { combineReducers } from '@reduxjs/toolkit';
import QuranData from './Quran';

const rootReducer = combineReducers({
    quran: QuranData,
})


export default rootReducer;