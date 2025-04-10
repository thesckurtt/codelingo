import React from "react";
import { Link } from "react-router-dom";

const ButtonDuoSuccess = ({ id, tag, text, classes, onClick = null, link = null }) => {
  const Tag = (!tag === 'reactLink' ? tag : Link);
  const isLinkA = tag === "a";
  const isLinkReact = tag === "reactLink";
  return (
    <Tag
      {...(id ? { id } : {})}
      {...(isLinkA ? { href: link || "#" } : {})}
      {...(isLinkReact ? { to: link || "#" } : {})}
      {...(onClick) ? {onClick: onClick}: {}}
      className={classes}
    >
      {text}
    </Tag>
  );
};

export default ButtonDuoSuccess;
