import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { userRegister } from "../../store/slice/registerSlice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = useSelector((state) => state.register);

  const handleRegister = () => {
    console.log(mail);
    console.log(username);
    console.log(password);
    console.log('run');
    dispatch(userRegister({mail,username,password,navigate}));
  }
  console.log(register);
  useEffect(()=> {
    setIsFormValid(validateRegisterForm({mail,username,password}));
  },[mail,username,password,setIsFormValid])

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;
