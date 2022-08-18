import React, { useState } from "react";
import { Td, Tr } from "../screens/styles.d";
import { removeHandler, editHandler } from "../features/contacts/contactsSlice";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { ContactInterface } from "../interfaces";

export const Contact = ({ item }: { item: ContactInterface }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditavle, setIsEditable] = useState(false);
  const [currentContact, setCurrentContact] = useState(item);

  const { name, surname, age, city, phoneNumber, id } = currentContact;

  const handleDelete = async () => {
    dispatch(removeHandler(id));
  };

  const handleEdit = async () => {
    setIsEditable(!isEditavle);
    if (isEditavle) {
      dispatch(editHandler(currentContact));
    }
  };

  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentContact((prev) => {
      const { name, value } = e.target;
      console.log(name, value);

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Tr>
      {!isEditavle ? (
        <>
          <Td>{name}</Td>
          <Td>{surname}</Td>
          <Td>{age}</Td>
          <Td>{phoneNumber}</Td>
          <Td>{city}</Td>
          <Td onClick={handleDelete}>Delete</Td>
          <Td onClick={handleEdit}>Edit</Td>
        </>
      ) : (
        <>
          <Td>
            <input
              name="name"
              type="text"
              value={name}
              onChange={handleCHange}
            />
          </Td>
          <Td>
            <input
              name="surname"
              type="text"
              value={surname}
              onChange={handleCHange}
            />
          </Td>
          <Td>
            <input name="age" type="text" value={age} onChange={handleCHange} />
          </Td>
          <Td>
            <input
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={handleCHange}
            />
          </Td>
          <Td>
            <input
              name="city"
              type="text"
              value={city}
              onChange={handleCHange}
            />
          </Td>
          <Td onClick={handleDelete}>Delete</Td>
          <Td onClick={handleEdit}>Save</Td>
        </>
      )}
    </Tr>
  );
};
