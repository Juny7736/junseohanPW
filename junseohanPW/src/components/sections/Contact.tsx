import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

interface SocialLink {
  name: string;
  url: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/Juny7736" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/junseohan16/" },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const mailtoLink = `mailto:handaniel721@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact Form Submission"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission delay and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Email client opened. Please send the email manually.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FiMail />,
      title: "Email",
      content: "handaniel721@gmail.com",
      link: "mailto:handaniel721@gmail.com",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      content: "Toronto, ON",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      content: "+1 (647) 332-7736",
      link: "tel:+16473327736",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-primary-50 dark:bg-primary-800/30"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent-500 bg-accent-50 dark:bg-accent-900/20 rounded-full mb-4">
            Contact Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">
              Let's Talk About Your Project
            </h3>
            <p className="text-primary-600 dark:text-primary-300 mb-8">
              I'm interested in co-op/internship opportunities. However, if you
              have other requests or questions, don't hesitate to contact me.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-white dark:bg-primary-700 rounded-lg shadow-sm text-primary-500 dark:text-primary-300 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-primary-600 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-200"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-primary-600 dark:text-primary-300">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white dark:bg-primary-700 rounded-lg shadow-sm text-primary-600 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-200"
                >
                  {name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-primary-700 rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">
              Send Me a Message
            </h3>

            {submitMessage && (
              <div className="mb-6 p-3 bg-success-500 bg-opacity-10 text-success-500 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-600 dark:text-primary-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 dark:border-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:bg-primary-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-600 dark:text-primary-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 dark:border-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:bg-primary-800 dark:text-white"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-primary-600 dark:text-primary-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary-200 dark:border-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:bg-primary-800 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-600 dark:text-primary-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary-200 dark:border-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:bg-primary-800 dark:text-white resize-none"
                  placeholder="Hello John, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Preparing Email...
                  </>
                ) : (
                  <>
                    Send Message <FiSend className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
