import Image from "next/image";
import React from "react";

const Blockquote = ({
  description,
  image_url,
  author_name,
  author_location,
}) => {
  return (
    <blockquote
      className="testimonial"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <p>{description}</p>

      <div className="testimonial__author">
        <Image
          className="testimonial__avatar"
          src={image_url}
          alt={"Customer avatar"}
        />

        <div className="author__info">
          <span className="author__name">{author_name}</span>
          <span className="author__location">{author_location}</span>
        </div>
      </div>
    </blockquote>
  );
};

export default Blockquote;
