import { createSlice } from '@reduxjs/toolkit';

const QuranData = createSlice({
    name: "quranData",
    initialState: {
        quran: [],
        loading: false,
        success: false,
        fail: false,
        errorMessage: '',
        network:''
    },
    reducers: {
        getQuran(state, action) {
            state.loading = true
        },
        setQuran(state, action) {
            const { data } = action.payload
            state.quran = data
            state.success = true
            state.loading = false
        },
        getError(state, action) {
            const { error } = action.payload
            state.errorMessage = error
            state.fail = true
            state.loading = false
        },
        setNetwork(state, action){
            const { network } = action.payload
            state.network = network
        }
    }
})

export const { getQuran, setQuran, getError, setNetwork } = QuranData.actions;

export default QuranData.reducer;