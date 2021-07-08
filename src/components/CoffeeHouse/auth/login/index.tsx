import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import LayoutStyles from '../../../../layouts/CoffeeHouse/useStyles';
import { RootState } from '../../../../store';
import { UserLoginRequest } from '../../../../store/CoffeeHouse/auth/slice';

interface Form {
  email: string,
  password: string
}

const Login:FC = ():ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserLoginRequest({ username: 'hello world', password: 'world' }));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useSelector((state: RootState) => state.user);

  const classes = LayoutStyles();
  const { register, formState, handleSubmit, formState: { errors } } = useForm<Form>();

  const { isValid } = formState;

  console.log('isValid', isValid);

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log('data', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete={'off'}
      className="billing-form ftco-bg-dark p-3 p-md-5"
    >
      <div className="row align-items-end">
        <div className="col-md-12">
          <Grid container>
            <Grid item md={6} xs={12}>
              <h3 className="mb-4 sign-in-heading">Sign In to My Coffee</h3>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container justify={'flex-end'}>
                <Grid item>
                  <Button
                    component={Link}
                    to="/register">
                              Register
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              className={classes.formTextInput}
              fullWidth
              variant="outlined"
              InputProps={{ className: classes.mainInput }}
              {...register('email', {
                required: 'This input is required.',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Incorrect email'
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              className={classes.formTextInput}
              fullWidth
              variant="outlined"
              InputProps={{ className: classes.mainInput }}
              {...register('password', {
                required: 'This input is required.',
                minLength: {
                  value: 6,
                  message: 'This input must exceed 6 characters'
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
            />
          </Grid>
          <div className="w-100"/>
          <Grid item lg={12} className={classes.submitButton}>
            <div className="form-button-group">
              <div className="sign-in">
                <Button variant="outlined" color="primary" type="submit" className="p-2 px-xl-3 py-xl-3">
                  Sign In
                </Button>
              </div>
              <div className="social-list">
                <div className="social-box">
                  {/*  Social Login */}
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default Login;
