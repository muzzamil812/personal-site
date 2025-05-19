"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import UpArrow from "./ui/upArrow";

const jobPositions = [
  {
    timeline: "Oct 2023 — Present",
    currentPosition: "Senior Software Engineer",
    place: "Nayatel",
    url: "http://www.nayatel.com",
    previousPositions: ["Junior Software Engineer", "Software Engineer"],
    description:
      "Senior Software Engineer at Nayatel, building scalable full-stack solutions with a focus on performance, clean architecture, and great user experiences. Skilled in React, Node.js, and UI/UX design, with a strong track record of team leadership and continuous growth from junior to senior roles.",
    skills: [
      "UI/UX Design",
      "React",
      "Javascript",
      "Node",
      "Software Architecture",
      "Team Leadership",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-8 lg:mt-8">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <a className="cursor-pointer group/link" href={job.url} target="_blank">
            <Card
              key={index}
              className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 text-white hover:text-[hsl(var(--primary))]"
            >
              <CardHeader className="h-full w-full p-0">
                <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                  {job.timeline}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col p-0">
                <p className="text-inherit font-bold">
                  {job.currentPosition} • {job.place}
                  <UpArrow />
                </p>
                {job.previousPositions.map((position, index) => (
                  <p key={index} className="text-slate-400 text-sm font-bold">
                    {position}
                  </p>
                ))}
                <CardDescription className="py-3 text-muted-foreground">
                  {job.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:rajamuzzamil9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
