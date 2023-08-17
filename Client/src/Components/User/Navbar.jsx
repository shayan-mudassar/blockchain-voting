import React from "react";
import { Toolbar, Typography, AppBar, Grid } from "@mui/material";
import { NavbarData } from "../../Data/NavbarData";
import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';


export default function ButtonAppBar() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '65px',
      background: '#333', 
      padding: '0 20px',
      color: 'white', 
    },
    brandText: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    lockIcon: {
      fontSize: '36px',
      color:'white'
    },
    navLink: {
      color: 'white', 
      textDecoration: 'none', 
    },
  };

  return (
    <>
      <AppBar>
        <div style={styles.container}>
      <Typography variant="h5" component="h2" style={styles.brandText}>
        E-Voting Secure Ballot
      </Typography>
      <Grid item xs={6}>
              <Grid container gap={6} justifyContent="flex-end">
                {NavbarData.map((item, index) => {
                  return (
                    <Link to={item.link} key={index} >
                      <Typography style={styles.navLink}>
                        {item.title}
                      </Typography>
                    </Link>
                  );
                })}
              </Grid>
            </Grid>
            <Link to={'/admin'}>
      <LockIcon style={styles.lockIcon} />
            </Link>
    </div>
      </AppBar>
      <Toolbar />
    </>
  );
}
