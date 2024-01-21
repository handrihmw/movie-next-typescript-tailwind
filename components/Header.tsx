import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 text-sm font-medium text-white bg-opacity-75 backdrop-blur-lg backdrop-filter">
        <div className="flex items-center justify-between gap-3 px-4 h-16 max-w-screen-xl mx-auto">
          <nav className="hidden sm:flex sm:items-center sm:gap-4 lg:gap-8">
            <Link href="/" className="font-base">
              Home
            </Link>
            <Link
              href="/movies/popular"
              className="font-base"
              aria-current="page"
            >
              Popular
            </Link>
            <Link href="/movies/top-rated" className="font-base">
              Top Rated
            </Link>
            <Link href="/movies/upcoming" className="font-base">
              Upcoming
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          <div className="max-w-lg">
            <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-transparent overflow-hidden">
              <div className="grid place-items-center h-full w-10 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="peer bg-transparent h-full w-full outline-none font-extralight text-sm text-gray-300 pl-4"
                type="text"
                id="search"
                placeholder="Search something..."
              />
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-8">
            <Link
              href="https://github.com/handrihmw/movie-next-typescript-tailwind"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>{" "}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          </div>
          <button
            aria-label="Toggle mobile menu"
            className="inline-block rounded-xl bg-gray-800/75 p-2.5 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
