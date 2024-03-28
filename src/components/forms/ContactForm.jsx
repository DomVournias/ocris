"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="space-y-6 max-w-3xl m-auto ">
      <h4 className="font-semibold text-primary">ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h4>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Όνομα"
          className="py-2 px-4 rounded-full shadow-lg"
        />
        <input
          type="text"
          name="surname"
          placeholder="Επώνυμο"
          className="py-2 px-4 rounded-full shadow-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="py-2 px-4 rounded-full shadow-lg"
        />
        <textarea
          name="message"
          placeholder="Μήνυμα"
          rows="4"
          className="py-2 px-4 rounded-lg shadow-lg"
        ></textarea>
        <label htmlFor="agree" className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Διάβασα και αποδέχομαι τον τρόπο χρήσης των προσωπικών δεδομένων
        </label>

        <button
          type="submit"
          className="w-fit rounded-full shadow-xl py-3 px-20 bg-primary text-white hover:bg-primaryText hover:text-white"
        >
          ΥΠΟΒΟΛΗ
        </button>

        <p>Eνημερωθείτε για την επεξεργασία των προσωπικών σας δεδομένων</p>
      </form>
    </div>
  );
}
