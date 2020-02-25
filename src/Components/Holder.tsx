import React from "react"
import Search from "./Search";
import Paper from '@material-ui/core/Paper';
import Tabs from "./DateTabs";
import { useSelector } from "react-redux";
import { IState } from "../types";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 800,
            margin: "auto"
        }
    })
)

export default () => {
    const state = useSelector((state: IState) => state);
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
        <Search />
        <Backdrop open={state.loading ? true : false}>
            <CircularProgress color="inherit" />
        </Backdrop>
        {
            state.fetched?
            <div>
                <Tabs />
            </div> :
            ""
        }
        
        </Paper>
    )
}