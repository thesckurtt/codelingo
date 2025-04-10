import React from "react";

const ButtonDuoSuccess = ({ id, tag, text, classes, link = null }) => {
  const Tag = tag;
  const isLink = tag === "a";
  return (
    <Tag
      {...(id ? { id } : {})}
      {...(isLink ? { href: link || "#" } : {})}
      className={classes}
    >
      {text}
    </Tag>
  );
};

export default ButtonDuoSuccess;
