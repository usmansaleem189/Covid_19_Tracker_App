import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function CountryNav({ countriesNameList, handleChange }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  // console.log(countriesNameList);
  return (
    <div className={classes.container}>
      <FormControl variant="filled" className={classes.formControl}>
        {/* <InputLabel>Select Country</InputLabel> */}
        <Select
          native
          defaultvalue=""
        onChange = {(event)=> handleChange(event.target.value)}>
          
          <option aria-label="None" value="">Global</option> 

          {countriesNameList.map ((country,ind)=> {
          return ( 
          <option value={country} key={ind}>{country}</option>
          )}
          )}

        </Select>
      </FormControl>




    </div>
  );
}
