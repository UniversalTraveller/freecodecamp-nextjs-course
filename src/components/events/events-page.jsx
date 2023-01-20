import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((event) => (
        <Link key={event.id} className="card" href={`/events/${event.id}`}>
          <Image src={event.image} alt={event.title} width={350} height={350} />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
