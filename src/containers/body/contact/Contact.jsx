import React, { useState, useEffect } from "react";
import InputContact from "./InputContact";
import Textarea from "./TextArea";
import Button from "../../Button";
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [button, setButton] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
  
    const form = await axios.post('/api/form', {
      firstName, lastName, email, phone, text
    });
  
    setButton(true);
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <InputContact
            label="Imię"
            dataAos="fade-right"
            value={firstName}
            change={e => setFirstName(e.target.value)}
          />
          <InputContact
            label="Nazwisko"
            dataAos="fade-left"
            value={lastName}
            change={e => setLastName(e.target.value)}
          />
        </div>
        <div className="row">
          <InputContact
            label="Email"
            dataAos="fade-right"
            value={email}
            change={e => setEmail(e.target.value)}
          />
          <InputContact
            label="Nr telefonu"
            dataAos="fade-left"
            value={phone}
            change={e => setPhone(e.target.value)}
          />
        </div>
        <div className="row">
          <Textarea
            label="Wiadomość"
            dataAos="fade-right"
            value={text}
            change={e => setText(e.target.value)}
          />
          <Button
            name="Wyślij"
            dataAos="fade-left"
            click={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
