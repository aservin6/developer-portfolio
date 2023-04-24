import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNpm,
  SiGit,
  SiNextdotjs,
  SiVisualstudiocode,
} from "react-icons/si";

const About = () => {
  return (
    <div className="mx-auto border-l border-zinc-900 dark:border-zinc-100 pl-4 mb-16 w-full max-w-3xl">
      <h2 className="text-2xl text-rose-600 dark:text-sky-300 font-bold underline underline-offset-4 decoration-4 mb-3">
        About
      </h2>
      <p className="text-base font-bold mb-6 md:text-lg">
      As a self-taught front-end developer, I am driven by a passion for creating visually appealing and user-friendly websites. Through self-directed learning, online tutorials, and personal projects, I have honed my skills in HTML, CSS, and JavaScript. I have experience working with frameworks such as React, NextJS, and TailwindCSS, as well as tools such as Git, npm, and Vite.
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
          <SiNextdotjs className="h-5 w-5 md:h-6 md:w-6 dark:text-[#fff] text-[#000]" />
          NextJS
        </li>
        <li className="flex items-center gap-2">
          <SiTailwindcss className="h-5 w-5 md:h-6 md:w-6 text-[#0ea5e9]" />
          TailwindCSS
        </li>
        <li className="flex items-center gap-2">
          <SiJavascript className="h-5 w-5 md:h-6 md:w-6 text-[#fcdc00]" />
          Javascript (ES6+)
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
        
        <li className="flex items-center gap-2">
          <SiVisualstudiocode className="h-5 w-5 md:h-6 md:w-6 text-[#20A8F2]" />
          VSCode
        </li>
      </ul>
    </div>
  );
};

export default About;
