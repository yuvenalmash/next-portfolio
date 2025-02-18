"use client"
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mayrpjyz");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const isValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
    setIsFormValid(isValid);
  }, [name, email, message]);

  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handleSubmit(e);
    } else {
      setErrorMessage('Please fill out all fields.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 container mx-auto">
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
        autoComplete='name'
        className="form-field shadow shadow-cyan-400 p-2 bg-cyan-900 text-slate-200"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        autoComplete='email'
        className="form-field shadow shadow-cyan-400 p-2 bg-cyan-900 text-slate-200"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Your message"
        className="form-field shadow shadow-cyan-400 p-2 bg-cyan-900 text-slate-200"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button type="submit" disabled={state.submitting} className="font-bold shadow shadow-cyan-400 hover:shadow-md hover:bg-cyan-700 hover:shadow-cyan-400 transition-all duration-300 ease-in-out bg-cyan-900 text-slate-200 p-2">
        Submit
      </button>
    </form>
  );
}

export default ContactForm
