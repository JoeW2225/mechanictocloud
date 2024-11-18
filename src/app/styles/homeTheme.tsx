import { createTheme } from '@mui/material/styles';

const homeTheme = createTheme({
    palette: {
        primary: {
            light: '#faebd7', // antique-white
            main: '#566056', // MUI grey
            dark: '#173A5E', // dark blue
        },
        secondary: {
            light: '#faebd7',
            main: '#566056',
            dark: '#173A5E',
        },
    },
});

export default homeTheme