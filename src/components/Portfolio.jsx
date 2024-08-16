function Portfolio() {
    return (
      <section className="portfolio p-10">
        <h2 className="text-3xl font-bold mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="portfolio-item bg-sciFiBlue text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p>Amazing web design project.</p>
          </div>
          <div className="portfolio-item bg-sciFiBlue text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p>Another fantastic project.</p>
          </div>
          <div className="portfolio-item bg-sciFiBlue text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p>Yet another stellar project.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  