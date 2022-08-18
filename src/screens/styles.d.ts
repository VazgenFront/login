import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;
export const Th = styled.th`
  background-color: #1f2739;

  & > h1 {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: #185875;
    text-align: center;
  }
`;

export const Table = styled.table`
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  color: #fff;
`;

export const Tr = styled.tr`
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  text-align: center;

  &:nth-child(odd) {
    background-color: #323c50;
  }

  &:nth-child(even) {
    background-color: #2c3446;
  }

  &:hover {
    background-color: #464a52;
    -webkit-box-shadow: 0 6px 6px -6px #0e1119;
    -moz-box-shadow: 0 6px 6px -6px #0e1119;
    box-shadow: 0 6px 6px -6px #0e1119;
  }
`;

export const Td = styled.td`
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
  padding-bottom: 2%;
  padding-top: 2%;
  text-align: center;

  &:first-child {
    color: #fb667a;
  }

  &:nth-child(6) {
    background: red;
    cursor: pointer;
  }

  &:nth-child(7) {
    background: green;
    cursor: pointer;
  }
`;

export const AddContact = styled.button`
  width: 80%;
  height: 30px;
  background: green;
  border: 2px solid green;
  color: #fff;
`;

export const NewContact = styled.div`
  width: 80%;
`;

export const SaveButton = styled.button`
  width: 200px;
  height: 30px;
  background: green;
  color: #fff;
  border: 2px solid green;
  margin-top: 12px;
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
  }
`;

export const SaveButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorText = styled.p`
  font-size: 22px;
  color: red;
`;
