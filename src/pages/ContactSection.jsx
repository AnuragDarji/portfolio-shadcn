import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
              <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400 hover:text-blue-400 transition-colors">contact@example.com</p>
                {/* <p className="text-gray-400 hover:text-blue-400 transition-colors">support@example.com</p> */}
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
              <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                <Phone className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400 hover:text-cyan-400 transition-colors">+1 (555) 123-4567</p>
                {/* <p className="text-gray-400">Mon-Fri, 9am-5pm</p> */}
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
              <div className="p-3 rounded-full bg-purple-500/20 border border-purple-500/30">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400 hover:text-purple-400 transition-colors">San Francisco, CA</p>
                {/* <p className="text-gray-400">United States</p> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                  <Send className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30"
                    placeholder="Hello, I'd like to talk about..."
                  />
                  {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}