import { motion } from "framer-motion";

const ContactSection = () => (
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
      <motion.form
        className="flex flex-col gap-4"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
            <input
              type="text"
              placeholder="Ime i prezime"
              className="p-3 rounded bg-cream border border-earth focus:outline-leaf"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-cream border border-earth focus:outline-leaf"
            />
            <textarea
              rows={4}
              placeholder="Poruka"
              className="p-3 rounded bg-cream border border-earth focus:outline-leaf"
            />
            <button
              type="submit"
              className="bg-forest text-cream py-3 rounded font-bold hover:bg-leaf transition"
            >
              Pošalji poruku
            </button>
            </motion.form>
            <div className="text-center text-sm text-earth mt-8">
            Ili nas kontaktiraj direktno na:{" "}
            <a
              href="mailto:pavaodombaj@gmail.com"
              className="underline hover:text-forest"
            >
              pavaodombaj@gmail.com
            </a>
          </div>
        </div>
      </section>
 
);
  
  export default ContactSection;
  