import React from "react"
import { IList } from "../types"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    li: {
      width: "40%",
      [theme.breakpoints.down(570)]: {
        width: "100%",
      }
    }
  }),
);
type IPropsDateTab = {
    i: number,
    list: IList[],
}

export default (props: IPropsDateTab) => {
    const classes = useStyles();
    const testRange: number[] = Array.from(Array(8).keys());
    const rangeOfTime = testRange.map(item => convert(props.list[item].dt, "h"))
    const secondDayIndex = rangeOfTime.findIndex(item => item === 0);
    const range: number[] = props.i === 0 ? 
        Array.from(Array(secondDayIndex).keys()) :
        Array.from(Array(8).keys()).map((l: number) => secondDayIndex+l+8*(props.i-1));

        return(
        <List className={classes.root}>

            {range.map((l: number) => {
                const iconURL = `https://openweathermap.org/img/wn/${props.list[l].weather[0].icon}@2x.png`
                return(
                <ListItem className={classes.li} key={l} alignItems="center">
                        <Chip label={convert(props.list[l].dt, "h").toString() + ":00"} variant="outlined" />
                        <ListItemAvatar>
                        <img src={iconURL} alt={`icon-${props.list[l].weather[0].icon}`}/>
                        </ListItemAvatar>
                        <ListItemText
                        primary={(Math.floor(props.list[l].main.temp - 273.15).toString() + '˚C')}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                                >
                                {props.list[l].weather[0].description}
                            </Typography>
                            </React.Fragment>
                        }
                        />
                </ListItem>
            )})}
        </List>
        )
}


function convert(date: number, what: "h" | "d" | "m"){
    switch(what){
      case "h":
        return new Date(date*1000).getUTCHours()
      case "d":
        return new Date(date*1000).getUTCDate()
      case "m":
        return new Date(date*1000).getUTCMonth()
      default:
        return date
    }
  }

	