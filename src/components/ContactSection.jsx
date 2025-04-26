import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Ime je obavezno";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email adresa nije valjana";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Poruka je obavezna";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Construct mailto link with form data
      const mailtoLink = `mailto:pavaodombaj@gmail.com?subject=Nova poruka od ${formData.name}&body=Ime: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0APoruka:%0D%0A${formData.message}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-wheat py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-3xl font-playfair text-forest mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Kontakt
        </motion.h2>
        
        {submitStatus === "success" && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Poruka je uspješno pripremljena za slanje!
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            Molimo ispravite označena polja.
          </div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ime i prezime"
              className={`w-full p-3 rounded bg-cream border ${
                errors.name ? 'border-red-500' : 'border-earth'
              } focus:outline-leaf`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-3 rounded bg-cream border ${
                errors.email ? 'border-red-500' : 'border-earth'
              } focus:outline-leaf`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Poruka"
              className={`w-full p-3 rounded bg-cream border ${
                errors.message ? 'border-red-500' : 'border-earth'
              } focus:outline-leaf`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-forest text-cream py-3 rounded font-bold transition ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-leaf hover:transform hover:scale-[1.02]'
            }`}
          >
            {isSubmitting ? "Slanje..." : "Pošalji poruku"}
          </button>
        </motion.form>

        <div className="text-center text-sm text-earth mt-8">
          Ili nas kontaktiraj direktno na:{" "}
          <a
            href="mailto:pavaodombaj@gmail.com"
            className="underline hover:text-forest transition-colors"
          >
            pavaodombaj@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;