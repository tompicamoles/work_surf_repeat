import { useTheme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#05668D',
    },
    secondary: {
      main: '#f0f3bd',
    },
    text: {
      secondary: 'rgba(61,61,61,0.6)',
      disabled: 'rgba(74,74,74,0.38)',
    },
    icon: {
      secondary: 'rgba(61,61,61,0.6)',
      disabled: 'rgba(74,74,74,0.38)',
    }
  },
  shape: {
    borderRadius: 6,
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
  } ) 


