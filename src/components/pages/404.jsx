import Link from "next/link";
import React from "react";

export default function Page404() {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold text-gray-800">404</h1>
          <p className="text-4xl font-medium text-gray-800">
            Η Σελίδα Δεν Υπάρχει
          </p>
          <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
            Πίσω στην Αρχική
          </Link>
        </div>
      </div>
    </section>
  );
}
