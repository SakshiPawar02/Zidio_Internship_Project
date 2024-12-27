import React from 'react';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Zidio
              </span>
            </div>
            <p className="text-gray-600">
              Empowering developers through interactive learning and collaboration.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Courses" />
              <FooterLink href="#" text="Playground" />
              <FooterLink href="#" text="Community" />
              <FooterLink href="#" text="About Us" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Documentation" />
              <FooterLink href="#" text="Blog" />
              <FooterLink href="#" text="Careers" />
              <FooterLink href="#" text="Support" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
              <FooterLink href="#" text="Cookie Policy" />
              <FooterLink href="#" text="Contact Us" />
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zidio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 hover:text-indigo-600 transition-colors"
    >
      {text}
    </a>
  </li>
);

export default Footer;