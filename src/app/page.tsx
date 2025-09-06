import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="animate-fade-in-left">
          <p className="text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400 font-medium">Hello, I&apos;m</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight sky-gradient-text">
            LEELA MANI KUMAR
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-prose leading-relaxed">
          Hi, I&apos;m Leela Mani Kumar, a recent Computer Science and Engineering graduate with a strong foundation in Artificial Intelligence and Web Development.

I have hands-on experience working with:

MERN Stack (MongoDB, Express, React, Node.js)

Java Spring Boot for backend development

AI-powered solutions, including Large Language Models (LLMs), agentic AI systems, and building Retrieval-Augmented Generation (RAG) applications

My passion lies in creating intelligent, scalable, and user-friendly applications by combining the power of AI with modern web technologies. I enjoy solving complex problems, exploring new tools, and continuously learning to stay ahead in the fast-evolving tech landscape.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-xl sky-gradient text-white px-6 py-3 text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 animate-glow"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/leelamanikumar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl border-2 border-sky-200 dark:border-sky-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-slate-700 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover-lift"
            >
              GitHub
            </a>
            <a
              href="mailto:lmkleela1@gmail.com"
              className="inline-flex items-center rounded-xl border-2 border-sky-200 dark:border-sky-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-slate-700 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover-lift"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end animate-fade-in-right">
          <div className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-4 ring-sky-200 dark:ring-sky-800 shadow-2xl animate-float">
            <Image src="/profile.jpg" alt="LEELA MANI KUMAR" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 pb-16 animate-fade-in-up">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sky-gradient-text">Contact & Links</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a 
              href="mailto:lmkleela1@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl border border-sky-200/50 dark:border-sky-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-sky-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Email</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">lmkleela1@gmail.com</div>
              </div>
            </a>

            <a 
              href="tel:+919381945987"
              className="flex items-center gap-3 p-4 rounded-xl border border-sky-200/50 dark:border-sky-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-sky-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Phone</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">+91 9381945987</div>
              </div>
            </a>

            <a 
              href="https://drive.google.com/file/d/1aHvFz-JelvyyM7prpWfIOzMA2IBDT1Ci/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-sky-200/50 dark:border-sky-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-sky-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Resume</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">View My Resume</div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/leela-mani-kumar-y-866450267/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-sky-200/50 dark:border-sky-800/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-sky-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">LinkedIn</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">leela-mani-kumar-y-866450267</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
