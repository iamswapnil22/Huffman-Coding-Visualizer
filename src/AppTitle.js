import React from "react";
import { Typography } from "@mui/material";
import "./AppTitle.css";

function AppTitle() {
  return (
    <Typography id="app-title" variant="h4" component="h4">
      <a id="app-title-anchor" href="/" style={{ textTransform: 'uppercase', fontSize: '1em' }}>
      <strong>Huffman Code Visualizer</strong>
</a>

    </Typography>
  );
}

export default AppTitle;
