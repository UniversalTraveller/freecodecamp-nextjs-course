import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryEvent = ({ data, pageName }) => {
  return (
    <div className="category_events">
      <h1>Events in {pageName}</h1>

      <div className="content">
        {data.map((event) => (
          <Link
            key={event.id}
            className="card"
            href={`/events/${event.city}/${event.id}`}
          >
            <Image
              width={300}
              height={200}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryEvent;
