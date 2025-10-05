const Footer = () => {
  return (
    <footer className="space-y-4 py-6 bg-amber-200 p-8 ">
      <div className="flex flex-wrap justify-between gap-4 ">
        <div>
          <h4>About LitHub</h4>
          <p className="max-w-xs">
            LitHub is your daily source for discovering amazing books and
            building your reading journey.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <nav>
            <a href="/">Home</a>
            <a href="/reading-list">Reading-list</a>
          </nav>
        </div>
        <div>
          <h4>Legal</h4>
          <nav>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </nav>
        </div>
        <div>
          <h4>Connect with Us</h4>
          <nav>
            <a
              href="#"
              data-testid="social-icons">
              Facebook
            </a>
            <a
              href="#"
              data-testid="social-icons">
              Twitter
            </a>
            <a
              href="#"
              data-testid="social-icons">
              Instagram
            </a>
            <a
              href="#"
              data-testid="social-icons">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
      <div className="border-t border-black-200 mt-1 p-5 text-center">
        <p>© {new Date().getFullYear()} LitHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
