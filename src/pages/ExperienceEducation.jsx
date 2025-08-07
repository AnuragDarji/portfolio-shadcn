import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';

export function ExperienceEducation() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Journey</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-400/30 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-blue-400" />
                <CardTitle className="text-2xl font-bold text-white">Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem
                  title="Senior Frontend Developer"
                  company="Tech Innovations Inc."
                  period="2021 - Present"
                  description="Led the development of customer-facing applications using React and Next.js. Improved performance by 40% through code optimization."
                  icon={<Briefcase className="h-5 w-5 text-blue-400" />}
                />
                <TimelineItem
                  title="Frontend Developer"
                  company="Digital Solutions LLC"
                  period="2018 - 2021"
                  description="Built responsive UIs and collaborated with design teams to implement pixel-perfect designs."
                  icon={<Briefcase className="h-5 w-5 text-blue-400" />}
                />
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-cyan-300/30 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-cyan-300" />
                <CardTitle className="text-2xl font-bold text-white">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem
                  title="Master's in Computer Science"
                  company="Stanford University"
                  period="2016 - 2018"
                  description="Specialized in Human-Computer Interaction and Web Technologies."
                  icon={<GraduationCap className="h-5 w-5 text-cyan-300" />}
                />
                <TimelineItem
                  title="Bachelor's in Software Engineering"
                  company="MIT"
                  period="2012 - 2016"
                  description="Graduated with honors. Thesis on modern frontend architectures."
                  icon={<GraduationCap className="h-5 w-5 text-cyan-300" />}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, company, period, description, icon }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-700 last:border-l-0 last:pb-0 group">
      {/* Animated dot */}
      <div className="absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 -translate-x-1/2 group-hover:scale-125 transition-transform">
        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-blue-400 font-medium">{company}</span>
          <span className="text-gray-400 text-sm">• {period}</span>
        </div>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
}