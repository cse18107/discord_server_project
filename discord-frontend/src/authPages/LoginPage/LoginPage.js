import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { validateLoginForm } from "../../shared/utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/slice/loginSlice";
import { openAlertMessage } from "../../store/slice/alertMessageSlice";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}));
  },[mail,password,setIsFormValid]);

  useEffect(()=> {
    if(login.error){
      dispatch(openAlertMessage(login.error));
    }
  },[dispatch,login])

  const handleLogin = () => {
    dispatch(userLogin({mail,password,navigate}));
  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  );
};

export default LoginPage;
