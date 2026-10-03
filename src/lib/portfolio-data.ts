import type { LucideIcon } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  School,
  Code2,
  Brain,
  Users,
  Clock,
  Type,
  Trophy,
  Award,
  BadgeCheck,
  ShieldCheck,
  Cloud,
  Sparkles,
  Database,
  Bot,
  FileText,
  Rocket,
  Globe,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Akil S",
  fullName: "AKIL S",
  title: "AI & Data Science Student",
  subtitle: "B.Tech Artificial Intelligence and Data Science",
  tagline:
    "Turning complex problems into intelligent, traceable solutions with Python, AI, and a relentless curiosity.",
  location: "Tirupur, Tamil Nadu, India",
  phone: "9842651523",
  email: "akilrmhss@gmail.com",
  address: "9/299 Kanniyan Kinaru, Kuttapalayam, Kangayam, Tirupur - 638 108",
  linkedin: "https://www.linkedin.com/in/akil008",
  linkedinHandle: "in/akil008",
  github: "https://github.com/Akil-Ai",
  githubHandle: "Akil-Ai",
  objective:
    "AI & Data Science student with a strong foundation in Python and problem-solving, seeking an online internship to apply technical skills and gain practical experience in real-world projects.",
  available: true,
  resumeUrl: "/Akil-S-Resume.pdf",
};

export const nowStatus = {
  playing: {
    label: "Now playing",
    title: "Lo-fi beats to debug to",
    artist: "ChilledCow Radio",
  },
  reading: {
    label: "Currently reading",
    title: "Deep Learning",
    author: "Ian Goodfellow et al.",
  },
  building: {
    label: "Building",
    title: "UAT-Lens-Ai v2",
    detail: "adding multi-doc support",
  },
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export type StatItem = { label: string; value: string; numeric: number; decimals?: number; suffix?: string };

export const stats: StatItem[] = [
  { label: "CGPA", value: "8.21", numeric: 8.21, decimals: 2 },
  { label: "SSLC %", value: "90.6", numeric: 90.6, decimals: 1 },
  { label: "HSC %", value: "87", numeric: 87, decimals: 0 },
  { label: "Certs", value: "7+", numeric: 7, suffix: "+" },
];

export type LearningItem = {
  name: string;
  progress: number;
  icon: LucideIcon;
};

export const currentlyLearning: LearningItem[] = [
  { name: "Machine Learning", progress: 72, icon: Brain },
  { name: "Deep Learning", progress: 58, icon: Sparkles },
  { name: "Data Structures", progress: 80, icon: Database },
  { name: "Generative AI", progress: 65, icon: Bot },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  icon: LucideIcon;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "VSB Engineering College",
    period: "2024 — 2028",
    detail: "CGPA: 8.21 — Building deep expertise in machine learning, data engineering, and intelligent systems.",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary (HSC) — 87%",
    institution: "Rajendran Matric Hr School",
    period: "2021 — 2024",
    detail: "Completed higher secondary with a strong science and mathematics foundation.",
    icon: School,
  },
  {
    degree: "Secondary (SSLC) — 90.6%",
    institution: "Rajendran Matric Hr School",
    period: "2021 — 2024",
    detail: "Achieved distinction in secondary schooling, ranking among top performers.",
    icon: School,
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type: "Internship" | "Training" | "Program";
  description: string;
  highlights: string[];
  icon: LucideIcon;
  accent: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: "Artificial Intelligence Intern",
    org: "Codec Technologies Pvt. Ltd.",
    period: "Internship",
    type: "Internship",
    description:
      "Selected for an AICTE & ICAC-approved AI internship, applying classroom machine-learning concepts to real industry workflows and datasets.",
    highlights: [
      "AICTE & ICAC approved — industry-recognised program",
      "Hands-on exposure to applied AI and ML pipelines",
      "Bridged academic theory with real-world problem solving",
    ],
    icon: Bot,
    accent: "emerald",
  },
  {
    role: "Agentblazer Champion 2026",
    org: "Salesforce — AI Agentforce Skills",
    period: "Program",
    type: "Program",
    description:
      "Recognised as a Salesforce Agentblazer Champion, building practical skills around AI Agentforce and the next generation of autonomous AI agents.",
    highlights: [
      "Champion-tier recognition from Salesforce",
      "Specialised in AI agent development workflows",
      "Early adopter of Agentforce 2026 skills",
    ],
    icon: Sparkles,
    accent: "amber",
  },
  {
    role: "IoT & Digital Transformation (Silver)",
    org: "NASSCOM FutureSkills Prime",
    period: "Training",
    type: "Training",
    description:
      "Completed Silver-category training on the Internet of Things and digital transformation, understanding how connected devices reshape industries.",
    highlights: [
      "Silver category — NASSCOM FutureSkills Prime",
      "IoT architecture & digital transformation strategy",
      "Sensor data to cloud pipelines",
    ],
    icon: Globe,
    accent: "teal",
  },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical Skills",
    icon: Code2,
    accent: "emerald",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 75 },
      { name: "HTML & CSS", level: 80 },
      { name: "JavaScript", level: 72 },
      { name: "MS Excel", level: 82 },
      { name: "MS Word", level: 85 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    accent: "teal",
    skills: [
      { name: "Leadership", level: 82 },
      { name: "Teamwork", level: 88 },
      { name: "Time Management", level: 85 },
      { name: "Quick Learner", level: 90 },
      { name: "Typewriting", level: 78 },
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: LucideIcon;
  image?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "UAT-Lens-Ai",
    tagline: "Zero-hallucination UAT test case generation",
    description:
      "Transforms complex requirement documents — PRDs, BRDs, User Stories, and Acceptance Criteria — into complete, verified, and traceable User Acceptance Testing (UAT) test cases in minutes.",
    highlights: [
      "Every test case links directly to a verbatim source quote",
      "Zero-hallucination guarantee for trustworthy output",
      "Converts minutes of work into seconds of automation",
    ],
    tags: ["AI", "NLP", "Test Automation", "Python", "Traceability"],
    icon: FileText,
    image: "/projects/uat-lens.png",
    accent: "emerald",
  },
  {
    name: "Rock-Guard AI",
    tagline: "Rockfall risk intelligence console",
    description:
      "A working control-room console that turns rock-face imagery and slope-sensor telemetry into a graded rockfall risk score, an explanation of why the risk is what it is, a hazard map, and an actionable alert.",
    highlights: [
      "Multi-modal input: imagery + slope-sensor telemetry",
      "Explainable, graded risk scoring",
      "Hazard map and actionable alert generation",
    ],
    tags: ["AI", "Computer Vision", "IoT Sensors", "Safety", "Explainable AI"],
    icon: ShieldCheck,
    image: "/projects/rock-guard.png",
    accent: "amber",
  },
];

