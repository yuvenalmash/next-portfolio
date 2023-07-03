"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyqggwe");
  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 container mx-auto max-w-lg">
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
        className="form-field shadow shadow-cyan-400 p-2 bg-cyan-900 text-slate-200"
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        className="form-field shadow shadow-cyan-400 p-2 bg-cyan-900 text-slate-200"
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
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="font-bold shadow shadow-cyan-400 hover:shadow-md hover:bg-cyan-700 hover:shadow-cyan-400 transition-all duration-300 ease-in-out bg-cyan-900 text-slate-200 p-2">
        Submit
      </button>
    </form>
  );
}

export default ContactForm
