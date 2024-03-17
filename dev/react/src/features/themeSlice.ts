import { Theme } from '@material-ui/core/styles';
import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import * as cookies from 'library/cookies';
import { RootState } from 'store';
import { neonTheme } from 'neonTheme';

interface ThemeState {
    isDarkMode: boolean;
    theme: Theme;
}

export const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>, string>({
    name: 'darkMode',
    initialState: {
        isDarkMode: cookies.getCookie('isDarkMode') === 'true',
        theme: neonTheme(cookies.getCookie('isDarkMode') === 'true')
    },
    reducers: {
        toggleDarkMode: (state) => {
            var newDarkMode = !state.isDarkMode;
            cookies.setCookie('isDarkMode', newDarkMode.toString());
            return { isDarkMode: newDarkMode, theme: neonTheme(newDarkMode) }
        },
        toggleDarkModeOn: (state) => {
            cookies.setCookie('isDarkMode', 'true');
            return { isDarkMode: true, theme: neonTheme(true) }
        },
        toggleDarkModeOff: (state) => {
            cookies.setCookie('isDarkMode', 'false');
            return { isDarkMode: false, theme: neonTheme(false) }
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            var newDarkMode = action.payload;
            cookies.setCookie('isDarkMode', newDarkMode.toString());
            return { isDarkMode: newDarkMode, theme: neonTheme(newDarkMode) }
        }
    }
});

export const { toggleDarkMode, toggleDarkModeOn, toggleDarkModeOff, setDarkMode } = themeSlice.actions;
export const selectDarkMode = (state: RootState) => state.darkMode.isDarkMode;
export const selectTheme = (state: RootState) => state.darkMode.theme;
export default themeSlice.reducer;
