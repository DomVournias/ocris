"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { sendContactMessage } from "@/actions/contact";

function SubmitButton({ isChecked }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={!isChecked}
      className="w-fit rounded-full shadow-xl py-3 px-20 bg-primary text-white hover:bg-primaryText hover:text-white disabled:bg-slate-400"
    >
      {pending ? "Υποβολή..." : "Υποβολή"}
    </button>
  );
}

export default function ContactForm() {
  const initialState = {
    errors: {},
    message: null,
    data: null,
  };

  const formRef = useRef();

  const [formState, formAction] = useFormState(
    sendContactMessage,
    initialState
  );
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const errorMessages = {};
  formState?.invalid_fields?.forEach((invalidField) => {
    errorMessages[invalidField.field] = invalidField.message;
  });

  const handleClearForm = () => {
    formRef.current.reset();
    setIsChecked(false);
  };

  useEffect(() => {
    if (formState?.status === "mail_sent") {
      handleClearForm();
    }
  }, [formState]);

  // console.log("CONTACT FORMSTATE", formState);

  return (
    <form className="max-w-3xl m-auto " action={formAction} ref={formRef}>
      <h4 className="font-semibold text-primary">ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h4>
      <fieldset className="flex flex-col gap-4 mt-4 mb-6">
        <div className="w-full">
          <input
            type="text"
            name="your-name"
            id="your-name"
            placeholder="Όνοματεπώνυμο"
            className="w-full py-2 px-4 rounded-full shadow-lg mb-3"
          />
          {errorMessages["your-name"] && (
            <p className="text-red-800 text-sm">{errorMessages["your-name"]}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            name="your-email"
            id="your-email"
            placeholder="Email"
            className="w-full py-2 px-4 rounded-full shadow-lg mb-3"
          />
          {errorMessages["your-email"] && (
            <p className="text-red-800 text-sm">
              {errorMessages["your-email"]}
            </p>
          )}
        </div>
        <div className="w-full">
          <textarea
            name="your-message"
            id="your-message"
            placeholder="Μήνυμα"
            rows="4"
            className="w-full py-2 px-4 rounded-lg shadow-lg mb-3"
          />
          {errorMessages["your-message"] && (
            <p className="text-red-800 text-sm">
              {errorMessages["your-message"]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="agree" className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Διάβασα και αποδέχομαι τον τρόπο χρήσης των προσωπικών δεδομένων
          </label>
        </div>
      </fieldset>

      {formState?.message && (
        <div>
          <p
            className={`pb-4 ${
              formState?.invalid_fields.length
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {formState?.message}
          </p>
        </div>
      )}

      <SubmitButton isChecked={isChecked} />
      <p className="pt-6">
        Eνημερωθείτε για την επεξεργασία των προσωπικών σας δεδομένων
      </p>
    </form>
  );
}
