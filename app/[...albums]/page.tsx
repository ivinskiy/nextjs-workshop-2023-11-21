import Link from "next/link";
import Image from "next/image";
const Albums = async ({ params }: { params: { albums: string[] } }) => {
  const albumIds = [
    "1fnJ7k0bllNfL1kVdNVW1A",
    "4aawyAB9vmqN3uQ7FjRGTy",
    "51Pbz9gnabh4ouprPLUx29",
    "1LU8qHSAXrCmTsn9J6u8Ct",
  ];
  if (params.albums.length === 1) {
    return (
      <ul className="w-[100px] flex flex-col gap-2">
        {albumIds.map((id) => (
          <Link key={id} href={`artists/${id}`}>
            {id}
          </Link>
        ))}
      </ul>
    );
  }
  if (params.albums.length === 2) {
    const albumRes = await fetch(
      `https://api.spotify.com/v1/albums/${params.albums[1]}`,
      {
        headers: {
          Authorization:
            "Bearer BQCaNe31P2RG9HMYjuTCXm_Hm0c74hTRqQV-bU9hqOWxUtLfo9bC2hkK4mvnlLaWUW1wODCrtmwsjU_JkbdduODDw_FFLrmViPFWuiPGIMsDq3_Z6hM",
        },
      }
    );
    const data = await albumRes.json();
    return (
      <>
        <h1>{data.name}</h1>
        <Image
          alt={data.name}
          src={data.images[0].url}
          width={data.images[0].width}
          height={data.images[0].height}
        />
      </>
    );
  }
  if (params.albums.length === 3) {
    const tracksRes = await fetch(
      `https://api.spotify.com/v1/albums/${params.albums[1]}/tracks`,
      {
        headers: {
          Authorization:
            "Bearer BQCaNe31P2RG9HMYjuTCXm_Hm0c74hTRqQV-bU9hqOWxUtLfo9bC2hkK4mvnlLaWUW1wODCrtmwsjU_JkbdduODDw_FFLrmViPFWuiPGIMsDq3_Z6hM",
        },
      }
    );
    const tracksData = await tracksRes.json();
    return (
      <ul>
        {tracksData.items.map((track) => (
          <p key={track.name}>{track.name}</p>
        ))}
      </ul>
    );
  }
};

export default Albums;
