const Footer = () => {
    return (
      <footer className="bg-forest text-cream py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-sm">
            © {new Date().getFullYear()} OPG Dombaj. Sva prava pridržana.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Web izradio</span>
            <a
              href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-leaf transition"
              aria-label="LinkedIn profil autora"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 10.268h-3v-4.604c0-1.098-.021-2.508-1.527-2.508-1.529 0-1.764 1.195-1.764 2.428v4.684h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.841-1.562 3.038 0 3.6 2.001 3.6 4.601v4.728z"/>
              </svg>
              <span className="underline">Pavao Dombaj</span>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  