import React from "react";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { AppBar } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    bar: {
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "inherit"
    }
});

export default () => {
    const classes = styles();
    return (
        <div>
            <AppBar position="relative" className={classes.bar} color="inherit">
                <WbSunnyIcon />
                <Link target="_" href="https://github.com/illias1/react-weather-illias"> GitHub </Link>
            </AppBar>
        </div>
    )
}