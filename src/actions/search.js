'use server'

import { fetchPostsSearchResults } from "@/lib/functions";

export async function searchPosts (prevState, formData) {
    try {
        const search = formData.get('search')
        const data = await fetchPostsSearchResults(search);

        console.log(data);
        return data
    } catch (error) {
        return { error: "Server error. Please try again later." };

    }
}

