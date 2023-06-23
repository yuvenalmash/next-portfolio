"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyqggwe");
  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 container mx-auto w-fit">
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
        className="rounded shadow-lg p-2 text-gray-700"
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        className="rounded shadow-lg p-2 text-gray-700"
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
        className="rounded shadow-lg p-2 text-gray-700"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="rounded shadow-lg bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4">
        Submit
      </button>
    </form>
  );
}

export default ContactForm
