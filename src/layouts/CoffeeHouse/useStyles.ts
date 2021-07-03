import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => {
  return ({
    '& .MuiInputBase-input': {
      color: '#fff'
    },
    submitButton: {
      marginTop: 15
    },
    mainInput: {
      color: theme.palette.text.primary
    },
    formTextInput: {
      marginTop: theme.spacing(5),
      '& label.Mui-focused': {
        color: theme.palette.text.primary
      },
      '& .MuiInput-underline:after': {
        borderColor: theme.palette.primary.main
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.primary.main
        },
        '&:hover fieldset': {
          borderColor: theme.palette.primary.main
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.main
        }
      }
    }
  });
});
