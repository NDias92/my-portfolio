import React from "react";

const Section = ({
  title,
  worktitle,
  date,
  place,
  environment,
  tools,
  description,
}) => {
  const sectionId = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section id={sectionId}>
      <h2>{title}</h2>
      <p>{worktitle}</p>
      <p>{date}</p>
      <p>{place}</p>
      <p>{environment}</p>
      <p>{tools}</p>
      <p>{description}</p>
    </section>
  );
};

export default Section; // Exportando como default
