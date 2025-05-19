"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 scroll-mb-8 lg:mb-8">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I'm a full-stack problem solver with over 2 years who speaks fluent JavaScript, breathes APIs,
          and dreams in clean architecture. From scalable backend systems to pixel-perfect UIs,
          I build with performance, security, and user experience in mind.
          I love turning complex challenges into elegant code, and I’m always chasing the next big
          thing in tech. Let's build the future, one commit at a time.
        </p>
      </div>
    </section>
  );
}
