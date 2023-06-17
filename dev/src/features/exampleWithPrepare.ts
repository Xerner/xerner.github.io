import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import * as cookies from 'functions/cookies';
import { RootState } from 'store';

interface DarkModeState {
    isDarkMode: boolean;
}

export const darkModeSlice = createSlice<DarkModeState, SliceCaseReducers<DarkModeState>, string>({
    name: 'darkMode',
    initialState: {
        isDarkMode: cookies.getCookie('isDarkMode') === 'true'
    },
    reducers: {
        toggle: (state) => {
            state.isDarkMode = !state.isDarkMode;
            cookies.setCookie('isDarkMode', state.isDarkMode.toString());
        },
        toggleOn: (state) => {
            state.isDarkMode = true;
            cookies.setCookie('isDarkMode', state.isDarkMode.toString());
        },
        toggleOff: (state) => {
            state.isDarkMode = false;
            cookies.setCookie('isDarkMode', state.isDarkMode.toString());
        },
        set: (state, action: PayloadAction<{ item1: boolean; item2: boolean }>) => {
            state.isDarkMode = action.payload.item1;
            cookies.setCookie('isDarkMode', state.isDarkMode.toString());
        },
        set2: {
            reducer(state, action: PayloadAction<{ item1: boolean; item2: boolean }>) {
                state.isDarkMode = action.payload.item1;
                cookies.setCookie('isDarkMode', state.isDarkMode.toString());
            },
            prepare(item1: boolean, item2: boolean) {
                return { payload: { item1, item2 } };
            }
        }
    }
});

export const { toggle, toggleOn, toggleOff, set, set2 } = darkModeSlice.actions;
export const selectIsDarkMode = (state: RootState) => state.darkMode.isDarkMode;
export default darkModeSlice.reducer;
