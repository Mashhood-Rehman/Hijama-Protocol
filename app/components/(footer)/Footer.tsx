"use client";

import Link from "next/link";
import {footerLinks} from "../../helper/data"

export default function Footer() {
  return (
    <footer className="bg-(--dark-green) text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-10">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold tracking-wide mb-3">
            Hijama Protocol
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Purification engineered with traditions elevated — 
            modern biotechnology meets prophetic healing.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#C7A86C]">Products</h4>
          <ul className="space-y-2">
            {footerLinks.products.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-[#C7A86C] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#C7A86C]">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-[#C7A86C] transition inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#C7A86C]">Support</h4>
          <ul className="space-y-2">
            {footerLinks.support.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-[#C7A86C] transition inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#163f33] mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Hijama Protocol. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[#C7A86C] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C7A86C] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
