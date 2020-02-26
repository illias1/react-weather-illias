import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useSelector} from "react-redux";
import { IState, IList } from '../types';
import DateTab from "./DateTab";


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    margin: "auto"
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const list: IList[] = useSelector((state: IState) => state.list);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const dateMonth: string[]= [];
if(JSON.stringify(list) !== '[]'){
  for(let k: number=1 ; k < 40; k= k+8){
    const date = new Date(list[k].dt*1000);
    dateMonth.push(date.getUTCDate().toString() + '/' + (date.getUTCMonth()+1).toString());
  }
}

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {dateMonth.map((item: string, index: number) => (
            <Tab key={item} label={item} {...a11yProps(index)} />
          ))}

        </Tabs>
      </AppBar>

      {dateMonth.map((item: string, index: number) => (
            <TabPanel key={item} value={value} index={index}>
              <DateTab list={list} i={index} />
          </TabPanel>
          ))}
      
    </div>
  );
}


