import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets Web App URL
      // Replace YOUR_GOOGLE_SCRIPT_ID with your actual deployed script ID
      const googleScriptUrl = 'https://script.google.com/macros/s/AKfycby6tZI6T_s-k5nQoFP1NkBS3mUU-LhWQSPpWCChaaJ3tDOnIqEW84PZLMpuoppj_cg/exec';
      
      // Add timestamp to form data
      const dataToSubmit = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Send data to Google Sheets
      await fetch(googleScriptUrl, {
        method: 'POST',
        body: JSON.stringify(dataToSubmit),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors' // Required for Google Apps Script
      });
      
      // Since mode is no-cors, we can't actually read the response
      // So we just assume success after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card p-8"
    >
      <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
      
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <Send size={24} className="text-green-400" />
          </div>
          <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
          <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 btn"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field w-full" 
              placeholder="Your name" 
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field w-full" 
              placeholder="Your email" 
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field w-full" 
              placeholder="Your phone number" 
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field w-full min-h-[120px]" 
              placeholder="Tell us about your project"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
