import React, { useState, useEffect } from "react";
import InputContact from "./InputContact";
import Textarea from './TextArea'
import Button from "../../Button";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <InputContact label="Imię" dataAos="fade-right"/>
          <InputContact label="Nazwisko" dataAos="fade-left"/>
        </div>
        <div className="row">
          <InputContact label="Email" dataAos="fade-right"/>
          <InputContact label="Nr telefonu" dataAos="fade-left"/>
        </div>
        <div className="row">
          <Textarea label="Wiadomość" dataAos="fade-right"/>
          <Button name="Wyślij" dataAos="fade-left"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
