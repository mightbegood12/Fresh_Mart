const Footer = ({ availableCategories }) => {
  return (
    <footer className="text-black p-8 border-t-[1px]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-6 text-center">Fresh Mart</h3>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="list-none space-y-2 text-gray-400">
              {availableCategories.map((category, idx) => (
                <li href="#{idx}" key={idx}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect with Us</h4>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Fresh Mart. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
