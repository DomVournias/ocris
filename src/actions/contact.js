'use server';

export async function sendContactMessage(prevState, formData) {
    const contactFormUrl = process.env.NEXT_WP_PUBLIC_ENDPOINT + "/wp-json/contact-form-7/v1/contact-forms/414/feedback";
    try {
        const _wpcf7 = '414';    
        const _wpcf7_version = '5.9.3';
        const _wpcf7_locale = 'en_US';
        const _wpcf7_unit_tag = 'wpcf7-f414-p37-o1';
        const _wpcf7_container_post = '37';
        const _wpcf7_posted_data_hash = '';
        const name = formData.get('your-name');
        const email = formData.get('your-email');
        const message = formData.get('your-message');

        // Create a new FormData object
        const formDataObject = new FormData();
        formDataObject.append('your-name', name);
        formDataObject.append('your-email', email);
        formDataObject.append('your-message', message);
        formDataObject.append('_wpcf7', _wpcf7);
        formDataObject.append('_wpcf7_version', _wpcf7_version);
        formDataObject.append('_wpcf7_locale', _wpcf7_locale);
        formDataObject.append('_wpcf7_unit_tag', _wpcf7_unit_tag);
        formDataObject.append('_wpcf7_container_post', _wpcf7_container_post);
        formDataObject.append('_wpcf7_posted_data_hash', _wpcf7_posted_data_hash);

        console.log('FORMDATA OBJECT', formDataObject);

        // Make the fetch request with FormData and correct headers
        const res = await fetch(contactFormUrl, {
            method: "POST",
            body: formDataObject,
        });

        const data = await res.json()

        console.log("CONTACT FORM RES", data);

        return data;
    } catch (error) {
        return { error: "Server error. Please try again later." };
    }
}
