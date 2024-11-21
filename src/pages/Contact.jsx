import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [emailjsReady, setEmailjsReady] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your actual public key
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    setEmailjsReady(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitting: false,
        info: { error: true, msg: 'Failed to send message. Please try again.' }
      });
    }
  };

  const socialLinks = [
    {
      value: 'monnyann10@gmail.com',
      href: 'mailto:monnyann10@gmail.com',
      icon: <MdEmail className='text-2xl' />,
    },
    {
      value: '+2348138328897',
      href: 'tel:+2348138328897',
      icon: <MdPhone className='text-2xl' />,
    },
    {
      value: 'Shittu Abimbola',
      href: 'https://www.linkedin.com/in/abimbola-s-a55128144/',
      icon: <FaLinkedin className='text-2xl' />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl shadow-lg p-8'
        >
          <div>
            <h2 className='text-4xl font-bold text-gray-900 mb-8'>
              Let&apos;s Connect!
            </h2>
            <p className='mt-4 text-center text-xl text-gray-600'>
              I&apos;d love to hear from you! Fill out the form below and I&apos;ll get back
              to you as soon as possible.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8'>
            <div className='lg:col-span-3'>
              <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='from_name'
                    className='text-caption font-open-sans text-gray-600 block mb-1'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    name='from_name'
                    id='from_name'
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-custom-primary focus:border-custom-primary'
                  />
                </div>

                <div>
                  <label
                    htmlFor='from_email'
                    className='text-caption font-open-sans text-gray-600 block mb-1'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='from_email'
                    id='from_email'
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-custom-primary focus:border-custom-primary'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='text-caption font-open-sans text-gray-600 block mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-custom-primary focus:border-custom-primary'
                  />
                </div>

                {status.info.msg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-md ${
                      status.info.error
                        ? 'bg-red-50 text-red-700'
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {status.info.msg}
                  </motion.div>
                )}

                <button
                  type='submit'
                  disabled={status.submitting || !emailjsReady}
                  className='w-full inline-flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-custom-primary hover:bg-custom-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
                >
                  {status.submitting ? (
                    <>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        />
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className='lg:col-span-2'>
              <div className='space-y-4'>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-12 h-12 bg-custom-primary/10 rounded-full flex items-center justify-center'>
                        <span className='text-2xl text-custom-primary'>{link.icon}</span>
                      </div>
                      <div className='ml-4'>
                        <h4 className='text-sm font-semibold text-gray-900'>
                          {link.name}
                        </h4>
                        <p className="text-sm font-medium text-custom-primary mt-1">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
