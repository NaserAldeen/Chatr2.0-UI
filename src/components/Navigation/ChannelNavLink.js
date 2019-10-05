// If a file/component is not used anymore, please delete it

import React from "react";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const ChannelNavLink = ({ channel }) => {
  return (
    <li
      className="nav-item"
      data-toggle="tooltip"
      data-placement="right"
      title={channel.name}
    >
      <NavLink className="nav-link" to={`/channel/${channel.id}`}>
        <FontAwesomeIcon icon={faHashtag} />

        <span className="nav-link-text"> {channel.name}</span>
      </NavLink>
    </li>
  );
};

export default ChannelNavLink;
