import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "90ch",
    backgroundColor: theme.palette.background.paper,
    marginTop: 10
  },
  inline: {
    display: "inline"
  },
  button: {
    backgroundColor: '#de7a7a'
  },
}));

const TOPICS = {
    "A1": [
        "A request from your boss",
        "A voicemail message",
        "Booking a table"
    ],
    "A2": [

    ],
    "B1": [

    ],
    "B2": [

    ],
    "C1": [

    ]
}

export default function AlignItemsList(props) {
  const classes = useStyles();

  const level = props.level.split(" ")[1];

  return (
    <List className={classes.root}>
      {TOPICS[level].map((topic, index) => (
        <div key={topic}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={topic} src={`https://melqonyang.github.io/improve-your-english/listening/A1/images/${topic.toLocaleLowerCase().replaceAll(" ", "_")}.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    <b>{topic}</b>
                  </Typography>
                </React.Fragment>
              }
            />
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<QueueMusicIcon />}
                onClick={()=>{props.setTest(topic)}}
              >
                Test
              </Button>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
