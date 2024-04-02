"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import Image from "next/image";
import Spinner from "../loading/Spinner";
import { searchPosts } from "@/actions/search";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";
import useStore from "@/lib/stores/store";

const SubmitButton = ({ setLoading }) => {
  const { pending } = useFormStatus();
  useEffect(() => {
    if (pending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [pending, setLoading]);
  return (
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {pending ? "Αναζήτηση..." : "Αναζήτηση"}
    </button>
  );
};

export default function SearchForm() {
  const initialState = {
    errors: {},
    message: null,
    data: null,
  };

  const router = useRouter();
  const closeSearchModal = useStore((state) => state.closeSearchModal);
  const [formState, formAction] = useFormState(searchPosts, initialState);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const showResultsDropdown = () => {
    setShowResults(true);
  };

  const hideResultsDropdown = () => {
    setShowResults(false);
  };

  const navigateToPost = (path) => {
    setLoading(false);
    setResults([]);
    setShowResults(false);
    closeSearchModal();
    router.push(path);
  };

  const resultsRef = useRef();
  useClickOutside(resultsRef, hideResultsDropdown);

  useEffect(() => {
    setLoading(true);
    const posts = formState?.data?.posts?.nodes;
    if (posts && posts.length > 0) {
      setResults(posts);
      setLoading(false);
      showResultsDropdown();
    }
    setLoading(false);
  }, [formState]);

  // console.log(loading, results);
  return (
    <section ref={resultsRef}>
      <form action={formAction} className="max-w-xl mx-auto mt-[-20vh]">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Αναζήτηση
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            name="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Αναζήτηση άρθρων..."
          />
          <SubmitButton setLoading={setLoading} />
        </div>
      </form>
      {loading && (
        <div className="flex items-center justify-center mt-4">
          <Spinner />
        </div>
      )}
      {results.length && !loading ? (
        <div
          className={`bg-white rounded-lg mt-4 ${
            showResults ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col text-text py-4 px-4 gap-2">
            {results.map((item, index) => (
              <li key={index} className="font-semibold">
                <button
                  onClick={() => navigateToPost(`/άρθρα/${item.slug}`)}
                  className="flex gap-4 items-center w-full"
                >
                  <div className="relative w-[20%] h-20 rounded-xl">
                    <Image
                      src={item.featuredImage.node.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="w-[80%] text-left">{item.title}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {showResults && !loading && (
            <p className="text-center mt-4">Δεν βρέθηκαν άρθρα</p>
          )}
        </div>
      )}
    </section>
  );
}