export type FunFact = {
  emoji: string;
  title: string;
  description: string;
};

export const funFacts: FunFact[] = [
  {
    emoji: "🏆",
    title: "2nd Prize — Code Fault Arena",
    description:
      "Debugged my way to a podium finish at VSB Engineering College's coding contest.",
  },
  {
    emoji: "⌨️",
    title: "Typewriting enthusiast",
    description:
      "Trained in typewriting — I type fast, think faster, and ship even faster.",
  },
  {
    emoji: "🧠",
    title: "NPTEL Elite",
    description:
      "Earned Elite-level recognition in national NPTEL courses — I love going deep on a topic.",
  },
  {
    emoji: "🎧",
    title: "Code + Lo-fi",
    description:
      "My best debugging happens with a lo-fi playlist on loop and a strong cup of filter coffee.",
  },
  {
    emoji: "🌱",
    title: "Always learning",
    description:
      "Right now: deep learning, data structures, and how LLMs actually reason under the hood.",
  },
  {
    emoji: "🤝",
    title: "Team player",
    description:
      "Led teams through hackathons and class projects — I believe the best code is written together.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  icon: LucideIcon;
  accent: string;
};

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence Intern",
    issuer: "Codec Technologies Pvt. Ltd. (AICTE & ICAC Approved)",
    icon: Bot,
    accent: "emerald",
  },
  {
    title: "Agentblazer Champion 2026 — AI Agentforce Skills",
    issuer: "Salesforce",
    icon: Sparkles,
    accent: "amber",
  },
  {
    title: "Salesforce Administrator Explorer",
    issuer: "FutureSkills Prime (Aligned with SSC NASSCOM)",
    icon: Cloud,
    accent: "teal",
  },
  {
    title: "Introduction to IoT and Digital Transformation (Silver)",
    issuer: "NASSCOM FutureSkills Prime",
    icon: Globe,
    accent: "emerald",
  },
  {
    title: "SkillQuest — Generative AI Literacy",
    issuer: "Simplilearn through SkillUp",
    icon: Sparkles,
    accent: "teal",
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE / HP Foundation",
    icon: ShieldCheck,
    accent: "amber",
  },
  {
    title: "Data Analyst Foundation Course",
    issuer: "Udemy",
    icon: Database,
    accent: "emerald",
  },
];

