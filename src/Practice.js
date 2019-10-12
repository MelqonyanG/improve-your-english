import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#8ED0B1',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8ED0B1',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8ED0B1',
      },
      '&:hover fieldset': {
        borderColor: '#8ED0B1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8ED0B1',
      },
    },
  },
})(TextField);

const styles = ({
  root: {
    textAlign: 'center'
  },
  textField: {
    width: "50%"
  },
});

class Practice extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      answer: "",
      helperText: ""
    }
  }

  handleKeyPress = event => {
    if (event.key === "Enter"){
      const { index, answer } = this.state;
      const {words, addWord, direction} = this.props;
      const word = words[index][1];
      const practicedWord = direction? `${words[index][1]} * ${words[index][0]}`: `${words[index][0]} * ${words[index][1]}`; 
      if (word === answer){
          if(index >= words.length - 1){this.setState({helperText: "Already practiced."})};
          this.setState({
            index: index < words.length - 1 ? index+1 : 0,
            answer: ""
          });
          addWord(practicedWord, true);
      }else{
          document.getElementById("outlined-name").style.color = 'red';
          addWord(practicedWord, false);
      }      
    }   
  }

  handleChange = event => {
    if (event.key === 'Enter'){ return; }
    document.getElementById("outlined-name").style.color = 'black';     
    this.setState({answer: event.target.value});
  };

  render(){
    const {classes, words, direction} = this.props;
    const {index, answer, helperText} = this.state;
    
    return (
      <div>
        <Paper className={classes.root}>
          {
            words.length === 0 ?
              <Typography variant="h5" component="h3">
                No matching words.
              </Typography>: <div>
                <Typography variant="h5" component="h3">
                  {words[index][0]}
                </Typography>
                <CssTextField
                  id="outlined-name"
                  label={direction? "English" : "Armenian"}
                  className={classes.textField}
                  value={answer}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  margin="normal"
                  variant="outlined"
                  autoComplete="off"
                  autoFocus={true}
                  helperText={helperText}
                />
              </div>
          }
        </Paper>
      </div>
    );
  } 
}

export default withStyles(styles)(Practice);