import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { fetch } from "../Redux/Actions";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      margin: "2em 0"
    },

  }),
);
export default () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState("");
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <Grid className={classes.root} container spacing={1} alignItems="flex-end">
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <TextField onChange={event => setCity(event.target.value)} placeholder="Seoul" label="Search your city" />
            </Grid>
            <Grid item>
                <Button 
                onClick={() => {
                    city === "" ?
                    setOpen(true) :
                    dispatch(fetch(city))
                }} 
                type="submit" 
                variant="contained" 
                color="primary">
                    Search
                </Button>
            </Grid>
            <Grid item>

            </Grid>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                Write in a city!
                </Alert>
            </Snackbar>
        </Grid>
    )
}