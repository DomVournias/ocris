'use server';

export async function subscribeToMCNewsletter(prevState, formData) {
    const subscribeMCUrl = process.env.NEXT_WP_PUBLIC_ENDPOINT + "/wp-json/contact-form-7/v1/contact-forms/414/feedback";
    try {
        // Form fields
        const email = formData.get('email');

        // Make the fetch request with FormData and correct headers
        const res = await fetch(subscribeMCUrl, {
            method: "POST",
            body: email,
        });

        const data = await res.json()

        console.log('RESPONSE', data);
        return data;
    } catch (error) {
        return { error: "Server error. Please try again later." };
    }
}
