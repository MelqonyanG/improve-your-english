import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "90ch",
    backgroundColor: theme.palette.background.paper,
    marginTop: 10
  },
  inline: {
    display: "inline"
  }
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
              <Avatar alt={topic} src={`public/listening/A1/images/${topic.toLocaleLowerCase().replaceAll(" ", "_")}.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  {`/static/${topic.toLocaleLowerCase().replaceAll(" ", "_")}`}
                    {topic}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
