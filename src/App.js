import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Actions from './Actions';
import Listening_levels from './Listening_levels';
import Tips from './Tips';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: '#8ED0B1' },
    secondary: { main: "#030303" },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const SELECTS = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5', 'level_6', 'phrases', 'irregular_verbs', 'another', 'all', 'armen', 'listening'];
function getLabelName(label){
  const parts = label.split("_");
  return parts[0].toUpperCase() + (parts[1] ? ` ${parts[1]}`: "");
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundImage: "linear-gradient(#1f4037, #99f2c8)",
    color: "white",
    height: "100vh",
    minWidth: "17%"
  },
}));

export default function AppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Tips />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {
            SELECTS.map((label, index) => <Tab key={label} label={getLabelName(label)} {...a11yProps(index)} />)
          }
        </Tabs>
        {
            SELECTS[value] === 'listening'? <Listening_levels/> : <TabPanel value={value} index={value}>
          <Actions level={SELECTS[value]} />
        </TabPanel>
        }

      </div>
    </MuiThemeProvider>
  );
}
