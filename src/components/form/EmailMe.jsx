import * as React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Android from "@material-ui/icons/Android";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  l_grid: {
    margin: "1em 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2em 0"
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  form__input: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  warnings: {
    color: "#c51162",
    textTransform: "uppercase",
    fontSize: "10px",
  },
  formHide: {
    display: "none",
  },
  submit: {
    display: "block",
    margin: "2em auto",
  },
}));

const EmailMe = () => {

  const[text, setText] = React.useState("");
  const classes = useStyles();
  const { control, handleSubmit} = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });
  function onSubmit(data) {
    axios.post('https://formsubmit.co/gfouz1975@gmail.com', {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <Container>
      <div className={classes.l_grid}>
        <Avatar className={classes.avatar}>
          <Android />
        </Avatar>
        <Typography component="h1" variant="h6">
          Contact me
        </Typography>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              required: true,
            }}
            render={({ field, formState: { errors, isSubmitted } }) => (
              <div className={classes.form__input}>
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  label="Email"
                  color={errors.email ? "secondary" : "primary"}
                />
                {errors.email?.type === "pattern" && (
                  <span className={classes.warnings}>
                    email includes an @ symbol !
                  </span>
                )}
                {errors.email?.type === "required" && (
                  <span className={classes.warnings}>email is required !</span>
                )}
              </div>
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors, isSubmitted} }) => (
              <div className={classes.form__input}>
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  label="Message"
                  color={errors.message ? "secondary" : "primary"}
                />
                {errors.message?.type === "required" && (
                  <span className={classes.warnings}>
                    This field must not be empty !
                  </span>
                )}
              </div>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default EmailMe;



/*.post('http://formspree.io/gfouz1975@gmail.com', {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
