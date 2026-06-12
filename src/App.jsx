import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-paper bg-graph-paper bg-grid-pattern font-sans relative">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 md:px-12">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <EducationSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <AchievementsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// --- COMPONENTS ---

function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-paper/80 backdrop-blur-md border-b border-ink/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif font-bold text-xl tracking-tight">Anish.</div>
        <div className="hidden md:flex gap-6 font-mono text-sm">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
              // {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// function HeroSection() {
//   const [textIndex, setTextIndex] = useState(0);
//   const titles = [
//     "Building AI Applications",
//     "Exploring Data Science",
//     "Solving Real-World Problems",
//     "Learning Every Day"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prev) => (prev + 1) % titles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="min-h-screen flex flex-col justify-center pt-20 relative">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
//           <motion.div variants={fadeUp} className="inline-block border border-ink px-3 py-1 font-mono text-xs uppercase tracking-widest bg-ink text-paper">
//             Field Note // 01
//           </motion.div>
//           <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tighter text-ink">
//             ANISH <br /> KUMAR SAH
//           </motion.h1>
//           <motion.div variants={fadeUp} className="border-l-4 border-accent pl-4">
//             <h2 className="text-xl font-bold bg-accent/20 inline-block px-2">AI & Data Science Student</h2>
//             <div className="font-mono text-sm mt-2 h-6 flex items-center text-ink-light">
//               <span className="text-accent mr-2">&gt;</span> {titles[textIndex]}
//               <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-1 w-2 h-4 bg-ink inline-block" />
//             </div>
//           </motion.div>
          
//           <motion.div variants={fadeUp} className="flex gap-4 pt-4">
//             <SocialButton label="[ GitHub ]" href="https://github.com/AquaA1" />
//             <SocialButton label="[ LinkedIn ]" href="https://www.linkedin.com/in/anish-k-s-401222368/" />
//             <SocialButton label="[ Contact ]" href="mailto:anishk.s149@gmail.com" />
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.8 }}
//           className="relative h-[400px] border-2 border-ink shadow-industrial bg-white p-4 flex flex-col items-center justify-center"
//         >
//           <div className="absolute top-2 left-2 flex gap-2">
//             <div className="w-2 h-2 rounded-full bg-ink/30"></div>
//             <div className="w-2 h-2 rounded-full bg-ink/30"></div>
//           </div>
//           <div className="text-ink/20 mb-4 text-6xl font-serif">( * )</div>
//           <p className="font-mono text-xs text-center text-ink/50 uppercase tracking-widest">
//             Fig 1.0 <br/> The Workspace <br/> (ThinkPad, Notebook, Coffee)
//           </p>
//           <div className="absolute bottom-4 right-4 text-[10px] font-mono border border-ink/20 px-2 py-1">
//             Status: Maker
//           </div>
//         </motion.div>
//       </div>
      
