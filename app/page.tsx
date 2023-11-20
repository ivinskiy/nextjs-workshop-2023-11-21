import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="relative flex place-items-center flex-col gap-2">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Welcome to the NextJS workshop!
        </h2>
        <p>Use the links below to find information regarding Next.js!</p>
        <p>Auth-token: Bearer {"Hello"} </p>
        <p className="font-bold">Artist IDs for task 1 and 2:</p>
        <ul className="text-center">
          <li>06HL4z0CvFAxyc27GXpf02</li>
          <li>04HqRx07Bv9gh7rsrMTqs7</li>
          <li>2OIWxN9xUhgUHkeUCWCaNs</li>
          <li>054fVwphDX8QB8Pm7IjRcL</li>
          <li>1AdKbbV5v6ifuJertEjNeK</li>
          <li>6M2wZ9GZgrQXHCFfjv46we</li>
          <li>0NRMzT05nsc8mTm4iUvuHY</li>
          <li>3TVXtAsR1Inumwj472S9r4</li>
          <li>5cj0lLjcoR7YOSnhnX0Po5</li>
          <li>0NyrvUybTePmsuED5vZi4G</li>
        </ul>
        <p className="font-bold">
          Endpoint for Task 2: https://api.spotify.com/v1/artists/{"{id}"}
        </p>
        <p className="font-bold">
          Endpoint for Task 4: https://api.spotify.com/v1/artists/{"{id}"}
          /albums
        </p>
      </div>

      <div className="mb-32 flex justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
    </main>
  );
}
