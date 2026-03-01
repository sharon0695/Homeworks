import React from "react";

interface Props {
    contact: { name: string; phone: string };
    index: number;
    deleteContact: (index: number) => void;
}

const ContactItem: React.FC<Props> = ({ contact, index, deleteContact }) => {
    return (
        <div className="contact-item">
            <strong>{contact.name}</strong> - {contact.phone}
            <button onClick={() => deleteContact(index)} style = {{ marginLeft: "10px" }}>Delete</button>
        </div>
    );
};

export default ContactItem;