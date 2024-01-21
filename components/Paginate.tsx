import Link from "next/link";
import { IPaginate } from "@/types/Movie";

const Paginate = ({ currentPage, totalPages, pageType }: IPaginate) => {
  return (
    <>
      <div className="flex justify-center gap-4 mt-6 mb-6">
        {currentPage > 1 && (
          <Link
            href={`/movies/${pageType}/?page=${Number(currentPage) - 1}`}
            className="bg-white bg-opacity-25 backdrop-blur-lg backdrop-filter flex items-center gap-2 text-white font-bold py-2 px-4 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Prev
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/movies/${pageType}/?page=${Number(currentPage) + 1}`}
            className="bg-white bg-opacity-25 backdrop-blur-lg backdrop-filter flex items-center gap-2 text-white font-bold py-2 px-4 rounded-md"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        )}
      </div>
    </>
  );
};

export default Paginate;
