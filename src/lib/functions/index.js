import { ARTICLES_SECTIONS_QUERY } from "../queries/articles";
import { COMPANY_SECTIONS_QUERY } from "../queries/company";
import { CONTACT_SECTIONS_QUERY } from "../queries/contact";
import { HOME_SECTIONS_QUERY } from "../queries/home";
import { LAYOUT_QUERY } from "../queries/layout";
import { NETWORKS_SECTIONS_QUERY } from "../queries/network";
import { PRODUCTS_SECTIONS_QUERY } from "../queries/products";
import { TESTIMONIALS_QUERY } from "../queries/testimonials";
import { getPostsSearchResults } from "../queries/search";
import { getSinglePostBySlug } from "../queries/post";

export async function fetchDataNoCache(query) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
}

export async function fetchLayout() {
  const data = await fetchDataNoCache(LAYOUT_QUERY);
  return data;
}

export async function fetchHomePage() {
  const data = await fetchDataNoCache(HOME_SECTIONS_QUERY);
  return data;
}

export async function fetchCompanyPage() {
  const data = await fetchDataNoCache(COMPANY_SECTIONS_QUERY);
  return data;
}

export async function fetchProductsPage() {
  const data = await fetchDataNoCache(PRODUCTS_SECTIONS_QUERY);
  return data;
}

export async function fetchNetworkPage() {
  const data = await fetchDataNoCache(NETWORKS_SECTIONS_QUERY);
  return data;
}

export async function fetchArticlesPage() {
  const data = await fetchDataNoCache(ARTICLES_SECTIONS_QUERY);
  return data;
}

export async function fetchContactPage() {
  const data = await fetchDataNoCache(CONTACT_SECTIONS_QUERY);
  return data;
}

export async function fetchSinglePost(slug) {
  const data = await fetchDataNoCache(getSinglePostBySlug(slug));
  return data;
}

export async function fetchPostsSearchResults(query) {
  const data = await fetchDataNoCache(getPostsSearchResults(query));
  return data;
}

export async function fetchTestimonials() {
  const { data } = await fetchDataNoCache(TESTIMONIALS_QUERY);
  return data;
}
