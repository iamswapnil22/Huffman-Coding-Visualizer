import React from "react";
import { Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./ContactInfo.css";

function ContactInfo() {
  return (
    <Stack direction="row" justifyContent="space-evenly" alignItems="center">
      <Typography variant="subtitle1">
        <a
          id="github-link"
          href="https://github.com/iamswapnil22/Huffman-Coding-Visualizer"
        >
          Source Code <GitHubIcon fontSize="small" />
        </a>
      </Typography>
      <Typography variant="overline">
        <a id="personal-page-link" href="https://swappy-web.netlify.app/">
          Made By Group 15
        </a>
      </Typography>
    </Stack>
  );
}

export default ContactInfo;
