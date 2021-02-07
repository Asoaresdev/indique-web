import React, { useContext } from "react";
import { Grid, Typography, Avatar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import WelcomeBallon from "../../Components/DashboardPage/WelcomeBallon";

import CardVagas from "../../Components/DashboardPage/CardVagas";
import CardConteudos from "../../Components/DashboardPage/CardConteudos";
import CardCandidaturas from "../../Components/DashboardPage/CardCandidaturas";
import CardCandidateLoading from "../../Components/DashboardPage/CardCandidateLoading";
import CardCandidatesAvaillable from "../../Components/DashboardPage/CardCandidatesAvaillable";
import CardCultural from "../../Components/DashboardPage/CardCultural";
import CardJobsAvaillable from "../../Components/DashboardPage/CardJobsAvaillable";
import CardRegisterJobs from "../../Components/DashboardPage/CardRegisterJobs";

import { useStyles } from "./style";

export default function DashboardPage() {
  const { states, setters } = useContext(GlobalStateContext);
  const classes = useStyles();
  const isCandidate = () => {
    return !!states.candidate.email;
  };
  const isCompany = () => {
    return !!states.company.email;
  };
  const isMentor = () => {
    return !!states.mentor.email;
  };

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} className={classes.header}>
        <Typography variant="body1" component="p" className={classes.titulo}>
          Bem vindo!
        </Typography>
      </Grid>
      <Grid item xs={3} md={1} className={classes.gridAvatar}>
        <Avatar className={classes.large} alt="Remy Sharp" />
      </Grid>
      <Grid item xs={9} md={11} className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <WelcomeBallon />
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.gridButtons}>
              {isCandidate() && (
                <>
                  <CardVagas />
                  <CardConteudos />
                  <CardCandidaturas />
                </>
              )}
              {isCompany() && (
                <>
                  <CardRegisterJobs />
                  <CardCultural />
                  <CardCandidateLoading />
                </>
              )}
              {isMentor() && (
                <>
                  <CardJobsAvaillable />
                  <CardCandidatesAvaillable />
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
