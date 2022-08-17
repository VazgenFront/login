import React, { useState } from "react";
import FormView from "./FormView";
import { useDispatch } from "react-redux";
import { makeLogin } from "../features/user/userSlice";
import { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

export const FormComponent = () => {
  const navigate = useNavigate();
  const [userInfo, setUserIfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserIfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(makeLogin());
    navigate("/auth/contacts");
  };

  return (
    <>
      <FormView data={userInfo} change={handleChange} submit={handleSubmit} />
    </>
  );
};
