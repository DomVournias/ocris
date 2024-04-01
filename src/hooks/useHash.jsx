"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import queryString from "query-string";

export const useHashState = () => {
  const getCurrentHash = useMemo(
    () => () =>
      typeof window !== "undefined"
        ? window.location.hash.replace(/^#!?/, "")
        : "",
    []
  );
  const router = useRouter();
  const params = useParams();
  const [hash, _setHash] = useState("");

  const setHash = (newHash) => {
    let updatedUrl = window.location.href;
    updatedUrl = queryString.stringifyUrl({
      url: updatedUrl.split("#")[0],
      fragmentIdentifier: newHash,
    });

    _setHash(decodeURIComponent(newHash));
    router.replace(updatedUrl);
  };

  useEffect(() => {
    const currentHash = getCurrentHash();
    _setHash(decodeURIComponent(currentHash));
  }, [params]);

  const handleHashChange = () => {
    const currentHash = getCurrentHash();
    _setHash(decodeURIComponent(currentHash));
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return [hash, setHash];
};
