import React from "react";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  const submitHandler = () => {};
  return (
    <div className="event_single_page">
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={submitHandler} className="email_registration">
        <label>Get registered for this event! </label>
        <input
          type="email"
          id="email"
          placeholder="Please enter our email here!"
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
