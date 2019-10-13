import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
  button: {
    marginLeft: "48%",
  },
});

class Practice extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      answer: "",
      rightAnswer: props.words[0][1].split(" | "),
      answered: [],
      helperText: ""
    }
  }

  handleChange = event => {      
    if (event.key === 'Enter'){ return; }
    document.getElementById("answer").style.color = 'black'; 
    this.setState({answer: event.target.value});
  };

  hint = () => {
    const {rightAnswer, answered} = this.state;
    let answer = "";
    for (let i=0; i<rightAnswer.length; i+=1){
      if(!answered.includes(rightAnswer[i])){
        answer = rightAnswer[i];
        break;
      }
    }
    this.setState({answer});
  }

  handleKeyPress = event => {   
    if (event.key === "Enter"){
      const {rightAnswer, answer, answered, index} = this.state;
      const {words, addWord, direction} = this.props;
      const  word = words[index][0];
      if(rightAnswer.includes(answer) && !answered.includes(answer)){
        answered.push(answer);
        let update = false;
        if(rightAnswer.length <= answered.length){
          const new_index = index < words.length - 1 ? index+1 : 0;
          this.setState({index: new_index, answer: "", answered: [], rightAnswer: words[new_index][1].split(" | ")});
          update = true;
        }else{
          this.setState({answered, answer: ""})
        }
        const practicedWord = `${direction? answer : word} * ${direction? word: answer}`;
        addWord(practicedWord, update);
      }else if(rightAnswer.includes(answer) && answered.includes(answer)){
        document.getElementById("answer").style.color = 'orange'; 
      }else{
        document.getElementById("answer").style.color = 'red'; 
        const wrongWords = rightAnswer.filter(n => !answered.includes(n));
        for(let i=0; i<wrongWords.length; i+=1){
          const practicedWord = `${direction? wrongWords[i] : word} * ${direction? word: wrongWords[i]}`;
          addWord(practicedWord, false);
        }
      }
      
    }
  }

  render(){
    const {classes, words, direction} = this.props;
    const {index, answer, rightAnswer, answered, helperText} = this.state;  
        
    return (
      <div>
        <Paper className={classes.root}>
          {
            words.length === 0 ?
              <Typography variant="h5" component="h3">
                No matching words.
              </Typography>: <div>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <Typography variant="h4" component="h3" align="right">
                      {words[index][0]}
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="h6" component="h3" align="left">
                      {`| ${answered.join(" | ")}`}
                    </Typography>
                  </Grid>
                </Grid>
                <CssTextField
                        id={"answer"}
                        label={`${direction? "English" : "Armenian"} ${answered.length+1} - ${rightAnswer.length}`}
                        className={classes.textField}
                        value={answer}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        margin="normal"
                        variant="outlined"
                        autoComplete="off"
                        autoFocus={true}
                        helperText={helperText}
                      /><br/>
                <Button color="primary" size="small" className={classes.button} onClick={this.hint}>
                  Hint
                </Button>
              </div>
          }
        </Paper>
      </div>
    );
  } 
}

export default withStyles(styles)(Practice);