'use server'

import { fetchPostsSearchResults } from "@/lib/functions";

export async function searchPosts (prevState, formData) {
    try {
        const search = formData.get('search')
        const data = await fetchPostsSearchResults(search);
        return data
    } catch (error) {
        return { error: "Server error. Please try again later." };

    }
}

