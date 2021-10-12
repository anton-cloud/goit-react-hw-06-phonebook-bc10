import React from "react";
import PropTypes from "prop-types";
import { ContactListStyled } from "./ContactListStyled";
import { connect } from "react-redux";
import { removeFromCartByID } from "../../redux/contacts/contactsActions";

const ContactList = ({ contacts, filter, removeFromCartByID }) => {
  const deleteContact = (e) => removeFromCartByID(e.target.id);

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ContactListStyled>
      {getVisibleContacts().map(({ name, number, id }) => (
        <li key={id}>
          <div className="wrapper">
            <p className="text">
              {name} {number}
            </p>
            <button type="button" id={id} onClick={deleteContact}>
              delete
            </button>
          </div>
        </li>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  onDeleteContactById: PropTypes.func,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps, { removeFromCartByID })(ContactList);
