import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import axios from "axios";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const data = {
          name: formData.name, // keep matching backend
          email: formData.email,
          message: formData.message,
        };

        const response = await axios.post(
          "https://contact-form-gilt-three.vercel.app/api/contact",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("API Response:", response.data);

        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors((prev) => ({
          ...prev,
          form: "Failed to send message. Please try again later.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Email",
      value: "anuragdarji29@gmail.com",
      href: "mailto:anuragdarji29@gmail.com",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
      title: "Location",
      value: "Ahmedabad, Gujarat",
      bgColor: "bg-teal-100 dark:bg-teal-900/30",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/AnuragDarji",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/anurag-darji-a02052247/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/apdarji29",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-2 rounded-md ${method.bgColor}`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {method.title}
                      </h3>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Connect with me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="rounded-full w-10 h-10 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                          <span className="sr-only">{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50">
              {isSubmitted ? (
                <div className="text-center p-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                    <Send className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for reaching out. I'll get back to you soon.
                  </CardDescription>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">
                      Send me a message
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Fill out the form below and I'll respond as soon as
                      possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {errors.form && (
                      <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
                        {errors.form}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`bg-gray-50 dark:bg-gray-800 ${
                            errors.name
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-700"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 dark:text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`bg-gray-50 dark:bg-gray-800 ${
                            errors.email
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-700"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 dark:text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Hello, I'd like to talk about..."
                          className={`bg-gray-50 dark:bg-gray-800 ${
                            errors.message
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-700"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 dark:text-red-400">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
