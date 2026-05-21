// *********************
// Role of the component: Footer component
// Name of the component: Footer.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Footer />
// Input parameters: no input parameters
// Output: Footer component
// *********************

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-ink)] text-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-10">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-4xl uppercase text-white">LUMES BD</p>
            <p className="font-bengali mt-2 text-lg font-semibold text-[var(--color-gold)]">
              লুমেস
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
              Premium Jerseys &amp; Modern Fashion for Men &amp; Women.
              Built on quality, comfort, and trend with delivery all over Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/74">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/search">Search</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Brand Promise
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/74">
              <li>Quality</li>
              <li>Comfort</li>
              <li>Trend</li>
              <li>Delivery All Over Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs uppercase tracking-[0.18em] text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>Light Up Your Style</p>
          <p>lumesbd.shop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
