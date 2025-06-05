import React from 'react';
import './contacts.css';

const dummyContacts = [
  {
    id: 1,
    name: 'Customer Support',
    email: 'support@example.com',
    phone: '+1 (555) 123-4567',
    department: 'Support'
  },
  {
    id: 2,
    name: 'Sales Team',
    email: 'sales@example.com',
    phone: '+1 (555) 987-6543',
    department: 'Sales'
  },
  {
    id: 3,
    name: 'Technical Support',
    email: 'tech@example.com',
    phone: '+1 (555) 456-7890',
    department: 'Technical'
  }
];

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <div className="contacts-grid">
        {dummyContacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h3>{contact.name}</h3>
            <p><strong>Department:</strong> {contact.department}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;