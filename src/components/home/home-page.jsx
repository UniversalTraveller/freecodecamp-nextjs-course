import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <main>
    {data.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`}>
        <Image alt={ev.title} src={ev.image} width={200} height={200} />
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
      </Link>
    ))}
  </main>
);
