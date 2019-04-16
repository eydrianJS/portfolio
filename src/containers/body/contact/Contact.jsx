import React, { useState, useEffect } from "react";
import InputContact from "./InputContact";
import Textarea from './TextArea'
import Button from "../../Button";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <InputContact label="Imię"/>
          <InputContact label="Nazwisko"/>
        </div>
        <div className="row">
          <InputContact label="Email"/>
          <InputContact label="Nr telefonu"/>
        </div>
        <div className="row">
          <Textarea label="Wiadomość"/>
          <Button name="Wyślij"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
