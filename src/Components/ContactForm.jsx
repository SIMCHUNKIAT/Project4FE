import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:3000/api/contactform/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.status); // Success message
      } else {
        alert("Error 1: An error occurred"); // Error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error 2: An error occurred"); // Error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pl-10 pt-8 pb-10 max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
      <input className="w-full text-black text-2xl sm:text-3xl p-3 border border-solid border-slate-900"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input className="w-full text-black text-2xl sm:text-3xl p-3 border border-solid border-slate-900"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea className="pb-24 w-full text-black text-2xl sm:text-3xl p-3 border border-solid border-slate-900"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button className="bg-sky-800 p-4 rounded-md text-white" type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
