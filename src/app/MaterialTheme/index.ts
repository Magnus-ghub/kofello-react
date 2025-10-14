import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';
import shadow from './shadow';
import typography from './typography';
import { maxWidth } from '@mui/system';

declare module "@mui/material/styles" {
  interface Palette {
    redbutton: Palette["primary"];
  }
  interface PaletteOptions {
    redbutton?: PaletteOptions["primary"];
  }
}

// 🔽 Agar Button color prop’ida ishlatmoqchi bo‘lsang:
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    redbutton: true;
  }
}
/**
 * LIGHT THEME (DEFAULT)
 */
const light = {
	palette: {
		type: 'light',
		background: {
			default: '#f8f8ff',
			paper: common.white,
		},
		primary: {
			contrastText: '#d7b586',
			main: '#343434',
		},
		secondary: {
			contrastText: '#343434',
			main: '#d7b586',
		},
		redbutton: {
            main: "transparent",   // default holat — fon yo‘q
            contrastText: "#343434", // matn rangi
            active: "#e53935",     // bosilganda qizil fon
            hover: "rgba(239, 20, 20, 0.94)",
        },
		text: {
			primary: '#343434',
			secondary: '#d7b586',
			dark: common.black,
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					height: '100%',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				html: { height: '100%' },
				body: { background: '#f4f6f8', height: '100%', minHeight: '100%' },
			},
		},
	},
	shadow,
	typography,
};

// A custom theme for this app
let theme = createTheme(light);
theme = createTheme(theme, {
	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthLg: {
					[theme.breakpoints.up('lg')]: {
						maxWidth: '1300px',
					},
				},
			},
		},
	},
});

export default theme;
