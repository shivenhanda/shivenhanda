import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mojbkzwe");
  if (state.succeeded) {
      return <p className="text-center text-3xl md:text-5xl font-bold mb-5 text-foreground">Thanks for Message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-2 p-5 text-foreground" id="contact">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">Contact Us</h1>
      <input
        id="email"
        type="email" 
        name="email"
        required
        className="border border-border bg-card rounded-2xl text-center text-2xl text-card-foreground placeholder-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
        className='text-center text-2xl bg-card text-card-foreground border border-border placeholder-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        placeholder="Enter Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="text-3xl bg-primary w-50 rounded-2xl text-card-foreground border border-primary hover:bg-primary/90 transition-colors disabled:opacity-60">
        Submit
      </button>
    </form>
  );
}
