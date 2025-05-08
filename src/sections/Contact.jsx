import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

// import useAlert from '../hooks/useAlert.js';
// import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();
    const useAlert = () => {
        const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

        const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
        const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

        return { alert, showAlert, hideAlert };
    };

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_uwishot',
                'template_80ai71u',
                {
                    from_name: form.name,
                    to_name: 'Cynthia Liu',
                    from_email: form.email,
                    to_email: 'cynthialiu0805@gmail.com',
                    message: form.message,
                },
                '1g21Okiko7Hh9Mga6',
            )

            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: 'danger',
                    });
                },
            );
    };

    const Alert = ({ type, text }) => {
        return (
            <div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
                <div
                    className={`p-2 ${
                        type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
                    } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
                    role="alert">
                    <p
                        className={`flex rounded-full ${
                            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
                        } uppercase px-2 py-1 text-xs font-semibold mr-3`}>
                        {type === 'danger' ? 'Failed' : 'Success'}
                    </p>
                    <p className="mr-2 text-left">{text}</p>
                </div>
            </div>
        );
    };

    return (
        <section className="c-space my-20 mt-12" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder=""
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder=""
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;