"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { getAboutData } from "@/app/lib/data/about";
import { tooltips } from "@/app/lib/data/tooltips";
import * as LucideIcons from "lucide-react";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";
import Tooltip from "@/app/components/ui/Tooltip";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

// Icon mapping
const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

const skillIcons = {
  React: LucideIcons.Atom,
  "Next.js": LucideIcons.Triangle,
  TypeScript: LucideIcons.FileCode,
  Tailwind: LucideIcons.Palette,
  "Node.js": LucideIcons.Server,
  Express: LucideIcons.Rocket,
  MongoDB: LucideIcons.Database,
  Git: LucideIcons.GitBranch,
  Figma: LucideIcons.Frame,
  Postman: LucideIcons.Mail,
  Linux: LucideIcons.Terminal,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const { language, t } = useLanguage();
  const {
    profile,
    socialLinks,
    introduction,
    workExperience,
    studies,
    technicalSkills,
  } = getAboutData(language);
  const displayedWorkExperience =
    workExperience.length > 0
      ? workExperience
      : getAboutData("en").workExperience;

  return (
    <section
      id="about"
      className="overflow-visible px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(280px,320px)_1fr] lg:gap-16 xl:gap-20">
        {/* LEFT SIDEBAR */}
        <div className="lg:sticky lg:top-32 h-fit space-y-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-zinc-900/30 p-6 text-center backdrop-blur-sm sm:p-8"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative mb-6 inline-block h-36 w-36 cursor-pointer sm:h-44 sm:w-44 md:h-50 md:w-50"
            >
              {/* normal image */}
              <OptimizedImage
                src={profile.image}
                alt="profile"
                width={200}
                height={200}
                className="rounded-full absolute inset-0 border-2 border-white/20 transition-all duration-500 group-hover:blur-md group-hover:scale-110"
              />

              {/* hover image */}
              <OptimizedImage
                src={profile.hoverImage || profile.image} // optional separate hover image
                alt="profile hover"
                width={200}
                height={200}
                className="rounded-full absolute inset-0 border-2 border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-r from-white to-zinc-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
            >
              {profile.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white mt-2 text-base"
            >
              {profile.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 mt-4 text-sm text-white"
            >
              <MapPin size={16} />
              <span>{profile.location}</span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {socialLinks.map((link, index) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];

              return (
                <Tooltip
                  key={link.name}
                  content={tooltips[link.icon as keyof typeof tooltips]}
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 transition-all hover:border-white/30 hover:bg-zinc-800/50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-normal text-base">{link.name}</span>
                      <Icon
                        size={20}
                        className="text-white group-hover:text-white transition-colors"
                      />
                    </div>
                  </motion.a>
                </Tooltip>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* INTRODUCTION */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
              <h3 className="text-2xl font-bold sm:text-3xl">
                {t.about.introduction}
              </h3>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base leading-relaxed text-white sm:text-lg"
            >
              {introduction}
            </motion.p>
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section
            id="experience"
            initial="visible"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold sm:text-3xl">
                {t.about.workExperience}
              </h3>
            </motion.div>
            <div className="space-y-6">
              {displayedWorkExperience.map((job) => (
                <motion.div
                  key={job.title}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="relative border-l-2 border-zinc-800 pl-6 transition-colors hover:border-blue-500 sm:pl-8"
                >
                  {/* Dot indicator */}
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-900" />

                  <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all">
                    <h4 className="flex items-center gap-2 text-lg font-semibold sm:text-xl">
                      <span className="text-blue-400">{job.title}</span>
                      <span className="text-white">—</span>
                      <span>{job.company}</span>
                    </h4>
                    <p className="text-sm text-white mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {job.period}
                    </p>
                    <p className="text-white mt-4 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* STUDIES */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold sm:text-3xl">
                {t.about.studies}
              </h3>
            </motion.div>
            <div className="space-y-4">
              {studies.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-white/5 bg-zinc-900/30 p-5 transition-all hover:border-white/20 hover:bg-zinc-900/50 sm:p-6"
                >
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
                    <div>
                      <h4 className="font-semibold text-lg text-purple-400">
                        {item.title}
                      </h4>
                      <p className="text-white mt-1">{item.school}</p>
                    </div>
                    <span className="text-sm text-white bg-zinc-800 px-3 py-1 rounded-full">
                      {item.info}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative rounded-3xl"
          >
            {/* Section Header */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center gap-3 text-start sm:mb-12 sm:gap-4"
            >
              <Code2 className="text-pink-400" size={32} />
              <h3 className="text-start text-2xl font-bold tracking-tight text-white sm:text-[30px]">
                {t.about.technicalSkills}
              </h3>
            </motion.div>

            {/* Skill Categories */}
            <div className="space-y-12">
              {Object.entries(technicalSkills).map(
                ([category, skills], catIndex) => (
                  <motion.div key={category} variants={itemVariants}>
                    <motion.h4
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-lg md:text-xl font-semibold mb-6 uppercase text-white tracking-wide text-left"
                    >
                      {category}
                    </motion.h4>

                    {/* Skill Grid */}
                    <motion.div
                      className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6"
                      variants={containerVariants}
                    >
                      {skills.map((skill, index) => {
                        const Icon =
                          skillIcons[skill as keyof typeof skillIcons] ||
                          LucideIcons.Code;
                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: catIndex * 0.1 + index * 0.05,
                              type: "spring",
                              stiffness: 120,
                              damping: 16,
                            }}
                            whileHover={{ scale: 1.1 }}
                            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-zinc-800 p-3 text-center shadow-lg transition-colors duration-300 hover:bg-zinc-700 sm:p-4"
                          >
                            <motion.div
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                              className="text-4xl text-white"
                            >
                              <Icon size={32} />
                            </motion.div>
                            <span className="text-white font-medium text-sm md:text-base">
                              {skill}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
