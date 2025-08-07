import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export function ExperienceEducation() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Journey
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <Card className="bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors shadow-sm dark:shadow-none">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Experience
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem
                  title="React JS Developer"
                  company="SKY Inclusive"
                  period="Apr 2025 - Present"
                  description="Working as a full-time React.js Developer responsible for building and maintaining scalable web applications. Collaborating with cross-functional teams to deliver responsive UI using React, Next.js, and Tailwind CSS. Improved application performance by 40% through optimization techniques, reusable components, and efficient state management (Redux/Context API)."
                  icon={
                    <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  }
                  accentColor="blue"
                />

                <TimelineItem
                  title="React JS ( Internship )"
                  company="Tesseract Technolabs Pvt. Ltd."
                  period="Jan 2024- July 2024"
                  description="Assisted in developing responsive web interfaces using React.js and JavaScript. Gained hands-on experience in building reusable components, integrating APIs, and debugging UI issues. Collaborated with senior developers in Agile sprints and contributed to real-world project features and bug fixes."
                  icon={
                    <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  }
                  accentColor="blue"
                />
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-cyan-500/50 dark:hover:border-cyan-300/50 transition-colors shadow-sm dark:shadow-none">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-cyan-600 dark:text-cyan-300" />
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem
                  title="B.Tech in Computer Engineering"
                  company="Government Engineering College, Gandhinagar"
                  period="2021 – 2024"
                  description="CGPA: 7.78 – Focused on software development, data structures, and web technologies."
                  icon={
                    <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                  }
                  accentColor="cyan"
                />
                <TimelineItem
                  title="Higher Secondary (H.S.C)"
                  company="Navrang High School"
                  period="2020 – 2021"
                  description="Completed 12th Grade with 77% – Science Stream."
                  icon={
                    <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                  }
                  accentColor="cyan"
                />
                <TimelineItem
                  title="Secondary School (S.S.C)"
                  company="Solaris Public School"
                  period="2018 – 2020"
                  description="Completed 10th Grade with 66% – Gujarat Board."
                  icon={
                    <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                  }
                  accentColor="cyan"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  title,
  company,
  period,
  description,
  icon,
  accentColor = "blue",
}) {
  // Define color variants
  const colorVariants = {
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300",
      ping: "bg-blue-400",
    },
    cyan: {
      text: "text-cyan-600 dark:text-cyan-300",
      gradient: "from-cyan-500 to-blue-600 dark:from-cyan-300 dark:to-blue-400",
      ping: "bg-cyan-300",
    },
  };

  const colors = colorVariants[accentColor];

  return (
    <div className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0 group">
      {/* Animated dot */}
      <div
        className={`absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r ${colors.gradient} -translate-x-1/2 group-hover:scale-125 transition-transform`}
      >
        <div
          className={`absolute inset-0 rounded-full ${colors.ping} animate-ping opacity-30`}
        ></div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {icon}
          <span className={`${colors.text} font-medium`}>{company}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            • {period}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
}
