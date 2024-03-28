import {
  fetchArticlesPage,
  fetchCompanyPage,
  fetchContactPage,
  fetchNetworkPage,
  fetchProductsPage,
} from "@/lib/functions";

import Articles from "@/components/pages/Articles";
import Company from "@/components/pages/Company";
import Contact from "@/components/pages/Contact";
import Network from "@/components/pages/Network";
import Page404 from "@/components/pages/404";
import Products from "@/components/pages/Products";
import React from "react";

export default async function page({ params }) {
  const encodedSlug = decodeURIComponent(params.slug);

  if (encodedSlug === "εταιρία") {
    const { data } = await fetchCompanyPage();

    return (
      <>
        <Company page={data} />
      </>
    );
  } else if (encodedSlug === "προϊόντα") {
    const { data } = await fetchProductsPage();

    return (
      <>
        <Products page={data} />
      </>
    );
  } else if (encodedSlug === "δίκτυο") {
    const { data } = await fetchNetworkPage();

    return (
      <>
        <Network page={data} />
      </>
    );
  } else if (encodedSlug === "άρθρα") {
    const { data } = await fetchArticlesPage();

    return (
      <>
        <Articles page={data} />
      </>
    );
  } else if (encodedSlug === "επικοινωνία") {
    const { data } = await fetchContactPage();

    return (
      <>
        <Contact page={data} />
      </>
    );
  } else {
    return (
      <>
        <Page404 />
      </>
    );
  }
}
