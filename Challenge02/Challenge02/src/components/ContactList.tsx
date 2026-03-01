import React from "react";
import ContactItem from "./ContactItem";

interface Props {
  contacts: {name: string, phone: string}[];
  deleteContact: (index: number) => void;
}

const ContactList: React.FC<Props> = ({ contacts, deleteContact }) => {
    return (
        <div>
            {contacts.map((contact, index) => (
                <ContactItem
                    key={index}
                    contact={contact}
                    index={index}
                    deleteContact={deleteContact}
                />  
            ))}
        </div>
    );
}

export default ContactList;