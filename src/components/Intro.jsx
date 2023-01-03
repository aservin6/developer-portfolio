import { BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center my-8"
    >
      <div className="text-center">
        <h1 className="text-4xl dark:text-zinc-100 font-bold mb-1 md:mb-3 md:text-7xl">
          Alex Servin
        </h1>

        <p className="text-lg font-semibold mb-1 md:mb-2 md:text-2xl">
          Front-End Developer
        </p>
        <div className="flex items-center justify-center mb-2 md:mb-3 md:gap-3">
          <a
            className="p-2.5 rounded-lg hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-[background] duration-300"
            href="https://www.linkedin.com/in/servinalex/"
            target="_blank"
            aria-label="Link to my LinkedIn profile"
          >
            <BsLinkedin className="w-5 h-5 md:w-7 md:h-7" />
          </a>
          <a
            className="p-2.5 rounded-lg hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-[background] duration-300"
            href="https://github.com/aservin6"
            target="_blank"
            aria-label="Link to my Github profile"
            
          >
            <BsGithub className="w-5 h-5 md:w-7 md:h-7" />
          </a>
          <a
            className="p-2.5 rounded-lg hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-[background] duration-300"
            href="/AlejandroServin_Resume.pdf"
            aria-label="download resume"
            title="Download my resume"
            download
          >
            <BsDownload className="w-5 h-5 md:w-7 md:h-7" />
          </a>
        </div>
        <p className="text-base font-bold max-w-xl md:text-lg">
          I'm a web developer with a passion for{" "}
          <span className="text-rose-600 dark:text-sky-300">development</span>{" "}
          and <span className="text-rose-600 dark:text-sky-300">design</span>.
          The projects below have helped me exercise my abilities and prepare
          for my career in tech.
        </p>
      </div>
    </section>
  );
};

export default Intro;
