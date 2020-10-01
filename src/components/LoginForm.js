import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Autorenew } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: 50,
    },
    paper: {
      backgroundColor: "white",
      width: 400,
      margin: "0 auto",
      textAlign: "center",
      padding: 20,
    },
    input: {
      width: "95%",
      marginBottom: 20,
    },
  })
);

export function LoginForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Email" className={classes.input} />
          <TextField label="Password" className={classes.input} />
          <Checkbox
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <Button variant="contained" className={classes.input} color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
