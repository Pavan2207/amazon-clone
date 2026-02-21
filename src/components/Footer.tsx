'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    getToKnowUs: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Releases', href: '/press' },
    ],
    connectWithUs: [
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'GitHub - Pavan Kumar Kotni', href: 'https://github.com/pavankumarkotni' },
    ],
    makeMoneyWithUs: [
      { label: 'Sell on Pavan', href: '/sell' },
      { label: 'Advertise', href: '/advertise' },
      { label: 'Become Affiliate', href: '/affiliate' },
    ],
    letUsHelpYou: [
      { label: 'Your Account', href: '/account' },
      { label: 'Your Orders', href: '/orders' },
      { label: 'Returns', href: '/returns' },
      { label: 'Help', href: '/help' },
    ],
  };

  return (
    <footer className="bg-[#12121a] border-t border-white/[0.06] mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Get to Know Us</h3>
            <ul className="space-y-2.5">
              {footerLinks.getToKnowUs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Connect with Us</h3>
            <ul className="space-y-2.5">
              {footerLinks.connectWithUs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Make Money with Us</h3>
            <ul className="space-y-2.5">
              {footerLinks.makeMoneyWithUs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Let Us Help You</h3>
            <ul className="space-y-2.5">
              {footerLinks.letUsHelpYou.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact Details */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm">Contact Details</h3>
            <div className="space-y-3 text-sm">
              <div className="text-gray-400">
                <span className="block text-white font-medium mb-1">Phone:</span>
                <a href="tel:+916305586475" className="hover:text-blue-400 transition-colors">+91 6305586475</a>
              </div>
              <div className="text-gray-400">
                <span className="block text-white font-medium mb-1">Email:</span>
                <a href="mailto:Pavankumarkotni2@gmail.com" className="hover:text-blue-400 transition-colors">Pavankumarkotni2@gmail.com</a>
              </div>
              <div className="text-gray-400">
                <span className="block text-white font-medium mb-1">Address:</span>
                <span className="text-xs leading-relaxed">
                  8-21-23, Kotni Veedhi,<br />
                  Anakapalli, Visakhapatnam,<br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-white font-semibold text-sm">Pavan's Fashions</span>
            </div>
            <div className="text-gray-500 text-xs">
              © 2024 Pavan's Fashions, Inc. or its affiliates
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
