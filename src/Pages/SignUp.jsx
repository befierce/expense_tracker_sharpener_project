import FormSubmitButton from "../Components/FormSubmitButton";
import classes from "./SignUp.module.css"
const SignUp = () => {
  return (
    <>
      <form className={classes.form}>
        <input className={classes.input} value=""></input>
        <input className={classes.input}></input>
        <input className={classes.input}></input>
        <FormSubmitButton description="Submit"/>
      </form>
    </>
  );
};

export default SignUp;
