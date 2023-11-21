import Link from "next/link";

const Artists = () => {
  const artistIds = [
    "06HL4z0CvFAxyc27GXpf02",
    "04HqRx07Bv9gh7rsrMTqs7",
    "2OIWxN9xUhgUHkeUCWCaNs",
    "054fVwphDX8QB8Pm7IjRcL",
    "1AdKbbV5v6ifuJertEjNeK",
    "6M2wZ9GZgrQXHCFfjv46we",
    "0NRMzT05nsc8mTm4iUvuHY",
    "3TVXtAsR1Inumwj472S9r4",
    "5cj0lLjcoR7YOSnhnX0Po5",
    "0NyrvUybTePmsuED5vZi4G",
  ];
  return (
    <ul className="w-[100px] flex flex-col gap-2">
      {artistIds.map((id) => (
        <Link key={id} href={`artists/${id}`}>
          {id}
        </Link>
      ))}
    </ul>
  );
};

export default Artists;
