function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-20">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Welcome to the <span className="block">Future of Web Design</span>
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Experience cutting-edge design and development inspired by science fiction.
        </p>
        <button className="bg-warhammerRed py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
