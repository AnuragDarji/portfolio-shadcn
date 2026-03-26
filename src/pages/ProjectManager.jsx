"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Link as LinkIcon,
  Plus,
  Pencil,
  Trash2,
  Upload,
  Layers,
  ImageIcon,
  ExternalLink,
  Search,
  LayoutGrid,
  List,
  Shield,
} from "lucide-react";
import API_ENDPOINTS from "@/Constant/api";

const API = API_ENDPOINTS.PROJECTS;

const EMPTY_FORM = {
  title: "",
  description: "",
  image: "",
  skills: "",
  github: "",
  live: "",
  category: "web",
};

export default function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const url = category !== "all" ? `${API}?category=${category}` : API;
      const res = await axios.get(url);
      setProjects(res.data.projects || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [category]);

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.skills?.some((s) => s.toLowerCase().includes(search.toLowerCase())),
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      setUploading(true);
      let imageUrl = form.image;
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const uploadRes = await axios.post(`${API}/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageUrl = uploadRes.data.url;
      }
      const payload = {
        ...form,
        image: imageUrl,
        skills: form.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };
      if (editingProject) {
        await axios.put(`${API}/${editingProject._id}`, payload);
      } else {
        await axios.post(API, payload);
      }
      handleCloseDialog();
      fetchProjects();
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setDeleteConfirm(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setForm({ ...project, skills: project.skills.join(", ") });
    setImagePreview(project.image || "");
    setImageFile(null);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEditingProject(null);
    setImageFile(null);
    setImagePreview("");
    setForm(EMPTY_FORM);
  };

  const categories = ["all", "web", "mobile"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Sticky Top Bar ── */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-3 justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm shadow-purple-500/30">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-none text-foreground">
                Admin Panel
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Project Manager
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              placeholder="Search projects or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-9 rounded-full border-border/50 bg-secondary/40 text-sm"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* List / Grid toggle */}
            <div className="hidden sm:flex items-center border border-border/50 rounded-lg overflow-hidden h-8">
              <button
                onClick={() => setViewMode("list")}
                className={`px-2.5 h-full transition-colors ${
                  viewMode === "list"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-2.5 h-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>

            <Button
              onClick={() => setOpen(true)}
              size="sm"
              className="rounded-full h-8 px-3.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-md shadow-purple-500/20 text-xs"
            >
              <Plus className="w-3.5 h-3.5 mr-1" /> Add Project
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Heading ── */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-sm text-muted-foreground">
            {loading
              ? "Loading..."
              : `${filtered.length} project${filtered.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {/* ── Category Pills ── */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all duration-200 border ${
                category === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-sm"
                  : "border-border/50 text-muted-foreground hover:text-foreground bg-background hover:border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Content ── */}
        {loading ? (
          <div className="py-24 text-center text-muted-foreground text-sm animate-pulse">
            Loading projects...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center">
            <Layers className="w-10 h-10 text-muted-foreground/20 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              No projects found. Add your first one!
            </p>
          </div>
        ) : viewMode === "list" ? (
          /* ══ LIST VIEW ══ */
          <div className="space-y-1.5">
            {/* Column headers */}
            <div className="hidden md:grid grid-cols-[2.5fr_1.5fr_0.8fr_auto] gap-4 px-4 pb-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest border-b border-border/30">
              <span>Project</span>
              <span>Skills</span>
              <span>Category</span>
              <span>Actions</span>
            </div>

            {filtered.map((project, idx) => (
              <div
                key={project._id}
                style={{ animationDelay: `${idx * 30}ms` }}
                className="group grid md:grid-cols-[2.5fr_1.5fr_0.8fr_auto] gap-4 items-center px-4 py-3 rounded-xl border border-border/30 hover:border-purple-500/20 bg-card dark:bg-gray-800/30 hover:bg-secondary/20 dark:hover:bg-gray-800/60 transition-all duration-150"
              >
                {/* Project info */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-border/30">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <ImageIcon className="w-4 h-4 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {project.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="hidden md:flex flex-wrap gap-1 items-center">
                  {project.skills?.slice(0, 3).map((s, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-[10px] px-1.5 py-0 h-4 font-mono border-border/40 text-muted-foreground"
                    >
                      {s}
                    </Badge>
                  ))}
                  {project.skills?.length > 3 && (
                    <span className="text-[10px] text-muted-foreground/60">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="hidden md:block">
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium capitalize ${
                      project.category === "web"
                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                        : "bg-pink-500/10 text-pink-600 dark:text-pink-400"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-0.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      title="Live"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <div className="w-px h-3.5 bg-border/40 mx-1" />
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-purple-500 hover:bg-purple-500/10 transition-colors"
                    title="Edit"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(project._id)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ══ GRID VIEW ══ */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Card
                key={project._id}
                className="group rounded-xl overflow-hidden border border-border/50 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col p-0 bg-card dark:bg-gray-800/50"
              >
                <div className="relative overflow-hidden h-44">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-muted-foreground/20" />
                    </div>
                  )}
                  <span
                    className={`absolute top-2.5 left-2.5 text-[10px] px-2 py-0.5 rounded-full font-medium capitalize backdrop-blur-sm ${
                      project.category === "web"
                        ? "bg-purple-500/80 text-white"
                        : "bg-pink-500/80 text-white"
                    }`}
                  >
                    {project.category}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(project._id)}
                      className="p-2 rounded-lg bg-red-500/70 hover:bg-red-500 text-white backdrop-blur-sm transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm leading-snug text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex gap-1 shrink-0 mt-0.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.skills?.map((s, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 h-4 font-mono border-border/40 text-muted-foreground"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* ══ Add / Edit Dialog ══ */}
      <Dialog open={open} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-lg rounded-2xl border border-border bg-background">
          <DialogHeader>
            <DialogTitle className="text-base font-bold">
              {editingProject ? "Edit Project" : "Add New Project"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 mt-1">
            {/* Image Upload */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative rounded-xl border-2 border-dashed border-border/50 hover:border-purple-500/40 cursor-pointer overflow-hidden transition-colors bg-secondary/20"
            >
              {imagePreview ? (
                <div className="relative h-36">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-sm font-medium">
                    <Upload className="w-4 h-4" /> Change Image
                  </div>
                </div>
              ) : (
                <div className="h-28 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Upload className="w-5 h-5" />
                  <span className="text-sm">Click to upload image</span>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {[
              { name: "title", placeholder: "Project title" },
              { name: "description", placeholder: "Short description" },
              {
                name: "skills",
                placeholder: "Skills (comma separated: React, Node, MongoDB)",
              },
              { name: "github", placeholder: "GitHub URL (optional)" },
              { name: "live", placeholder: "Live URL (optional)" },
            ].map(({ name, placeholder }) => (
              <Input
                key={name}
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                className="rounded-xl border-border/50 bg-secondary/20 text-sm h-9"
              />
            ))}

            <Select
              value={form.category}
              onValueChange={(val) => setForm({ ...form, category: val })}
            >
              <SelectTrigger className="rounded-xl border-border/50 bg-secondary/20 text-sm h-9">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={handleSubmit}
              disabled={uploading}
              className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 h-10 font-semibold text-sm shadow-md shadow-purple-500/20"
            >
              {uploading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  {editingProject ? "Updating..." : "Adding..."}
                </span>
              ) : editingProject ? (
                "Update Project"
              ) : (
                "Add Project"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ══ Delete Confirm ══ */}
      <Dialog
        open={!!deleteConfirm}
        onOpenChange={() => setDeleteConfirm(null)}
      >
        <DialogContent className="max-w-sm rounded-2xl border border-border bg-background">
          <DialogHeader>
            <DialogTitle className="text-base font-bold">
              Delete Project?
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mb-4">
            This action cannot be undone. The project will be permanently
            removed.
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setDeleteConfirm(null)}
              className="flex-1 rounded-xl border-border/50 text-sm h-9"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleDelete(deleteConfirm)}
              className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white border-0 text-sm h-9"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
