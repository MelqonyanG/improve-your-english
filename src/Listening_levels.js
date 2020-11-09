import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HearingIcon from "@material-ui/icons/Hearing";
import Grid from "@material-ui/core/Grid";
import Listening_content from './Listening_content';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(#1f4037, #99f2c8)",
    color: "white",
    flexGrow: 1,
    height: "min-content"
  }
}));

const LEVELS = [
  "Beginner A1",
  "Pre-Intermediate A2",
  "Intermediate B1",
  "Upper-Intermediate B2",
  "Advanced C1"
];

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={4} xs={4}>
          <List component="nav" aria-label="main mailbox folders">
            {LEVELS.map((level, index) => (
              <div key={level}>
                <ListItem
                  button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <ListItemIcon>
                    <HearingIcon />
                  </ListItemIcon>
                  <ListItemText primary={level} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Grid>
        <Grid item md={8} xs={8}>
          <Listening_content level={LEVELS[selectedIndex]}/>
        </Grid>
      </Grid>
    </div>
  );
}
