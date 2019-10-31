import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  root: {
      minwidth: "300px"
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const {sendMessage, setSendMessage} = props;
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
    
  }

  return (
    <Dialog onClose={handleClose} className={classes.root} aria-labelledby="simple-dialog-title" open={open}>
      {!sendMessage && <DialogTitle id="simple-dialog-title">Tips</DialogTitle>}
      <DialogContent>
          {sendMessage? 
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={values.email}
                        onChange={handleChange('email')}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={values.name}
                        onChange={handleChange('name')}
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="message"
                        required
                        name="message"
                        label="Message"
                        multiline
                        value={values.message}
                        onChange={handleChange('message')}
                        rows="10"
                        fullWidth
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Send
                        </Button>
                    </Grid>
                </Grid>
            </form>:
            <DialogContentText id="alert-dialog-description">
            <Typography variant="subtitle1">
                1. In the <b>Practice</b> section, you can hint and hide the correct answer by pressing the <b>HINT</b> button or pressing <b>ctrl</b>.
            </Typography>
            <Typography>
                2. In the <b>Practice</b> section, you can change the current word number by clicking on the <b>pencil</b> icon and entering a new number, then click <b>save</b> or <b>cancel</b> button.
            </Typography>
            <Typography>
                3. If you find any bugs or have suggestions, you can send me a message by clicking the <b>SEND MESSAGE</b> button
            </Typography>
          </DialogContentText>}
        </DialogContent>
        <DialogActions>
          {
              !sendMessage && <Button onClick={()=>{setSendMessage(true)}} color="primary">
                                Send message
                            </Button>
          }
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [sendMessage, setSendMessage] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setSendMessage(false);
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
        <InfoIcon color="primary" fontSize="large" style={{cursor: "pointer", position: "fixed", "right": 0, "top": 0}} onClick={handleClickOpen}/>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} sendMessage={sendMessage} setSendMessage={setSendMessage}/>
    </div>
  );
}
