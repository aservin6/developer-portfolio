import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNpm,
  SiGit,
} from "react-icons/si";

const About = () => {
  return (
    <div className="mx-auto border-l border-zinc-900 dark:border-zinc-100 pl-4 mb-16 w-full max-w-3xl">
      <h2 className="text-2xl text-rose-700 dark:text-sky-300 font-bold underline underline-offset-4 decoration-4 mb-3">
        About
      </h2>
      <p className="text-base font-bold mb-6 md:text-lg">
        I wrote my first line of HTML and CSS in an Intro to Web Development
        class in my junior year of high school, but it wasn't until November
        2021 that I decided to fully commit to being a Front-End developer. I started from square one, relearning HTML and haven't stopped since. Now I'm able to build front-end applications using industry standards like React and TailwindCSS.
      </p>
      <h3 className="text-base font-bold md:text-lg mb-5">
        The technologies I use regularly:
      </h3>
      <ul className="grid grid-cols-2 gap-y-3 md:gap-y-5 md:text-lg md:grid-cols-3">
        <li className="flex items-center gap-2">
          <SiReact className="h-5 w-5 md:h-6 md:w-6 text-[#61dafb]" />
          React
        </li>
        <li className="flex items-center gap-2">
          <SiJavascript className="h-5 w-5 md:h-6 md:w-6 text-[#fcdc00]" />
          Javascript (ES6+)
        </li>
        <li className="flex items-center gap-2">
          <SiTailwindcss className="h-5 w-5 md:h-6 md:w-6 text-[#0ea5e9]" />
          TailwindCSS
        </li>
        <li className="flex items-center gap-2">
          <SiVite className="h-5 w-5 md:h-6 md:w-6 text-[#646cff]" />
          Vite
        </li>
        <li className="flex items-center gap-2">
          <SiNpm className="h-5 w-5 md:h-6 md:w-6 text-[#c12127]" />
          NPM
        </li>
        <li className="flex items-center gap-2">
          <SiGit className="h-5 w-5 md:h-6 md:w-6 text-[#f14e32]" />
          Git
        </li>
      </ul>
    </div>
  );
};

export default About;
