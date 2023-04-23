import React from "react";
import { ToastContainer } from "react-toastify";
import { PhoneBook } from "components/PhoneBook";
import { PBForm } from "components/PBForm";
import { ContactFilter } from "components/ContactFilter";
import { ContactList } from "components/ContactList";
import { Contacts, Title } from "components/Contacts";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <PhoneBook title="PhoneBook">
        <PBForm />
        <Contacts>
          <Title>Contacts</Title>
          <ContactFilter />
          <ContactList />
        </Contacts>
      </PhoneBook>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export { App };
