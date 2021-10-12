import { useEffect } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  getAllContactsFromLocaleStorage,
} from "../redux/contacts/contactsActions";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import Section from "./section/Section";

const contactsValue = JSON.parse(window.localStorage.getItem("contacts")) || [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = ({ contacts, addToCart, getAllContactsFromLocaleStorage }) => {
  useEffect(() => {
    if (contacts.length) {
      window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    getAllContactsFromLocaleStorage(contactsValue);
  }, []);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm contacts={contacts} addToCart={addToCart} />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, {
  addToCart,
  getAllContactsFromLocaleStorage,
})(App);
