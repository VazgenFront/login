import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: calibri;
`;

export const Heading = styled.h1`
  font-size: 65px;
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  border: 2px solid
    ${(props) => (props.borderColor === "alert" ? "red" : "#ddd")};
  border-radius: 3px;
  width: 300px;
`;
export const InputButton = styled.input`
  font-size: 20px;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  transition: 0.3s;
  cursor: pointer;
  color: dodgerblue;
  background-color: white;
`;

export const NewContactWrapper = styled.div`
  width: 80%;
`;

export const Columns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > input {
    width: 20%;
    height: 30px;
    background: #323c50;
    color: #fff;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #fff;
    }
  }
`;

export const SaveButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const SaveButton = styled.button`
  width: 200px;
  height: 30px;
  background: green;
  color: #fff;
  border: 2px solid green;
  margin-top: 12px;
`;
