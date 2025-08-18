"use client";
import { toastify } from "@/components/Toast";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MyForm from "@/components/ui/Form";
import { useState } from "react";
import { FiMail, FiPhone, FiMessageSquare, FiUser, FiSend } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { contact } from "@/data/contact";
import Pagestyle from "@/styles/contact.styled";

const Page = () => {
    const [loading, setloading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { phone, email, whatsapp, address, social } = contact;
    const { facebook, twitter, instagram, linkedin } = social;

    const handleSubmit = async e => {
        e.preventDefault();
        setloading(true);
        const {
            name: { value: name },
            email: { value: email },
            mobile: { value: mobile },
            body: { value: body },
        } = e.target;
        try {
            const res = await fetch(`/api/send-email`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: email,
                    subject: "contact",
                    type: "contact",
                    mobile,
                    name,
                    body,
                }),
            });
            if (!res.ok) {
                throw Error(res.statusText);
            }
            const result = await res.json();
            if (result.success) {
                toastify.success("Message sent successfully!");
                setSuccess(true);
                e.target.reset();
            }
            setloading(false);
        } catch (err) {
            toastify.error(err.message);
            setloading(false);
        }
    };

    return (
        <Pagestyle>
            <div className="hero-section">
                <Container>
                    <h1 className="heading">Get in Touch</h1>
                    <p>
                        We'd love to hear from you. Contact us for any inquiries or assistance with
                        your eBook purchases.
                    </p>
                </Container>
            </div>{" "}
            <Container className="main-content">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Fill out the form and our team will get back to you within 24 hours.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon">
                                    <FiPhone />
                                </div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>{phone}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon">
                                    <FiMail />
                                </div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>{email}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon">
                                    <MdLocationOn />
                                </div>
                                <div className="text">
                                    <h3>Location</h3>
                                    <p>{address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href={facebook} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href={linkedin} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href={twitter} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a href={instagram} className="social-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form">
                        {success ? (
                            <div className="success-message">
                                <div className="success-icon">
                                    <IoMdCheckmarkCircle size={60} />
                                </div>
                                <h2>Thank you!</h2>
                                <p>
                                    Your message has been sent successfully. We'll get back to you
                                    shortly.
                                </p>
                                <Button type="primary" onClick={() => setSuccess(false)}>
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <MyForm onSubmit={handleSubmit}>
                                <h2>Send us a message</h2>

                                <div className="form-row">
                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiUser className="input-icon" />
                                            <span>Full Name</span>
                                        </div>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </label>
                                </div>

                                <div className="form-row two-columns">
                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiPhone className="input-icon" />
                                            <span>Phone</span>
                                        </div>
                                        <input
                                            required
                                            title="Enter a valid mobile number"
                                            maxLength={12}
                                            name="mobile"
                                            type="tel"
                                            placeholder="+91 9876543210"
                                        />
                                    </label>

                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiMail className="input-icon" />
                                            <span>Email</span>
                                        </div>
                                        <input
                                            title="Enter a valid email address"
                                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                        />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label className="input-group">
                                        <div className="input-label">
                                            <FiMessageSquare className="input-icon" />
                                            <span>Your Message</span>
                                        </div>
                                        <textarea
                                            required
                                            name="body"
                                            placeholder="How can we help you?"
                                            rows="5"
                                        />
                                    </label>
                                </div>

                                <Button type="primary" loading={loading}>
                                    <FiSend /> Send Message
                                </Button>
                            </MyForm>
                        )}
                    </div>
                </div>
            </Container>
        </Pagestyle>
    );
};

export default Page;
