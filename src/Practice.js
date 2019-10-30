import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function deletePunctuations(arr){
  const result = [];
  for (let i=0; i<arr.length; i+=1){
    const punctuationless = arr[i].replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    const finalString = punctuationless.replace(/\s{2,}/g," ");
    result.push(finalString.toLowerCase())
    }
  return result;
}

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
  }
});

class Practice extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      answer: "",
      rightAnswer: deletePunctuations(props.words[0][1].split(" | ")),
      answered: [],
      helperText: "",
      editIndex: false,
      hint: null
    }
  }

  keydownHandler = (e) => {
    if(e.ctrlKey){
      this.hint();
    }
  }
  componentDidMount(){
    document.addEventListener('keydown',this.keydownHandler);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.keydownHandler);
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if(this.props.direction !== nextProps.direction || this.props.order !== nextProps.order){     
      this.setState({
        index: 0,
        answer: "",
        rightAnswer: deletePunctuations(nextProps.words[0][1].split(" | ")),
        answered: [],
        helperText: "",
        editIndex: false
      })
    }   
}

  handleChange = event => {      
    if (event.key === 'Enter'){ return; }
    document.getElementById("answer").style.color = 'black'; 
    this.setState({answer: event.target.value});
  };

  hint = () => {
    const {rightAnswer, answered, hint} = this.state;
    if(hint){
      this.setState({hint: null});
      return;
    }
    document.getElementById("answer").style.color = 'black'; 
    let answer = "";
    for (let i=0; i<rightAnswer.length; i+=1){
      if(!answered.includes(rightAnswer[i])){
        answer = rightAnswer[i];
        break;
      }
    }
    this.setState({hint: answer})
  }

  changeIndex = () =>{
    const {words} = this.props;
    const new_index = parseInt(document.getElementById("newIndex").value, 10) - 1;
    if (new_index > words.length) return;
    this.setState({editIndex: false, index: new_index, answer: "", answered: [], rightAnswer: deletePunctuations(words[new_index][1].split(" | "))})
  }

  handleKeyPress = event => {   
    if (event.key === "Enter"){
      const {rightAnswer, answered, index} = this.state;
      let {answer} = this.state;
      const {words, addWord} = this.props;
      const  word = words[index][0];
      answer = deletePunctuations([answer])[0];
      if(rightAnswer.includes(answer) && !answered.includes(answer)){
        answered.push(answer);
        document.getElementById("answer").style.color = 'black'; 
        if(rightAnswer.length <= answered.length){
          const new_index = index < words.length - 1 ? index+1 : 0;
          this.setState({index: new_index, answer: "", answered: [], rightAnswer: deletePunctuations(words[new_index][1].split(" | "))});
          addWord(word, true)
        }else{
          this.setState({answered, answer: ""})
        }
        this.setState({hint: null});
      }else if(rightAnswer.includes(answer) && answered.includes(answer)){
        document.getElementById("answer").style.color = 'orange'; 
      }else{
        document.getElementById("answer").style.color = 'red'; 
        const wrongWords = rightAnswer.filter(n => !answered.includes(n));
        for(let i=0; i<wrongWords.length; i+=1){
          addWord(word, false);
        }
      }
      
    }
  }

  render(){
    const {classes, words, direction} = this.props;
    const {index, answer, rightAnswer, answered, helperText, editIndex, hint} = this.state;  
    
    return (
      <div>
        <Paper className={classes.root}>
          {
            words.length === 0 ?
              <Typography variant="h5" component="h3">
                No matching words.
              </Typography>: <div>
                  <Button variant="text" 
                    size="large" 
                    className={classes.button} 
                    endIcon={editIndex? <DeleteIcon onClick={() => {this.setState({editIndex: false})}} />: <EditIcon onClick={() => {this.setState({editIndex: true})}} />}>
                      {editIndex? <TextField
                        id="newIndex"
                        label="Max 15"
                        defaultValue={index+1}
                        className={classes.textField}
                        variant="outlined"
                        style={{width: "70px"}}
                      /> : `${index+1}.`}
                    {editIndex && <SaveIcon onClick={this.changeIndex} />}
                </Button>
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
                  <Grid item xs={12}>
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
                        {
                          hint ? 
                            <Button size='small' style={{textTransform: 'none'}} onClick={()=>{this.setState({hint:null})}}>{hint}</Button>:
                            <Button color="primary" size='small' onClick={this.hint}>Hint</Button>
                        }
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
          }
        </Paper>
      </div>
    );
  } 
}

export default withStyles(styles)(Practice);