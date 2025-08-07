import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:your@email.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              asChild
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>

        <Separator className="mb-4 bg-gray-200 dark:bg-gray-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          © {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}