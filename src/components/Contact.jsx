const Contact = () => {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <div className="flex justify-center items-center border-l border-zinc-900 dark:border-zinc-100 pl-4 mb-10">
        <form action="https://getform.io/f/c287a040-25e2-4080-9ea5-050e4346aa45" method="POST" className="flex flex-col w-full">
          <h2 className="text-2xl text-rose-700 dark:text-sky-300 font-bold underline underline-offset-4 decoration-4 mb-3">
            Contact Me
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border border-zinc-900 dark:border-zinc-100 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border border-zinc-900 dark:border-zinc-100 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border border-zinc-900 dark:border-zinc-100 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-2 text-base font-medium rounded-md text-slate-100 dark:text-slate-900 bg-rose-700 dark:bg-sky-300 md:w-max"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
