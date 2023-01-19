import Link from "next/link";

export const homePage = () => {
  <main>
    {data.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`}>
        <Image alt={ev.title} src={ev.image} width={200} height={200} />
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
      </Link>
    ))}
  </main>;
};
