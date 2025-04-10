import React from "react";
import { Link } from "react-router-dom";

const ButtonDuoSuccess = ({ id, tag, text, classes, link = null }) => {
  const Tag = (!tag === 'reactLink' ? tag : Link);
  const isLinkA = tag === "a";
  const isLinkReact = tag === "reactLink";
  return (
    <Tag
      {...(id ? { id } : {})}
      {...(isLinkA ? { href: link || "#" } : {})}
      {...(isLinkReact ? { to: link || "#" } : {})}
      className={classes}
    >
      {text}
    </Tag>
  );
};

export default ButtonDuoSuccess;
