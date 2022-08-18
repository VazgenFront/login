import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  onAddContact,
  onSaveContact,
} from "../features/contacts/contactsSlice";
import { ContactInterface, stateInterface } from "../interfaces";
import { AppDispatch } from "../store/store";
import { Contact } from "../components/Contact";
import {
  Table,
  Th,
  Tr,
  AddContact,
  Container,
  NewContact,
  SaveButton,
  SaveButtonBox,
  ErrorText,
  Columns
} from "./styles.d";

const Contacts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newContact, setNewContact] = useState<Partial<ContactInterface>>({});
  const [hasError, setHasError] = useState(false);
  const contacts = useSelector(
    (state: stateInterface) => state.contacts.contacts
  );

  const isAdding = useSelector(
    (state: stateInterface) => state.contacts.isAddingContact
  );

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const handleAddContact = () => {
    dispatch(onAddContact());

    if (isAdding) {
      setNewContact(() => {
        return {};
      });
    }
  };

  const isCorrect =
    newContact.name &&
    newContact.age &&
    newContact.surname &&
    newContact.phoneNumber &&
    newContact.city;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact((prev) => {
      const { name, value } = e.target;

      return {
        ...prev,
        [name]: value,
      };
    });

    if (isCorrect) {
      setHasError(false);
    }
  };

  const handleSaveContact = () => {
    if (isCorrect) {
      dispatch(onSaveContact({ ...newContact, id: uuidv4() }));
      setNewContact(() => {
        return {};
      });
    } else {
      setHasError(true);
    }
  };

  return (
    <Container>
      <Table className="container">
        <thead>
          <Tr>
            <Th>
              <h1>Name</h1>
            </Th>
            <Th>
              <h1>Surname</h1>
            </Th>
            <Th>
              <h1>age</h1>
            </Th>
            <Th>
              <h1>Phone Number</h1>
            </Th>

            <Th>
              <h1>City</h1>
            </Th>

            <Th>
              <h1>Delete</h1>
            </Th>

            <Th>
              <h1>Edit</h1>
            </Th>
          </Tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((item: ContactInterface) => {
              return <Contact key={item.id} item={item} />;
            })}
        </tbody>
      </Table>
      {isAdding && (
        <NewContact>
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
            <SaveButton onClick={handleSaveContact}>Save</SaveButton>
          </SaveButtonBox>
        </NewContact>
      )}
      {hasError && <ErrorText>All inputs must be filled</ErrorText>}
      <AddContact onClick={handleAddContact}>
        {isAdding ? "NO" : "Add Contact"}
      </AddContact>
    </Container>
  );
};

export default Contacts;
