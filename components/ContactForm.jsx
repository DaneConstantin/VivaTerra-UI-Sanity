import { useState } from 'react';
import { fetcher } from '../lib/api';
import useSWR from "swr";

const ContactForm = ({ properties }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedProperty, setSelectedProperty] = useState('');

    const [message, setMessage] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            selectedProperty,
            message,
            agreeTerms,
        };

        try {

            console.log('Form Data:', formData);

        } catch (error) {

            console.error('Error during form submission:', error);
        }
    };


    const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?populate=*`, fetcher, {
        fallbackData: properties
    })

    return (
        <div className="mx-auto">
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block py-2 font-semibold lg:text-lg">First Name</label>
                        <input type="text" id="firstName" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="p-2 border" required />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block py-2 font-semibold lg:text-lg">Last Name</label>
                        <input type="text" id="lastName" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="p-2 border" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block py-2 font-semibold lg:text-lg">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border" required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block py-2 font-semibold lg:text-lg">Phone</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-2 border" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="selectedProperty" className="block py-2 font-semibold lg:text-lg">Selected Property</label>
                    <select id="selectedProperty" value={selectedProperty} onChange={(e) => setSelectedProperty(e.target.value)} className="w-full" required>
                        <option value="" disabled>Select a Property</option>
                        {data?.data.map(property => (
                            <option key={property.id} value={property.attributes.name}>{property.attributes.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block py-2 font-semibold lg:text-lg">Message</label>
                    <textarea id="message" placeholder="Enter your Message here..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-full" required />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <input type="checkbox" id="agreeTerms" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} className="mr-2" required />
                        <label htmlFor="agreeTerms">I agree with Terms of Use and Privacy Policy</label>
                    </div>

                    <button type="submit" className="button text-regular font-normal text-center bg-[#703BF7] rounded-lg w-auto">{agreeTerms ? "Send Your Message" : "Agree to Terms to Submit"}</button>

                </div>
            </form>
        </div>
    )
}
export default ContactForm;

export async function getStaticProps() {
    const getProperties = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?populate=*`
    );
    return {
        props: {
            properties: getProperties,
        },
    };

}