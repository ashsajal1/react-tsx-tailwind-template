import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t dark:border-t-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-white">Company</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building the future of digital solutions
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Updates</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t dark:border-t-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
