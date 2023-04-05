import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="py-3 text-3xl">Links:</h1>
      <ul className="flex gap-6 pb-4">
        <li className="">
          <Link
            className="flex items-center justify-center gap-2 rounded-full border border-transparent bg-accent-2/25 px-4 py-2 text-xl  transition-colors hover:border-accent-5 dark:hover:border-accent-3"
            href={"https://github.com/ogdakke"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-accent-5 dark:fill-accent-3"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </Link>
        </li>
        <li className="flex">
          <Link
            className="flex items-center justify-center gap-2 rounded-full border border-transparent bg-accent-2/25 px-4 py-2 text-xl  transition-colors hover:border-accent-5 dark:hover:border-accent-3"
            href={"mailto:contactdew@proton.me"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 -1 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-accent-5 dark:fill-accent-3"
                d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
              />
              <path
                className="fill-accent-5 dark:fill-accent-3"
                d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
              />
            </svg>
            Email
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Links;