//       <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
//         <span className="font-mono text-[10px] uppercase tracking-widest mb-2">Scroll</span>
//         <span className="text-xl font-mono">↓</span>
//       </motion.div>
//     </section>
//   );
// }
function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Building AI Applications",
    "Exploring Data Science",
    "Solving Real-World Problems",
    "Learning Every Day"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
          <motion.div variants={fadeUp} className="inline-block border border-ink px-3 py-1 font-mono text-xs uppercase tracking-widest bg-ink text-paper">
            Field Note // 01
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tighter text-ink">
            ANISH <br /> KUMAR SAH
          </motion.h1>
          <motion.div variants={fadeUp} className="border-l-4 border-accent pl-4">
            <h2 className="text-xl font-bold bg-accent/20 inline-block px-2">AI & Data Science Student</h2>
            <div className="font-mono text-sm mt-2 h-6 flex items-center text-ink-light">
              <span className="text-accent mr-2">&gt;</span> {titles[textIndex]}
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-1 w-2 h-4 bg-ink inline-block" />
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex gap-4 pt-4">
            <SocialButton label="[ GitHub ]" href="https://github.com/AquaA1" />
            <SocialButton label="[ LinkedIn ]" href="https://www.linkedin.com/in/anish-k-s-401222368/" />
            <SocialButton label="[ Contact ]" href="mailto:anishk.s149@gmail.com" />
          </motion.div>
        </motion.div>

        {/* THIS IS THE UPDATED IMAGE BLOCK */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative h-[400px] border-2 border-ink shadow-industrial bg-white p-3 flex flex-col items-center justify-center group"
        >
          <div className="absolute top-5 left-5 flex gap-2 z-10">
            <div className="w-2 h-2 rounded-full bg-white border border-ink shadow-sm"></div>
            <div className="w-2 h-2 rounded-full bg-white border border-ink shadow-sm"></div>
          </div>

          <div className="w-full h-full border border-ink/20 overflow-hidden relative bg-ink/5">
            <img 
              src="/hero-image.png" 
              alt="Anish Workspace"
              className="w-full h-full object-cover sepia-[.20] contrast-125 group-hover:sepia-0 transition-all duration-700" 
            />
          </div>

          <div className="absolute bottom-5 right-5 text-[10px] font-mono border-2 border-ink bg-white px-2 py-1 z-10 shadow-[2px_2px_0_0_rgba(26,26,26,1)]">
            Fig 1.0: Maker Status
          </div>
        </motion.div>
        {/* END OF UPDATED IMAGE BLOCK */}

      </div>
      
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-mono text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <span className="text-xl font-mono">↓</span>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <SectionHeader title="About Me" note="Observation Log" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 font-serif text-lg leading-relaxed text-ink-light">
          <p><span className="text-3xl float-left mr-2 font-bold text-ink">I</span> am a curious and passionate AI & Data Science student fascinated by the rapidly evolving world of artificial intelligence.</p>
          <p>I enjoy building real-world projects that can positively impact people's lives. My interests include artificial intelligence, machine learning, software development, data science, and problem solving.</p>
          <p>I continuously explore new technologies, strengthen my programming skills, and work on practical projects that help me learn through building.</p>
          <p className="font-medium text-ink bg-accent/10 p-2 border-l-2 border-accent inline-block">
            My long-term goal is to develop intelligent systems, create innovative AI solutions, and make data science more understandable and accessible.
          </p>
        </div>
        <div className="border-2 border-ink p-6 shadow-industrial bg-white/50 backdrop-blur-sm relative">
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-paper border-2 border-ink rounded-full flex items-center justify-center font-mono text-xs shadow-industrial">⌘</div>
          <h3 className="font-mono text-sm font-bold uppercase border-b border-ink/20 pb-2 mb-4">Specs</h3>
          <ul className="font-mono text-xs space-y-3">
            <li className="flex justify-between"><span>Location:</span> <b>India</b></li>
            <li className="flex justify-between"><span>Role:</span> <b>AI & DS Student</b></li>
            <li className="flex justify-between"><span>Focus:</span> <b>AI Solutions</b></li>
            <li className="mt-6 pt-4 border-t border-ink/20 text-ink/60">
              "Consistency is the real superpower."
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="py-20">
      <SectionHeader title="Academic Record" note="Institution Data" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-l-2 border-ink ml-4 pl-8 relative">
        <div className="absolute w-4 h-4 bg-accent border-2 border-ink rounded-full -left-[9px] top-0 shadow-industrial" />
        <h3 className="font-serif text-2xl font-bold">REVA University</h3>
        <p className="font-mono text-sm mt-1 mb-4 bg-ink text-paper inline-block px-2">B.Tech in Artificial Intelligence and Data Science</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatBox label="Current Status" value="1st Year" />
          <StatBox label="CGPA" value="9.3" />
          <StatBox label="Graduation" value="2029" />
        </div>
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  const categories = [
    { title: "Programming", icon: ">_", skills: ["Python", "Java", "C"] },
    { title: "Data Science", icon: "{ }", skills: ["Pandas", "NumPy", "Machine Learning"] },
    { title: "Web Dev", icon: "</>", skills: ["HTML", "CSS", "JavaScript Basics"] },
    { title: "Tools & Core", icon: "[@]", skills: ["Git / GitHub", "Linux", "VS Code", "Data Structures & Algorithms"] },
  ];

  return (
    <section id="skills" className="py-20">
      <SectionHeader title="Knowledge Shelf" note="Technical Stack" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 }}}}
            className="border-2 border-ink bg-white/70 backdrop-blur-md p-6 shadow-industrial"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-ink/20 pb-2">
              <span className="font-mono font-bold">{cat.icon}</span>
              <h3 className="font-mono font-bold uppercase text-sm">{cat.title}</h3>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              {cat.skills.map(skill => (
                <li key={skill} className="flex items-center before:content-['>'] before:mr-2 before:text-accent">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "Chef AI",
      desc: "An AI-powered project utilizing the Gemini API to assist users with cooking-related tasks and generate intelligent recipe recommendations.",
      tags: ["Python", "NLP", "Gemini API", "AI"],
      repo: "https://github.com/AquaA1/Chef-Ai"
    },
    {
      id: "02",
      title: "Test Banking System",
      desc: "A banking system simulation project demonstrating object-oriented programming concepts and financial transaction management.",
      tags: ["Java", "OOP", "System Design"],
      repo: "https://github.com/AquaA1/TestBankingSys"
    },
    {
      id: "03",
      title: "Library Management",
      desc: "A structural system built for tracking books, managing user registries, and handling library operations efficiently.",
      tags: ["Java", "Database", "Management"],
      repo: "https://github.com/AquaA1/Libraray_management"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <SectionHeader title="Exhibits" note="Applied Research" />
      <div className="space-y-16">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.id}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="group relative grid md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-7 h-64 md:h-80 bg-ink border-2 border-ink relative overflow-hidden shadow-industrial">
              <div className="absolute inset-0 bg-blueprint opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-paper/30 text-6xl">#{proj.id}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 font-mono text-[10px] text-white">
                Fig {proj.id}: Architecture Draft
              </div>
            </div>

            <div className="md:col-span-5 space-y-4 md:-ml-12 z-10 bg-paper/90 backdrop-blur-md p-8 border-2 border-ink shadow-industrial">
              <div className="font-mono text-xs text-accent uppercase tracking-widest">Case Study // {proj.id}</div>
              <h3 className="font-serif text-3xl font-bold">{proj.title}</h3>
              <p className="font-sans text-ink-light text-sm leading-relaxed border-l-2 border-ink/20 pl-4">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-1 border border-ink/30 bg-white">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a href={proj.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-sm font-bold border-b border-ink hover:text-accent transition-colors">
                  View Source ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AchievementsSection() {
  const achievements = [
    "CGPA: 9.3 Maintained",
    "Artificial Intelligence & Data Science Student",
    "Active GitHub Developer",
    "Learning Data Structures & Algorithms",
    "Linux User & Open Source Enthusiast"
  ];

  return (
    <section className="py-20">
      <SectionHeader title="Milestones" note="Current Tracking" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap gap-4">
        {achievements.map((item, idx) => (
          <motion.div key={idx} variants={fadeUp} className="flex items-center gap-3 border-2 border-ink px-4 py-2 bg-white shadow-industrial">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-sm">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="border-4 border-ink p-8 md:p-12 shadow-[8px_8px_0_0_rgba(26,26,26,1)] bg-white relative">
        <div className="absolute top-0 right-0 bg-ink text-paper font-mono text-xs px-3 py-1">COMMUNICATION_LINK</div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4">Let's Build Something.</h2>
            <p className="font-mono text-sm text-ink-light mb-8">
              Open for discussions, project collaborations, and research inquiries. Drop a transmission below.
            </p>
            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:anishk.s149@gmail.com" className="flex items-center gap-4 hover:text-accent">
                [ @ ] anishk.s149@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/anish-k-s-401222368/" className="flex items-center gap-4 hover:text-accent">
                [ in ] LinkedIn Profile
              </a>
              <a href="https://github.com/AquaA1" className="flex items-center gap-4 hover:text-accent">
                [ {'>_'} ] GitHub Repository
              </a>
            </div>
          </div>
          <form className="space-y-4 font-mono">
            <input type="text" placeholder="Name" className="w-full bg-paper border-2 border-ink p-3 text-sm focus:outline-none focus:border-accent" />
            <input type="email" placeholder="Email" className="w-full bg-paper border-2 border-ink p-3 text-sm focus:outline-none focus:border-accent" />
            <textarea placeholder="Message" rows={4} className="w-full bg-paper border-2 border-ink p-3 text-sm focus:outline-none focus:border-accent resize-none"></textarea>
            <button className="bg-ink text-paper w-full py-3 hover:bg-accent transition-colors font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              Send Transmission ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink/20 py-8 text-center font-mono text-xs text-ink-light bg-paper/80 backdrop-blur-sm">
      <p>Designed and Developed by Anish Kumar Sah</p>
      <p className="mt-2 opacity-50">© {new Date().getFullYear()} — System Active</p>
    </footer>
  );
}

// --- UTILITY COMPONENTS ---

function Divider() {
  return <div className="h-[2px] w-full bg-ink/10 my-8"></div>;
}

function SectionHeader({ title, note }) {
  return (
    <div className="mb-12 flex items-end gap-4 border-b-2 border-ink pb-4">
      <h2 className="font-serif text-4xl font-bold">{title}</h2>
      <span className="font-mono text-xs text-accent uppercase tracking-widest hidden md:inline-block">[{note}]</span>
    </div>
  );
}

function SocialButton({ label, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-ink px-4 py-2 font-mono text-sm font-bold hover:bg-ink hover:text-paper transition-all shadow-industrial bg-white">
      {label}
    </a>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="border border-ink/30 p-4 bg-white/40 flex flex-col justify-between">
      <span className="font-mono text-[10px] uppercase text-ink-light tracking-wider">{label}</span>
      <span className="font-serif text-xl font-bold mt-2">{value}</span>
    </div>
  );
}