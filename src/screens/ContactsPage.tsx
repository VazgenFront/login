import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Contact } from "../components/Contact";
import NewContact from "../components/NewContact";
import {
  getContacts,
  onAddContact,
  onSaveContact,
  setContacts,
} from "../features/contacts/contactsSlice";
import { ContactInterface, stateInterface } from "../interfaces";
import { AppDispatch } from "../store/store";
import { AddContact, Container, ErrorText, Table, Th, Tr } from "./styles.d";

const Contacts = () => {
  const contacts = useSelector(
    (state: stateInterface) => state.contacts.contacts
  );

  const isAdding = useSelector(
    (state: stateInterface) => state.contacts.isAddingContact
  );

  const dispatch = useDispatch<AppDispatch>();
  const [newContact, setNewContact] = useState<Partial<ContactInterface>>({});
  const [hasError, setHasError] = useState(false);

  const handleAddContact = () => {
    dispatch(onAddContact());

    if (isAdding) {
      setNewContact(() => {
        return {};
      });

      setHasError(false);
    }
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const isCorrect =
    newContact.name &&
    newContact.age &&
    newContact.surname &&
    newContact.phoneNumber &&
    newContact.city;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letter = e.target.value.toLocaleLowerCase();
    const example = contacts.filter(
      (item: ContactInterface) =>
        item.name.toLocaleLowerCase().includes(letter) ||
        item.surname.toLocaleLowerCase().includes(letter)
    );

    if (letter) {
      dispatch(setContacts(example));
    } else {
      dispatch(setContacts([]));
    }
  };

  return (
    <Container>
      <input type="text" placeholder="search contact" onChange={handleSearch} />
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
              <h1>Age</h1>
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
        <NewContact
          handleSave={handleSaveContact}
          handleChange={handleChange}
        />
      )}
      {hasError && isAdding && <ErrorText>All inputs must be filled</ErrorText>}
      <AddContact onClick={handleAddContact}>
        {isAdding ? "Cancel" : "Add Contact"}
      </AddContact>
    </Container>
  );
};

export default Contacts;
