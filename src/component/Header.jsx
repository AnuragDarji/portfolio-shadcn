import { useState } from "react";
import { useLocation, Link } from "react-router-dom"; // ✅ Import useLocation
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
import { Menu, X, Sun, Moon } from "lucide-react";
import icon from "../assets/fav.png";

export function Header({ onLinkClick, refs }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation(); // ✅ Get current route
  const isHomePage = location.pathname === "/"; // ✅ Check if current page is home

  const handleLinkClick = (ref) => {
    onLinkClick(ref);
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const navItem = (label, ref) => (
    <NavigationMenuItem key={label}>
      <NavigationMenuLink
        onClick={() => handleLinkClick(ref)}
        className={`${navigationMenuTriggerStyle()} cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800`}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={icon}
            alt="Logo"
            className="h-8 w-8 object-contain border-1 rounded-full"
          />
          <span className="font-bold text-gray-900 dark:text-white sm:inline-block">
            My Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        {isHomePage && (
          <nav className="hidden md:flex mx-auto">
            <NavigationMenu>
              <NavigationMenuList>
                {navItem("About", refs.aboutRef)}
                {navItem("Projects", refs.projRef)}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800">
                    Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <NavigationMenuLink asChild>
                        <div
                          onClick={() => handleLinkClick(refs.expRef)}
                          className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Experience
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            My professional journey and roles I've held.
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <div
                          onClick={() => handleLinkClick(refs.skillRef)}
                          className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Skills
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Technologies and tools I'm proficient with.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}

        {/* Right side buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {isHomePage && (
            <Button
              variant="primary"
              onClick={() => handleLinkClick(refs.contactRef)}
              className="bg-primary-600 hover:bg-primary-700 text-gray-900 dark:text-white"
            >
              Let's Talk
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          {isHomePage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isHomePage && mobileMenuOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 pb-4 md:hidden">
          <div className="container flex flex-col space-y-3 px-4 pt-4">
            <Button
              variant="ghost"
              onClick={() => handleLinkClick(refs.heroRef)}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleLinkClick(refs.projRef)}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleLinkClick(refs.expRef)}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleLinkClick(refs.skillRef)}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleLinkClick(refs.aboutRef)}
            >
              About
            </Button>
            <Button
              className="w-full bg-primary-600 hover:bg-primary-700 text-white"
              onClick={() => handleLinkClick(refs.contactRef)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
