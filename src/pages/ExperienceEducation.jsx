import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export function ExperienceEducation() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Journey
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Experience Section */}
          <Card className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-md dark:hover:shadow-slate-700/50 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  Experience
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 md:space-y-8">
                <TimelineItem
                  title="React JS Developer"
                  company="SKY Inclusive"
                  period="Apr 2025 - Present"
                  description="Working as a full-time React.js Developer responsible for building and maintaining scalable web applications. Collaborating with cross-functional teams to deliver responsive UI using React, Next.js, and Tailwind CSS. Improved application performance by 40% through optimization techniques, reusable components, and efficient state management (Redux/Context API)."
                  icon={
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400" />
                  }
                  accentColor="slate"
                />

                <TimelineItem
                  title="React JS ( Internship )"
                  company="Tesseract Technolabs Pvt. Ltd."
                  period="Jan 2024- July 2024"
                  description="Assisted in developing responsive web interfaces using React.js and JavaScript. Gained hands-on experience in building reusable components, integrating APIs, and debugging UI issues. Collaborated with senior developers in Agile sprints and contributed to real-world project features and bug fixes."
                  icon={
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400" />
                  }
                  accentColor="slate"
                />
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-md dark:hover:shadow-slate-700/50 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  Education
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 md:space-y-8">
                <TimelineItem
                  title="B.Tech in Computer Engineering"
                  company="Government Engineering College, Gandhinagar"
                  period="2021 – 2024"
                  description="CGPA: 7.78 – Focused on software development, data structures, and web technologies."
                  icon={
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400" />
                  }
                  accentColor="slate"
                />
                <TimelineItem
                  title="Higher Secondary (H.S.C)"
                  company="Navrang High School"
                  period="2020 – 2021"
                  description="Completed 12th Grade with 77% – Science Stream."
                  icon={
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400" />
                  }
                  accentColor="slate"
                />
                <TimelineItem
                  title="Secondary School (S.S.C)"
                  company="Solaris Public School"
                  period="2018 – 2020"
                  description="Completed 10th Grade with 66% – Gujarat Board."
                  icon={
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-slate-400" />
                  }
                  accentColor="slate"
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
  accentColor = "slate",
}) {
  // Define color variants
  const colorVariants = {
    slate: {
      text: "text-slate-600 dark:text-slate-400",
      border: "border-slate-500",
      dot: "bg-slate-500",
      ping: "bg-slate-400",
    },
  };

  const colors = colorVariants[accentColor];

  return (
    <div className="relative pl-6 sm:pl-8 pb-6 md:pb-8 border-l border-slate-200 dark:border-slate-700 last:border-l-0 last:pb-0 group">
      {/* Dot */}
      <div
        className={`absolute left-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${colors.dot} -translate-x-1/2 group-hover:scale-125 transition-transform`}
      >
        <div
          className={`absolute inset-0 rounded-full ${colors.ping} animate-ping opacity-30`}
        ></div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white">
          {title}
        </h3>
        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
          <div className="flex items-center gap-2">
            {icon}
            <span className={`${colors.text} font-medium text-sm sm:text-base`}>{company}</span>
          </div>
          <span className="hidden xs:block text-slate-500 dark:text-slate-400 text-sm">•</span>
          <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm xs:mt-0 mt-1 xs:mt-0">
            {period}
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}