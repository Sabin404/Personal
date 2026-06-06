"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getProjects } from "@/app/types/project";
import type { Project } from "@/app/types";
import { ArrowUpRight, Github, Star } from "lucide-react";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import Link from "next/link";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden px-4 py-14 sm:px-6"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute left-1/4 top-0 h-[55vw] w-[55vw] max-h-160 max-w-160 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 h-[62vw] w-[62vw] max-h-184 max-w-184 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl space-y-16 sm:space-y-24 lg:space-y-32">
        {/* Header */}
        <Header
          selectedWorks={t.projects.selectedWorks}
          headingPrefix={t.projects.headingPrefix}
          headingHighlight={t.projects.headingHighlight}
          subtitle={t.projects.subtitle}
        />

        {/* Grid */}
        <div className="grid auto-rows-[320px] grid-cols-12 gap-4 sm:auto-rows-[360px] sm:gap-5 lg:auto-rows-[400px] lg:gap-6">
          {projects.map((project, index) => {
            const gridLayouts = [
              "col-span-12 md:col-span-7 row-span-1",
              "col-span-12 md:col-span-5 row-span-1",
              "col-span-12 md:col-span-5 row-span-1",
              "col-span-12 md:col-span-7 row-span-1",
            ];
            const layout = gridLayouts[index % gridLayouts.length];

            return (
              <motion.div
                key={project.id}
                className={`${layout} relative`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <CTA
          projectsCount={projects.length}
          ctaLabel={t.projects.exploreGithub}
          projectsAndCounting={t.projects.projectsAndCounting}
        />
      </div>
    </section>
  );
}

// Header Component
function Header({
  selectedWorks,
  headingPrefix,
  headingHighlight,
  subtitle,
}: {
  selectedWorks: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-16 text-center sm:mb-24 lg:mb-32"
    >
      <motion.div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-white font-medium tracking-wide">
            {selectedWorks}
          </span>
        </div>
        <div className="hidden h-px flex-1 bg-linear-to-r from-white/20 to-transparent sm:block" />
      </motion.div>
      <h1 className="text-[clamp(4rem,12vw,11rem)] font-black leading-[0.85] tracking-tighter text-white">
        {headingPrefix}{" "}
        <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {headingHighlight}
        </span>
      </h1>
      <motion.p className="mx-auto mt-6 max-w-2xl px-1 text-base font-light tracking-wide text-white sm:mt-8 sm:text-xl">
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

// CTA Component

function CTA({
  projectsCount,
  ctaLabel,
  projectsAndCounting,
}: {
  projectsCount: number;
  ctaLabel: string;
  projectsAndCounting: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-8 text-center sm:mt-12"
    >
      <motion.a
        href="https://github.com/sabin404"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 hover:text-white sm:gap-3 sm:px-6 sm:py-3 sm:text-base"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github size={20} />
        {ctaLabel}
        <ArrowUpRight size={20} />
      </motion.a>

      <motion.p className="mt-4 text-white text-sm uppercase tracking-widest">
        {projectsCount}+ {projectsAndCounting}
      </motion.p>
    </motion.div>
  );
}

// Project Card
function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-900/95 to-zinc-800" />

      {/* Project Image Overlay */}
      {project.image && (
        <OptimizedImage
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-500"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white sm:p-6 lg:p-8">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white mb-6">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            {t.projects.liveProject}
          </span>
          <h3 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-white sm:text-base lg:text-lg">
            {project.description}
          </p>
        </div>

        {/* Tech & CTA */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags?.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-white hover:text-white transition-colors cursor-pointer">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                {t.projects.viewProject}
              </Link>
            ) : null}
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
