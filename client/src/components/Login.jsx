import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Label, TextInput, Button} from "flowbite-react";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email, password};
    axios
      .post("http://localhost:8000/api/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <>
      <div className="flex justify-evenly items-center h-screen mx-auto py-auto">
        <div>
          <img src={logo} alt="logo" height="300px" />
          <h1 className="font-bold text-4xl"> Cauldron Cuisine</h1>
        </div>
        <form onSubmit={handleSubmit} className="register-container">
          <h1 className="text-2xl font-bold text-center py-4">Log In</h1>
          <div className="text-1xl pb-2">
            <div className="mb-1 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@mail.com"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email ? <p>{errors.email.message}</p> : ""}
          </div>
          <div className="text-1xl pb-2 pt-2">
            <div className="mb-1 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password ? <p>{errors.password.message}</p> : ""}
          </div>
          {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
          <Button
            color="success"
            className="mx-auto w-3/4 font-semibold pt-4"
            type="submit"
          >
            Log In
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