export type Achievement = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    title: "2nd Prize — Code Fault Arena",
    description:
      "Secured second prize in the Code Fault Arena competition held at VSB Engineering College, demonstrating strong debugging and problem-solving under pressure.",
    icon: Trophy,
  },
  {
    title: "Elite in NPTEL Courses",
    description:
      "Earned Elite certification in NPTEL courses — recognition of academic excellence in national-level online learning programs.",
    icon: Award,
  },
];

export const tools = [
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: Code2 },
  { name: "Excel", icon: Database },
  { name: "MS Word", icon: FileText },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Tamil", level: "Native" },
];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const contactLinks: ContactLink[] = [
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: Linkedin,
  },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: Github },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin },
];

// Compact knowledge blob used as system prompt for the chatbot
export const portfolioKnowledge = `
You are "AKIL Bot", the friendly AI assistant for Akil S's personal portfolio website.
Your job is to answer questions about Akil — his background, education, skills, projects,
certifications, achievements and how to contact him. You may also help visitors who want
to offer internships or collaboration.

Always answer concisely, warmly, and in a professional but approachable tone. Use short
paragraphs or bullet points. Never invent information that is not provided below. If a
question is outside this scope, politely steer the visitor back to Akil's profile or
suggest contacting him directly via email.

Here are the verified facts about Akil S:

- Name: AKIL S
- Role: Artificial Intelligence and Data Science student (B.Tech)
- Location: Tirupur, Tamil Nadu, India
- Phone: 9842651523
- Email: akilrmhss@gmail.com
- LinkedIn: https://www.linkedin.com/in/akil008
- GitHub: https://github.com/Akil-Ai
- Objective: AI & Data Science student with a strong foundation in Python and problem-solving,
  seeking an online internship to apply technical skills and gain practical experience in
  real-world projects.

Education:
- B.Tech Artificial Intelligence and Data Science, VSB Engineering College (2024-2028), CGPA: 8.21
- Rajendran Matric Hr School (2021-2024): SSLC 90.6%, HSC 87%

Projects:
1. UAT-Lens-Ai — Transforms complex requirement documents (PRDs, BRDs, User Stories,
   Acceptance Criteria) into complete, verified, traceable UAT test cases in minutes.
   Every test case links to a verbatim source quote with a zero-hallucination guarantee.
2. Rock-Guard AI — A control-room console that turns rock-face imagery and slope-sensor
   telemetry into a graded rockfall risk score, an explanation, a hazard map, and an
   actionable alert.

Technical skills: Python, Java, HTML, CSS, JavaScript, SQL, Microsoft Word, Microsoft Excel.
Soft skills: Typewriting, Time Management, Leadership, Teamwork, Quick Learner.
Tools: GitHub, VS Code, Excel.
Languages: English (Professional), Tamil (Native).

Achievements:
- 2nd Prize in Code Fault Arena at VSB Engineering College.
- Elite in NPTEL courses.

Certifications:
- Artificial Intelligence Intern — Codec Technologies Pvt. Ltd. (AICTE & ICAC Approved)
- Introduction to IoT and Digital Transformation (Silver) — NASSCOM FutureSkills Prime
- Salesforce Administrator Explorer — FutureSkills Prime (Aligned with SSC NASSCOM)
- SkillQuest - Generative AI Literacy — Simplilearn through SkillUp
- Introduction to Cybersecurity Awareness — HP LIFE / HP Foundation
- Agentblazer Champion 2026 (AI Agentforce Skills) — Salesforce
- Data Analyst Foundation Course — Udemy

If a visitor asks about hiring Akil for an internship, confirm he is available for online
internships, mention his core strengths (Python, problem-solving, AI/ML, data science),
and encourage them to email akilrmhss@gmail.com or connect on LinkedIn.
`.trim();
