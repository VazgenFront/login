import React from "react";
import {
  NewContactWrapper,
  Columns,
  SaveButtonBox,
  SaveButton,
} from "./styles.d";

interface NewContactProps {
  handleSave: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewContact = ({ handleSave, handleChange }: NewContactProps) => {
  return (
    <NewContactWrapper>
      <Columns>
        <input
          name="name"
          onChange={handleChange}
          placeholder="name"
          type="text"
          required={true}
        />
        <input
          name="surname"
          onChange={handleChange}
          placeholder="surname"
          type="text"
          required={true}
        />
        <input
          name="age"
          onChange={handleChange}
          placeholder="age"
          type="text"
          required={true}
        />
        <input
          name="phoneNumber"
          onChange={handleChange}
          placeholder="phoneNumber"
          type="text"
          required={true}
        />
        <input
          name="city"
          onChange={handleChange}
          placeholder="city"
          type="text"
          required={true}
        />
      </Columns>
      <SaveButtonBox>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </SaveButtonBox>
    </NewContactWrapper>
  );
};

export default NewContact;
