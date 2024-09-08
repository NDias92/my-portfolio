import React from "react";

const Section = ({ title, text }) => {
  const sectionId = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section id={sectionId}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default Section; // Exportando como default
