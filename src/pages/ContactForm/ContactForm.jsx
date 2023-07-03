import Lottie from "lottie-react";
import animationData from "../../assets/contactForm.json";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Send the email using EmailJS
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData)
            .then((response) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email sent successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                // Clear form data
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setLoading(false);
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Sorry Email Not Sent!',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.error('Error sending email:', error);
                setLoading(false);
            });
    };
    return (
        <div id="contact" className="container mx-auto mb-4 md:mb-10">
            <SectionTitle >Contact Me</SectionTitle>
            <div className="md:flex justify-between items-center gap-5">
                <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="md:w-6/12">
                    <Lottie className="" animationData={animationData} loop={true} />
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="md:w-6/12 mx-5 md:mx-0">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block font-semibold mb-2">
                                Phone No:
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                rows={4}
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white py-2 px-10 rounded hover:bg-blue-600 flex items-center gap-3 text-xl ${loading ? "bg-gray-500 hover:bg-gray-500" : "bg-blue-500"}`}
                                disabled={loading}
                            >
                                Send Message{loading ? <span className="loading loading-spinner"></span> : <BsSend />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;