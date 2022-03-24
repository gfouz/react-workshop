import * as React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Email from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller } from "react-hook-form";
import Toast from "./Toast";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  l_grid: {
    margin: "1em 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2em 0",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
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
  title: {
    color: "#3f51b5",
    fontSize: "14px",
    textTransform: "uppercase",
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
    margin: "2em auto",
  },
}));

const EmailMe = () => {
  const [close, setClose] = React.useState(false);
  const classes = useStyles();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });
  function onSubmit(data) {
    setClose(true);
    axios
      .post("https://formspree.io/f/mbjwalqp", {
        data: data,
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
          <Email />
        </Avatar>
        <Typography component="h1" variant="h6" className={classes.title}>
          contact here!
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
            render={({ field, formState: { errors } }) => (
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
            type="sumit"
            size="medium"
            color="primary"
            variant="contained"
            className={classes.submit}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
        <Toast close={close} setClose={setClose} />
      </div>
    </Container>
  );
};
export default EmailMe;

/*.post('https://formspree.io/f/mbjwalqp', {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  #0099fb*/
