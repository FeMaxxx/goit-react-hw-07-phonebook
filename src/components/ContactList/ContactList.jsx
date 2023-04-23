import React from "react";
import { useGetContactsQuery } from "redux/contactsSlice";
import { ContactListBox, LoaderBox } from "./ContactList.styled";
import { getFilter } from "redux/selectors";
import { useSelector } from "react-redux";
import { ContactItem } from "components/ContactItem";
import { Oval } from "react-loader-spinner";

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter);
  });
};

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data, error } = useGetContactsQuery();
  const contacts = [];
  data?.map((contact) => {
    return contacts.push(contact);
  });

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      {data && (
        <ContactListBox>
          {visibleContacts.reverse().map(({ id, name, phone }) => {
            return <ContactItem key={id} id={id} name={name} phone={phone} />;
          })}
        </ContactListBox>
      )}

      {!data && !error && (
        <LoaderBox>
          <Oval
            height="40"
            width="40"
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="rgba(242, 255, 0, 0.8)"
            secondaryColor="rgba(242, 255, 0, 0.3)"
          />
        </LoaderBox>
      )}
    </>
  );
};
