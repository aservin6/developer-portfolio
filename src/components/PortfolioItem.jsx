import { BsGlobe, BsCode } from "react-icons/bs";

const PortfolioItem = ({ title, image, stack, link, repoLink }) => {
  return (
    <div className="bg-zinc-900 dark:bg-zinc-100 p-0.5 rounded-md overflow-hidden">
      <a href={link} target="_blank">
        <img
          src={image}
          className="w-full h-40 md:h-52 object-cover cursor-pointer rounded-t-[4px]"
          alt="project"
        />
      </a>
      <div className="w-full px-4 pt-4 pb-2 bg-zinc-100 dark:bg-zinc-900 rounded-b-[4px]">
        <h2 className="text-lg md:text-xl text-rose-700 dark:text-sky-300 mb-2 md:mb-3 font-semibold">
          {title}
        </h2>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <div className="flex items-center gap-4 text-sm md:text-base dark:text-white mt-4">
          <a
            href={link}
            target="_blank"
            className="grid grid-flow-col-dense gap-2 p-1 font-semibold rounded-md hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-[background] duration-300"
          >
            <BsGlobe className="w-4 h-4 md:w-5 md:h-5" />
            <p>Site</p>
          </a>
          <a
            href={repoLink}
            target="_blank"
            className="grid grid-flow-col-dense gap-2 p-1 font-semibold rounded-md hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-[background] duration-300"
          >
            <BsCode className="w-4 h-4 md:w-5 md:h-5" />
            <p>Repo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
