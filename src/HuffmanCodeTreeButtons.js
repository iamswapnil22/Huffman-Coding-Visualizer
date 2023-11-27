import React, { useContext } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { HuffmanCodeVariationContext } from "./HuffmanCodeVariationContext";

function HuffmanCodeTreeButtons(props) {
  const { huffmanVariation, setHuffmanVariation } = useContext(
    HuffmanCodeVariationContext
  );

  const toggleButtons = (e) => {
    setHuffmanVariation(e.target.value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={huffmanVariation}
      exclusive
      onChange={toggleButtons}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center", // Center the ToggleButton
      }}
    >
      <ToggleButton
        value="Huffman Coding"
        sx={{
          width: "50%",
        }}
      >
        Huffman Coding
      </ToggleButton>
    </ToggleButtonGroup>
  );
  
}

export default HuffmanCodeTreeButtons;
