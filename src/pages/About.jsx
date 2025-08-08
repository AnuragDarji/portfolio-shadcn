import { Cpu, Layout, Smartphone, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "../assets/profile.jpg";
import { IoMdDownload } from "react-icons/io";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-gray-100 dark:to-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
              {/* Profile image */}
              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-primary-400">Me</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate frontend developer with{" "}
              {new Date().getFullYear() - 2024}+ years of experience building
              modern web applications using React.js and its ecosystem.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              My focus is on creating performant, accessible, and visually
              appealing user interfaces that deliver exceptional user
              experiences. I love turning complex problems into simple,
              intuitive solutions.
            </p>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <div className="p-2 rounded-lg bg-primary-400/10 text-primary-400 border border-primary-400/20">
                  <Cpu className="h-5 w-5" />
                </div>
                <span>React Specialist</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <div className="p-2 rounded-lg bg-primary-400/10 text-primary-400 border border-primary-400/20">
                  <Layout className="h-5 w-5" />
                </div>
                <span>UI/UX Focused</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <div className="p-2 rounded-lg bg-primary-400/10 text-primary-400 border border-primary-400/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <div className="p-2 rounded-lg bg-primary-400/10 text-primary-400 border border-primary-400/20">
                  <Rocket className="h-5 w-5" />
                </div>
                <span>Performance Optimized</span>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="gap-2 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1K13KQHCbc7N3YuPcU4Q3HjkQRUmijBWV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdDownload className="text-lg" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
