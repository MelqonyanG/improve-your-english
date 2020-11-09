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
        "Booking a table",
        "Business cards",
        "Finding the library",
        "Meeting a new team member",
        "Meeting other students",
        "Meeting people at a dinner",
        "Ordering in a cafe",
        "Organising a group project",
        "Shopping for clothes",
        "The first English class"
    ],
    "A2": [
        "A morning briefing",
        "An invitation to a party",
        "Changing a meeting time",
        "Changing plans",
        "Facts and figures",
        "Four conversations",
        "Instructions for an assignment",
        "Leaving a message",
        "Missing a class",
        "Transport announcements",
        "Understanding an explanation",
        "Who's who in the office"
    ],
    "B1": [
        "A phone call from a customer",
        "A student discussion",
        "A team meeting about diversity",
        "A weather forecast",
        "An interview about listening skills",
        "An introduction to a lecture",
        "Arriving late to class",
        "At the chemist",
        "Chatting about a series",
        "Making a decision",
        "Meeting an old friend",
        "Work–life balance"
    ],
    "B2": [
        "A business interview",
        "A design presentation",
        "A digital detox podcast",
        "A lecture about an experiment",
        "A talk about motivation",
        "Business news",
        "Creating a study group",
        "Film reviews",
        "Getting advice",
        "Joining a gym",
        "Office party planning",
        "Talking about rumours"
    ],
    "C1": [
        "A job interview",
        "A project management meeting",
        "An interview about two books",
        "Birthday parties",
        "Catching up after a trip",
        "Challenges at work",
        "Innovation in business",
        "Introverts – redressing the balance",
        "Renting a house",
        "Tech addiction",
        "The helix",
        "The history of hand gestures"
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
              <Avatar alt={topic} src={`https://melqonyang.github.io/improve-your-english/listening/${level}/images/${topic.toLocaleLowerCase().replaceAll(" ", "_")}.jpg`} />
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
