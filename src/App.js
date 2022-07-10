import "./App.css";
import FormLabel from "./components/FormLabel";
import FormTextInput from "./components/FormTextinput";
import FormButton from "./components/FormButton";
import FormValidationMessage from "./components/FormValidationMessage";
import { useState } from "react";

function App() {
  const initialState = {
    Username: "",
    Email: "",
    Password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);
  const { Username, Email, Password } = formData;

  const onSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    setFormError(null);

    let error = validateForm();
    if (error.errorUsername || error.errorPassword || error.errorEmail) {
      setFormError(error);

      console.log("validation failed,form not submitted");
      return;
    }
    console.log("validation successful,form submitted");
  };

  const validateForm = () => {
    let errorUsername = false;
    let errorEmail = false;
    let errorPassword = false;

    if (Username === "") {
      errorUsername = {
        field_id: "Username",
        message: "Username is required!",
      };
      // return error;
    }

    if (Email === "") {
      errorEmail = {
        field_id: "Email",
        message: "Email is required!",
      };
      // return error;
    }

    if (Password === "") {
      errorPassword = {
        field_id: "Password",
        message: "Password is required!",
      };
      
    }

    return { errorUsername, errorEmail, errorPassword };
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    onSubmit(e);
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <FormLabel htmlFor="Username"> Username </FormLabel>
        <FormTextInput
          id="Username"
          name="Username"
          onChange={onChange}
          value={Username}
        />
        {formError && formError.errorUsername.field_id === "Username" ? (
          <FormValidationMessage>
            {formError.errorUsername.message}
          </FormValidationMessage>
        ) : null}

        <FormLabel htmlFor="Email">Email</FormLabel>
        <FormTextInput
          id="Email"
          name="Email"
          onChange={onChange}
          value={Email}
        />
        {formError && formError.errorEmail.field_id === "Email" ? (
          <FormValidationMessage>
            {formError.errorEmail.message}
          </FormValidationMessage>
        ) : null}

        <FormLabel htmlFor="Password">Password</FormLabel>
        <FormTextInput
          id="Password"
          name="Password"
          onChange={onChange}
          value={Password}
        />
        {formError && formError.errorPassword.field_id === "Password" ? (
          <FormValidationMessage>
            {formError.errorPassword.message}
          </FormValidationMessage>
        ) : null}

        <FormButton primary>Login</FormButton>
      </form>
    </div>
  );
}
export default App;
