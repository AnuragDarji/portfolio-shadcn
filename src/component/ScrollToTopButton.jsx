import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          const progress = (scrollTop / scrollHeight) * 100;
          setScrollProgress(progress);

          // Show button after 300px scroll
          setIsVisible(scrollTop > 300);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={`
          relative h-12 w-12 rounded-full transition-all duration-300 ease-in-out
          bg-background/80 backdrop-blur-sm hover:bg-background
          shadow-lg hover:shadow-md
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        {/* Progress ring as a partial border */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderImage: `linear-gradient(to right, hsl(var(--primary)) ${scrollProgress}%, transparent ${scrollProgress}%) 1`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "exclude",
            padding: "2px",
          }}
        />
        {/* Arrow icon */}
        <ArrowUp className="h-5 w-5 relative z-10 text-primary" />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;