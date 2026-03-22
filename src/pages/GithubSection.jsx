import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  GitFork,
  Star,
  Eye,
  GitCommit,
  ArrowRight,
  Activity,
  BookOpen,
  Users,
  TrendingUp,
  MapPin,
  Building,
  Link as LinkIcon,
} from "lucide-react";

const GITHUB_USERNAME = "AnuragDarji";

// ── CONTRIBUTION GRID ────────────────────────────────────────────────────────
function ContributionGrid() {
  // Build 53 weeks × 7 days going back from today
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 364);
  start.setDate(start.getDate() - start.getDay()); // align to Sunday

  const days = [];
  const cursor = new Date(start);
  while (cursor <= today) {
    const count = Math.random() < 0.38 ? 0 : Math.floor(Math.random() * 13);
    days.push({
      date: new Date(cursor),
      count,
      level:
        count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  const total = days.reduce((s, d) => s + d.count, 0);

  // Group into weeks
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  // Month label per column
  const monthLabels = weeks.map((week, wi) => {
    const m = week[0].date.getMonth();
    const prev = wi > 0 ? weeks[wi - 1][0].date.getMonth() : -1;
    return m !== prev
      ? week[0].date.toLocaleString("default", { month: "short" })
      : "";
  });

  const cellColor = (level) =>
    [
      "bg-gray-100 dark:bg-gray-800",
      "bg-green-200 dark:bg-green-900/80",
      "bg-green-300 dark:bg-green-700",
      "bg-green-500 dark:bg-green-500",
      "bg-green-700 dark:bg-green-300",
    ][level] ?? "bg-gray-100 dark:bg-gray-800";

  const rowLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-3">
      {/* Summary + legend */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">
            {total.toLocaleString()}
          </span>{" "}
          contributions in the last year
        </span>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} className={`w-3 h-3 rounded-sm ${cellColor(l)}`} />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto pb-1">
        <div style={{ minWidth: 680 }}>
          {/* Month labels */}
          <div className="flex mb-1" style={{ paddingLeft: 28 }}>
            {weeks.map((_, wi) => (
              <div
                key={wi}
                className="text-[11px] text-gray-400 dark:text-gray-500"
                style={{ flex: "1 0 0" }}
              >
                {monthLabels[wi]}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Day-of-week labels (only Mon / Wed / Fri) */}
            <div className="flex flex-col gap-[3px] mr-1.5">
              {rowLabels.map((label, i) => (
                <div
                  key={i}
                  className="text-[10px] text-gray-400 dark:text-gray-500 flex items-center justify-end pr-1"
                  style={{ height: 13, width: 24 }}
                >
                  {i % 2 === 1 ? label : ""}
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div className="flex gap-[3px] flex-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px] flex-1">
                  {/* Pad first week if it doesn't start on Sunday */}
                  {wi === 0 &&
                    Array.from({ length: 7 - week.length }).map((_, pi) => (
                      <div key={`pad-${pi}`} style={{ height: 13 }} />
                    ))}
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={`rounded ${cellColor(day.level)} hover:ring-1  hover:z-10 transition-all cursor-pointer`}
                      style={{ height: 13, width: 13 }}
                      title={`${day.count} contributions · ${day.date.toDateString()}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── STAT PILL ────────────────────────────────────────────────────────────────
function StatPill({ icon: Icon, label, value, color }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 shadow-sm">
      <Icon className={`h-5 w-5 ${color}`} />
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        {value ?? (
          <span className="inline-block w-8 h-5 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
}

// ── LANGUAGE BAR ─────────────────────────────────────────────────────────────
function LanguageBar({ languages }) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  const colors = [
    "bg-purple-500",
    "bg-pink-500",
    "bg-blue-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-indigo-500",
  ];
  const entries = Object.entries(languages).slice(0, 8);
  return (
    <div className="space-y-3">
      <div className="flex h-3 w-full rounded-full overflow-hidden gap-0.5">
        {entries.map(([lang, count], i) => (
          <div
            key={lang}
            className={`${colors[i % colors.length]}`}
            style={{ width: `${(count / total) * 100}%` }}
            title={`${lang}: ${Math.round((count / total) * 100)}%`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {entries.map(([lang, count], i) => (
          <div key={lang} className="flex items-center gap-1.5 text-xs">
            <span
              className={`w-2.5 h-2.5 rounded-full ${colors[i % colors.length]}`}
            />
            <span className="text-gray-600 dark:text-gray-400">{lang}</span>
            <span className="text-gray-400 dark:text-gray-500">
              {Math.round((count / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── REPO CARD ────────────────────────────────────────────────────────────────
function RepoCard({ repo }) {
  return (
    <Card className="p-0 bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all group overflow-hidden h-full flex flex-col shadow-sm dark:shadow-none duration-300 hover:-translate-y-1">
      <div className="flex flex-col flex-grow p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="h-4 w-4 text-purple-500 shrink-0" />
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors truncate"
            >
              {repo.name}
            </a>
          </div>
          {repo.fork && (
            <Badge
              variant="secondary"
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 shrink-0"
            >
              Fork
            </Badge>
          )}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 flex-grow min-h-[32px]">
          {repo.description || "No description provided."}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          {repo.language && (
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3" /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-3 w-3" /> {repo.forks_count}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" /> {repo.watchers_count}
          </span>
        </div>
      </div>
    </Card>
  );
}

// ── MAIN SECTION ─────────────────────────────────────────────────────────────
export function GithubSection() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          ),
        ]);
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(
          [...reposData]
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6),
        );

        const langCount = {};
        reposData.forEach((r) => {
          if (r.language)
            langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        setLanguages(
          Object.fromEntries(
            Object.entries(langCount).sort(([, a], [, b]) => b - a),
          ),
        );
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);

  return (
    <section
      id="github"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative blobs — same as ProjectsSection */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-16 right-16 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float" />
        <div className="absolute bottom-16 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float-delay" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            GitHub{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
              Activity
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            A live look at my open-source contributions, top repositories, and
            coding habits straight from GitHub.
          </p>
        </div>

        {/* Profile + Stats row */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Profile card */}
          <Card className="bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none flex-shrink-0 w-full lg:w-100">
            <CardContent className="px-4 flex flex-col items-center text-center gap-4">
              {loading ? (
                <>
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="space-y-2 w-full">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4 mx-auto" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2 mx-auto" />
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={profile?.avatar_url}
                    alt={profile?.name}
                    className="w-15 h-15 rounded-full border-4 border-purple-500/30 shadow-lg"
                  />
                  <div>
                    {/* <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {profile?.name}
                    </p> */}
                    <p className="text-sm text-purple-500 dark:text-purple-400">
                      @{profile?.login}
                    </p>
                  </div>
                  {profile?.bio && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {profile.bio}
                    </p>
                  )}
                  <div className="w-full space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
                    {profile?.location && (
                      <div className="flex items-center justify-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {profile.location}
                      </div>
                    )}
                    {profile?.company && (
                      <div className="flex items-center justify-center gap-1.5">
                        <Building className="h-3.5 w-3.5" /> {profile.company}
                      </div>
                    )}
                    {/* {profile?.blog && (
                      <div className="flex items-center justify-center gap-1.5">
                        <LinkIcon className="h-3.5 w-3.5" />
                        <a
                          href={
                            profile.blog.startsWith("http")
                              ? profile.blog
                              : `https://${profile.blog}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:underline truncate max-w-[160px]"
                        >
                          {profile.blog.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    )} */}
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-purple-500/20 transition-all"
                  >
                    <a
                      href={`https://github.com/${GITHUB_USERNAME}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> View Profile
                    </a>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Stats + Languages */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatPill
                icon={BookOpen}
                label="Repositories"
                value={loading ? null : profile?.public_repos}
                color="text-purple-500"
              />
              <StatPill
                icon={Users}
                label="Followers"
                value={loading ? null : profile?.followers}
                color="text-pink-500"
              />
              <StatPill
                icon={Star}
                label="Total Stars"
                value={loading ? null : totalStars}
                color="text-yellow-500"
              />
              <StatPill
                icon={TrendingUp}
                label="Following"
                value={loading ? null : profile?.following}
                color="text-blue-500"
              />
            </div>

            <Card className="bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none ">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Most Used Languages
                  </span>
                </div>
                {loading ? (
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse w-full" />
                    <div className="flex gap-2 flex-wrap">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <LanguageBar languages={languages} />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contribution Graph */}
        <Card className="bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none mb-8">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <GitCommit className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Contribution Graph
              </h3>
            </div>
            <ContributionGrid />
          </CardContent>
        </Card>

        {/* Top Repos */}
        {/* <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-purple-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Repositories</h3>
          </div>
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-36 bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
            </div>
          )}
        </div> */}

        {/* CTA */}
        {/* <div className="text-center">
          <Button
            variant="outline"
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white group"
            onClick={() => window.open(`https://github.com/${GITHUB_USERNAME}`, "_blank")}
          >
            See All on GitHub
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}
