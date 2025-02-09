import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa/index';

const Footer = ({ isDark }: { isDark?: boolean }) => (
  <footer
    className={`text-sm shadow-inner-xs ${
      isDark ? 'bg-slate-900' : 'bg-slate-100'
    }`}
  >
    <div
      className={`container mx-auto px-4 pt-10 pb-12 border-x border-dashed ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      } flex flex-col-reverse flex-wrap md:flex-row md:gap-y-8 items-center justify-center`}
    >
      {/* Copyrights */}
      <div className="mt-8 md:mt-0 font-medium text-slate-500 text-center md:text-left whitespace-nowrap">
        <span>© Razorpay 2022. All Rights Reserved.</span>
      </div>

      {/* Website nav links */}
      <nav
        className={`mt-8 md:mt-0 md:ml-auto lg:mr-6 font-semibold flex flex-col md:flex-row items-center gap-6 ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        <a href="https://github.com/razorpay/public-presentations">Talks</a>
        <a href="https://engineering.razorpay.com/">Engineering Blog</a>
        <a href="https://razorpay.com/jobs/">Careers</a>
        <a href="https://razorpay.com/docs/">Documentation</a>
     </nav>

      {/* Social links */}
      <nav
        className={`flex justify-center md:justify-start space-x-6 ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        <a href="https://github.com/Razorpay">
          <FaGithub size="1rem" />
        </a>
        <a href="https://twitter.com/Razorpay">
          <FaTwitter size="1rem" />
        </a>
        <a href="https://linkedin.com/company/razorpay">
          <FaLinkedinIn size="1rem" />
        </a>
        <a href="https://www.instagram.com/razorpay/">
          <FaInstagram size="1rem" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
