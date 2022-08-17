import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../features/contacts/contactsSlice";
import { AppDispatch } from "../store/store";
import { useSelector } from "react-redux";

interface stateInterface {
  contacts: {
    contacts: {
      contacts: [];
    };
  };
}

const Contacts = () => {
  const dispatch = useDispatch<AppDispatch>();

  const contacts = useSelector(
    (state: stateInterface) => state?.contacts?.contacts?.contacts
  );

  console.log({ contacts });

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div>
      {/* {contacts.map((item) => {
        console.log({ item });

        return <div>1</div>;
      })} */}
    </div>
  );
};

export default Contacts;
