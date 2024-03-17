import { createTheme } from '@material-ui/core';
import Color from 'color';



export const neonTheme = (darkMode: boolean) =>
	createTheme({
		palette: {
			type: darkMode ? 'dark' : 'light',
			primary: {
				light: darkMode ? Color('#910BEA').lighten(0.5).toString() : Color('#3F37C9').lighten(0.25).toString(), //D91CBC
				main: darkMode ? '#910BEA' : '#3F37C9', //B5179E
				dark: darkMode ? Color('#910BEA').darken(0.5).toString() : Color('#3F37C9').darken(0.25).toString(),
				contrastText: '#fff'
			},
			secondary: {
				light: '#ff7961',
				main: '#f44336',
				dark: '#ba000d',
				contrastText: '#000'
			},
			text: {
				primary: darkMode ? '#e8e8e8' : '#000000'
			}
		},
		cards: {
			primary: {
				light: darkMode ? Color('#910BEA').lighten(0.5).toString() : Color('#3F37C9').lighten(0.25).toString(), //D91CBC
				main: darkMode ? '#910BEA' : '#3F37C9', //B5179E
				dark: darkMode ? Color('#910BEA').darken(0.5).toString() : Color('#3F37C9').darken(0.25).toString(),
				contrastText: '#fff'
			}
		}
	});

/*
good night sky color: 073349
*/
