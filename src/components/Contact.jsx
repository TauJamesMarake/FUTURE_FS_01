import React, { useRef, useState } from 'react';
import { Mail, Phone, LocateFixed } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { saveContact } from '../services/api';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, AUTOREPLY_TEMP_ID } from '../config'; // Load EmailJS config from .env    

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('idle');

    const contactMethods = [
        {
            icon: Mail,
            title: 'EMAIL',
            info: 'jtaumarake@gmail.com',
            link: 'mailto:jtaumarake@gmail.com'
        },
        {
            icon: Phone,
            title: 'PHONE',
            info: '+27 (78)-676-6686',
            link: 'tel:+27786766686'
        },
        {
            icon: LocateFixed,
            title: 'LOCATION',
            info: 'Johannesburg, Gauteng'
        }
    ];

    const handleContact = (method) => {
        if (method.link) window.location.href = method.link;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            name: form.current.user_name.value,
            email: form.current.user_email.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
        };

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
            .then(() => {
                // Sends USER the auto-reply
                return emailjs.send(SERVICE_ID, AUTOREPLY_TEMP_ID, {
                    user_name: form.current.user_name.value,
                    user_email: form.current.user_email.value,
                }, { publicKey: PUBLIC_KEY });
            })
            .then(() => {
                // Saves message to Supabase
                saveContact(formData).catch(err => console.warn('Backend save failed:', err));

                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((error) => {
                console.log('EmailJS Error:', error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <div className="page">
            <div className="contact-content">
                {/* PAGE HEADER */}
                <h1>CONTACT</h1>
                <p className="contact-subtitle">Feel free to contact me!</p>

                {/* CONTACT METHODS GRID */}
                <div className="contact-methods">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <div
                                key={index}
                                className="contact-method"
                                onClick={() => handleContact(method)}
                                style={{ cursor: method.link ? 'pointer' : 'default' }}
                            >
                                <div className="contact-method-icon">
                                    <Icon size={30} />
                                </div>
                                <h3>{method.title}</h3>
                                <p>{method.info}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CONTACT FORM */}
                <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
                    <div className="contact-form-row">
                        {/* Name */}
                        <div className="contact-form-group">
                            <label htmlFor="user_name">Your Name</label>
                            <input
                                id="user_name"
                                type="text"
                                name="user_name"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="contact-form-group">
                            <label htmlFor="user_email">Your Email</label>
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="contact-form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Project Inquiry"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="contact-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Type your message here."
                            required
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="contact-submit-btn"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? (
                            'Sending...'
                        ) : (
                            <>
                                Send Message
                            </>
                        )}
                    </button>

                    {/* Feedback messages */}
                    {status === 'success' && (
                        <p className="form-feedback success">
                            Thank you, the message is sent! I'll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="form-feedback error">
                            Something went wrong. Please try again or email me directly.
                        </p>
                    )}
                </form>

                <div className="thanks-message">Thank You!</div>
            </div>
        </div>
    );
}

export default Contact;