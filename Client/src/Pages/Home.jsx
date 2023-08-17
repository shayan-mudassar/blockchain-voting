import * as React from "react";
import LockIcon from '@mui/icons-material/Lock';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

const theme = createTheme();
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(45deg, #00bfa5 30%, #69f0ae 90%)',
    borderRadius: '10px',
    boxShadow: '0 3px 5px 2px rgba(0, 191, 165, .3)',
    color: 'white',
  },
  text: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '36px',
    fontWeight: 'bold',
    marginLeft: '16px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  lockIcon: {
    fontSize: '48px',
  },
};
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        
      <div style={styles.container}>
      <Typography variant="h4" component="h1" style={styles.text}>
        Welcome To Secure E-voting System <LockIcon style={styles.lockIcon} />
      </Typography>
    </div>
            
    </ThemeProvider>
  );
}
