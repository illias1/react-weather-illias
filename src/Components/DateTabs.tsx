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
  const date1: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[0].dt*1000).getUTCDate();
  const date2: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[9].dt*1000).getUTCDate();
  const date3: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[17].dt*1000).getUTCDate();
  const date4: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[25].dt*1000).getUTCDate();
  const date5: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[39].dt*1000).getUTCDate();
  const month1: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[0].dt*1000).getUTCMonth();
  const month2: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[0].dt*1000).getUTCMonth();
  const month3: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[0].dt*1000).getUTCMonth();
  const month4: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[0].dt*1000).getUTCMonth();
  const month5: number = JSON.stringify(list)==='{}' ? 0 : new Date(list[0].dt*1000).getUTCMonth();

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
          <Tab label={date1.toString() + '/' + month1.toString()} {...a11yProps(0)} />
          <Tab label={date2.toString() + '/' + month2.toString()} {...a11yProps(1)} />
          <Tab label={date3.toString() + '/' + month3.toString()} {...a11yProps(2)} />
          <Tab label={date4.toString() + '/' + month4.toString()} {...a11yProps(3)} />
          <Tab label={date5.toString() + '/' + month5.toString()} {...a11yProps(4)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DateTab list={list} i={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DateTab list={list} i={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DateTab list={list} i={2} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DateTab list={list} i={3} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DateTab list={list} i={4} />
      </TabPanel>
    </div>
  );
}


