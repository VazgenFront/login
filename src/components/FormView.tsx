import React from "react";
import { FormWrapper, Heading, Form, Input, InputButton } from "./styles.d";
const input1 = "email";
const input2 = "password";

const FormView = ({ data, change, submit }: any) => (
  <FormWrapper>
    <Heading>Register</Heading>
    <Form>
      <Input
        type="text"
        name={input1}
        placeholder={input1}
        value={data.email}
        onChange={change}
        borderColor="none"
      />
      <Input
        type="password"
        name={input2}
        placeholder={input2}
        value={data.password}
        onChange={change}
        borderColor="none"
      />
      <InputButton type="submit" onClick={submit} />
    </Form>
  </FormWrapper>
);

export default FormView;
