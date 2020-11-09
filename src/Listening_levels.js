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
import CancelIcon from '@material-ui/icons/Cancel';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ReactPlayer from 'react-player';
import Slider from '@material-ui/core/Slider';
import SpeedIcon from '@material-ui/icons/Speed';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(#1f4037, #99f2c8)",
    color: "white",
    flexGrow: 1,
    height: "min-content"
  },
  button: {
    backgroundColor: "#0f2d25",
    margin: theme.spacing(1),
    height: 60,
    borderRadius: 100
  },
  slider: {
    width: 160,
    float: 'left',
    paddingRight: '10'
  },
}));

const LEVELS = [
  "Beginner A1",
  "Pre-Intermediate A2",
  "Intermediate B1",
  "Upper-Intermediate B2",
  "Advanced C1"
];

function truncateWholeWords (text, maxLength) {
    const result = text.replace(/\r?\n|\r/g, '').replace(/\s/g, '').toLocaleLowerCase().replace(/[^\w\s]/gi, '');
    return result
}

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [test, setTest] = React.useState(null);
  const [check, setCheck] = React.useState(false);
  const [text, settext] = React.useState(null);
  const [response, setResponse] = React.useState('');
  const [playbackRate, setPlaybackRate] = React.useState(100);

  const handleSpeedChange  = (event, newValue) => {
    setPlaybackRate(newValue);
  };

  const handleTextChange = (event) => {
    setResponse(event.target.value);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const validatedText = (text, answer) => {
    let result = "";
    answer += " ";
    const textChunks = text.match(/\b(\w+\W+)/g);
    const answerChunks = answer.match(/\b(\w+\W+)/g)? answer.match(/\b(\w+\W+)/g): [];
    for (let i=0; i<textChunks.length; i++){
        if ((i >= answerChunks.length) || truncateWholeWords(textChunks[i]) !== truncateWholeWords(answerChunks[i])){
            result += "<b style='color: red;'>" + textChunks[i] + "</b>";
        }else{
            result += "<b style='color: black;'>" + textChunks[i] + "</b>";
        }
        result += " ";
    }

    return result
  }

  const getText = (isCheck) => {
    var request = new XMLHttpRequest();
    request.open('GET', `https://melqonyang.github.io/improve-your-english/listening/${LEVELS[selectedIndex].split(" ")[1]}/texts/${test.toLocaleLowerCase().replaceAll(" ", "_")}.txt`, true);
    request.send(null);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1){
                if (isCheck){
                    settext(validatedText(request.responseText, response));
                }else{
                    settext(request.responseText);
                }
            }
        }
    }
  }

  return (
    <div className={classes.root}>
      {
        test?
          <Grid container>
            <Grid item md={12} xs={12} style={{textAlign: "center"}}>
              <CancelIcon onClick={()=>{setTest(null)}} style={{fontSize: 50, cursor: 'pointer'}} />
            </Grid>
            <Grid item md={12} xs={12} style={{backgroundImage: "linear-gradient(rgb(218 247 239), rgb(224 243 234))", color: 'black', textAlign: "center"}} >
            <Typography variant="h4" gutterBottom>
              {test}
            </Typography>
            <div style={{paddingLeft: 100, paddingBottom: 30}}>
                <div className={classes.slider}>
                  <Typography id="continuous-slider" gutterBottom>
                    Playback Speed {playbackRate / 100}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <SpeedIcon />
                    </Grid>
                    <Grid item xs>
                      <Slider value={playbackRate} onChange={handleSpeedChange} aria-labelledby="continuous-slider" />
                    </Grid>
                  </Grid>
                </div>
                <ReactPlayer
                  url={`https://melqonyang.github.io/improve-your-english/listening/${LEVELS[selectedIndex].split(" ")[1]}/recordings/${test.toLocaleLowerCase().replaceAll(" ", "_")}.mp3`}
                  playbackRate={playbackRate/100}
                  controls={true}
                  height="50px"
                  style={{paddingLeft: 200}}
                />
            </div>
            <div>
              <TextField
                style={{width: '80%'}}
                id="outlined-multiline-static"
                label="Type here"
                multiline
                placeholder="Do not use any shortened version!!!"
                rows={10}
                value={response}
                onChange={handleTextChange}
                variant="outlined"
              /><br/>
              <Button variant="contained" color="primary" onClick={()=>getText(true)}>Check</Button>
              <Button variant="contained" color="primary" onClick={()=>getText(false)}>Show Transcription</Button>
            </div>
            {
                text &&
                <div>
                    <p dangerouslySetInnerHTML={{ __html: text }}  />
                    <Button variant="contained" color="primary" onClick={()=>settext(null)}>Hide</Button>
                </div>
            }
            </Grid>
          </Grid>:
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
              <Listening_content level={LEVELS[selectedIndex]} setTest={setTest}/>
            </Grid>
          </Grid>
      }
    </div>
  );
}
