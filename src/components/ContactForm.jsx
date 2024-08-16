function ContactForm() {
    return (
      <section className="contact p-10 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 border-0 focus:ring-2 focus:ring-warhammerRed"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 border-0 focus:ring-2 focus:ring-warhammerRed"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-700 border-0 focus:ring-2 focus:ring-warhammerRed"
            rows="5"
          ></textarea>
          <button className="w-full bg-warhammerRed py-2 px-6 rounded-lg shadow-lg hover:bg-gray-900 hover:shadow-xl transition-transform duration-300">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
  export default ContactForm;
  