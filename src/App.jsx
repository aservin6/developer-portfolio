import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import ThemeSwitch from "./components/ThemeSwitch";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-lightBgMobile dark:bg-darkBgMobile bg-fixed bg-no-repeat bg-[length:100%_100%] text-zinc-900 dark:text-zinc-300 min-h-screen font-josefin pt-4 md:bg-lightBgDesktop dark:md:bg-darkBgDesktop bg-zinc-900">
      <div className="max-w-5xl w-9/12 mx-auto">
        <ThemeSwitch />
        <Intro />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
