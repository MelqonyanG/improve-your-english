import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import More from "@material-ui/icons/ArrowDropDown";
import Change from "@material-ui/icons/SyncAlt";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Content from './Content';

function getLevelName(label){
    const parts = label.split("_");
    return parts[0].toUpperCase() + (parts[1] ? ` ${parts[1]}`: "");
  }

const CRadio = withStyles({
  root: {
    color: "#8ED0B1",
    '&$checked': {
      color: "#8ED0B1",
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  menu: {
    backgroundImage: "linear-gradient(#1f4037, #99f2c8)",
    color: "white"
  },
  button: {
    margin: theme.spacing(1),
    backgroundImage: "linear-gradient(#1f4037, #99f2c8)",
    color: "white"
  }
}));

const modes = [
  "show all words",
  "show only wrong words",
  "show only correct words",
  "practice all words",
  "practice only wrong words",
  "practice only correct words"
];

export default function CenteredGrid(props) {
  const classes = useStyles();
  const {level} = props;
  const [direction, setDirection] = useState(true); // true -> arm or false -> eng
  const [mode, setMode] = useState("show"); // show or practioce
  const [count, setCount] = useState("all"); // all, wrongs or corrects
  const [order, setOrder] = useState("random"); // random, alphabetical or your
  const [anchorElShow, setAnchorElShow] = React.useState(null);
  const [anchorElPractice, setAnchorElPractice] = React.useState(null);

  const handleClick = (event, what) => {
    event.stopPropagation()
    if (what === "show") {
      setAnchorElShow(event.currentTarget);
    } else {
      setAnchorElPractice(event.currentTarget);
    }
  };

  const handleClose = what => {
    if (what === "show") {
      setAnchorElShow(null);
    } else {
      setAnchorElPractice(null);
    }
  };

  const changeCount = index => {
    if (index < 3){
      setMode("show");
      handleClose('show');
    }else{
      setMode("practice");
      handleClose('practice');
    }
    switch (index) {
      case 0:
      case 3:
        setCount('all');
        break;
      case 1:
      case 4:
        setCount('wrong');
        break;
      case 2:
      case 5:
        setCount('correct');
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" gutterBottom align="center">
            {getLevelName(level)}
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                setDirection(!direction);
              }}
            >
              {direction ? "Arm" : "Eng"} <Change /> {direction ? "Eng" : "Arm"}
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={mode === "show" ? 8 : 4}>
          <Button
            variant="contained"
            fullWidth
            className={classes.menu}
            onClick={() => setMode("show")}
            endIcon={<More onClick={e => {handleClick(e, "show")}} />}
            style={{
              height: mode === "show" ? "70px" : "50px",
              marginTop: mode === "show" ? "0px" : "10px"
            }}
          >
            {mode === 'show' ? `Show ${count} in ${order} order` : "Show"}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorElShow}
            keepMounted
            open={Boolean(anchorElShow)}
            onClose={() => handleClose("show")}
          >
            {modes.map((item, index) => {
              return item.split(" ")[0] === "show" ? (
                <MenuItem key={item} onClick={()=>changeCount(index)}>
                  {item}
                </MenuItem>
              ) : null;
            })}
          </Menu>
        </Grid>
        <Grid item xs={mode === "show" ? 4 : 8}>
          <Button
            variant="contained"
            onClick={() => setMode("practice")}
            fullWidth
            className={classes.menu}
            endIcon={
              <More
                onClick={e => {
                  handleClick(e, "practice");
                }}
              />
            }
            style={{
              height: mode === "show" ? "50px" : "70px",
              marginTop: mode === "show" ? "10px" : "0px"
            }}
          >
            {mode === 'practice'? `Practice ${count} in ${order} order` : "Practice"}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorElPractice}
            keepMounted
            open={Boolean(anchorElPractice)}
            onClose={() => handleClose("practice")}
          >
            {modes.map((item, index) => {
              return item.split(" ")[0] === "practice" ? (
                <MenuItem key={item} onClick={()=>changeCount(index)}>
                  {item}
                </MenuItem>
              ) : null;
            })}
          </Menu>
        </Grid>
        <Grid item xs={12} style={{textAlign:"center"}}>
        <FormControl>
          <RadioGroup aria-label="position" name="position" value={order} onChange={(event) => {setOrder(event.target.value)}} row>
            <FormControlLabel
              value="random"
              control={<CRadio />}
              label="Random order"
              labelPlacement="start"
            />
            <FormControlLabel
              value="alphabetical"
              control={<CRadio />}
              label="Alphabetical order"
              labelPlacement="start"
            />
            <FormControlLabel
              value="your"
              control={<CRadio />}
              label="Your order"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Content level={level} mode={mode} direction={direction} count={count} order={order} />
        </Grid>
      </Grid>
    </div>
  );
}
