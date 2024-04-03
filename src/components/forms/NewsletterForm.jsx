"use client";

import React, { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { MdOutlineEmail } from "react-icons/md";
import { subscribeToMCNewsletter } from "@/actions/subscribe";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={false}
      className="pr-2 absolute right-4 top-[10px] text-primary"
    >
      <MdOutlineEmail />
    </button>
  );
}

export default function NewsletterForm({ className }) {
  const initialState = {
    errors: {},
    message: null,
    data: null,
  };

  const formRef = useRef();

  const [formState, formAction] = useFormState(
    subscribeToMCNewsletter,
    initialState
  );

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
    <form ref={formRef} action={formAction} className="w-full">
      <p className={`pb-4 ${className}`}>ΕΓΓΡΑΦΗ NEWSLETTER</p>
      <fieldset className="flex items-center justify-between rounded-full shadow-lg relative">
        <input
          type="email"
          id="email"
          name="email"
          className="w-full py-2 px-4 rounded-full"
        />
        <SubmitButton />
      </fieldset>
    </form>
  );
}
