import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Toolbar, Typography } from "@mui/material";
import Candidate from "../Components/Admin/Candidate";

const ResultCandidate = () => {
  const location = useLocation();
  const data = location.state.info;
  const largest = data.vote.sort((a, b) => a - b).reverse()[0];

  const findWinner = (candidate) => {
    const a = candidate
      .map((item, index) => {
        return (
          <Grid item xs={6} md={4} key={index}>
            <Candidate
              username={item}
              index={index}
              id={data._id}
              vote={data.vote[index]}
            />
          </Grid>
        );
      })
      .filter((item) => {
        if (!largest) {
          return true;
        } //if there is no highest voted then show all candidates
        else {
          return parseInt(item.props.children.props.vote) === largest;
        }
      });
    return a;
  };

  const style = {
    pageTitle: {
      paddingTop: 5,
      paddingBottom: 5,
    },
  };

  return (
    <div style={{ paddingBottom: 25 }}>
      <Toolbar>
        <Grid container pt={3} spacing={2}>
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h3" style={style.pageTitle}>
              Result of {data.name}
            </Typography>
          </Grid>
          {data.candidates != null &&
            data.candidates.map((item, index) => {
              return (
                <Grid item xs={6} md={4} key={index}>
                  <Candidate
                    username={item}
                    index={index}
                    id={data._id}
                    vote={data.vote[index]}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Toolbar>

      <Toolbar>
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h3" style={{padding: '30px 0px 10px 0px'}}>
              Winner for {data.name} is
            </Typography>
          </Grid>
          {findWinner(data.candidates)}
        </Grid>
      </Toolbar>
    </div>
  );
};

export default ResultCandidate;
