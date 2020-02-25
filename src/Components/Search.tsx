import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../Redux/Actions";
import { IState } from "../types";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

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
    const state = useSelector((state: IState) => state);
    const classes = useStyles();
    return (
        <Grid className={classes.root} container spacing={1} alignItems="flex-end">
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <TextField onChange={event => setCity(event.target.value)} placeholder="Seoul" label="Search your city" />
            </Grid>
            <Grid item>
                <Button onClick={() => dispatch(fetch(city))} type="submit" variant="contained" color="primary">
                    Search
                </Button>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )
}