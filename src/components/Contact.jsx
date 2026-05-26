import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mojbkzwe");
  if (state.succeeded) {
      return <p className="text-center text-3xl md:text-5xl font-bold mb-5">Thanks for Message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-2 p-5" id="contact">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">Contact Us</h1>
      <input
        id="email"
        type="email" 
        name="email"
        required
        className="border bg-white rounded-2xl text-center text-2xl text-black"
        placeholder="Email Address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='text-center text-2xl bg-white text-black border'
        placeholder="Enter Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="text-3xl bg-orange-500 w-50 rounded-2xl text-black border">
        Submit
      </button>
    </form>
  );
}
