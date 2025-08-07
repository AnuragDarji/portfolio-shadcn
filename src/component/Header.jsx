import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header({ onLinkClick, refs }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (ref) => {
    onLinkClick(ref);
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  const navItem = (label, ref) => (
    <NavigationMenuItem key={label}>
      <NavigationMenuLink
        onClick={() => handleLinkClick(ref)}
        className={`${navigationMenuTriggerStyle()} cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800`}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary-500"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-bold text-white sm:inline-block">
            My Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mx-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {navItem("Home", refs.heroRef)}
              {navItem("Projects", refs.projRef)}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-white hover:bg-gray-800 data-[state=open]:bg-gray-800">
                  Work
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-900 border border-gray-800">
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <NavigationMenuLink asChild>
                      <div
                        onClick={() => handleLinkClick(refs.expRef)}
                        className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                      >
                        <div className="text-sm font-medium text-white">
                          Experience
                        </div>
                        <p className="text-sm text-gray-400 leading-snug">
                          My professional journey and roles I've held.
                        </p>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <div
                        onClick={() => handleLinkClick(refs.skillRef)}
                        className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                      >
                        <div className="text-sm font-medium text-white">
                          Skills
                        </div>
                        <p className="text-sm text-gray-400 leading-snug">
                          Technologies and tools I'm proficient with.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navItem("About", refs.aboutRef)}
              {/* {navItem("Contact", refs.contactRef)} */}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            className="bg-primary-600 hover:bg-primary-700 text-white cursor-pointer"
            onClick={() => handleLinkClick(refs.contactRef)}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-gray-800 bg-gray-950 pb-4 md:hidden">
          <div className="container flex flex-col space-y-3 px-4 pt-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => handleLinkClick(refs.heroRef)}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => handleLinkClick(refs.projRef)}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => handleLinkClick(refs.expRef)}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => handleLinkClick(refs.skillRef)}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => handleLinkClick(refs.aboutRef)}
            >
              About
            </Button>

            <div className="flex flex-col space-y-2 pt-4">
              <Button
                className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                onClick={() => handleLinkClick(refs.contactRef)}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
