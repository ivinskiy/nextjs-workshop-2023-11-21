import Image from "next/image";

export default async function Artist({
  params,
}: {
  params: { artistId: string };
}) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${params.artistId}`,
    {
      headers: {
        Authorization:
          "Bearer BQCaNe31P2RG9HMYjuTCXm_Hm0c74hTRqQV-bU9hqOWxUtLfo9bC2hkK4mvnlLaWUW1wODCrtmwsjU_JkbdduODDw_FFLrmViPFWuiPGIMsDq3_Z6hM",
      },
    }
  );
  const data = await res.json();
  return (
    <main>
      <h1>{data.name}</h1>
      <p>{data.type}</p>
      <Image
        alt={data.name}
        src={data.images[0].url}
        width={data.images[0].width}
        height={data.images[0].height}
      />
    </main>
  );
}