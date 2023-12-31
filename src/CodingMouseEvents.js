import { select} from "d3";

const mouseEnterAnimatePath = (character, huffmanTreePaths) => {
  // Extract the node paths, branch paths, and leaf number
  const characterPathNodes = huffmanTreePaths[character]["nodePath"],
    branchPathNodes = huffmanTreePaths[character]["branchPath"],
    leafNumber = huffmanTreePaths[character]["leafNumber"];

  // Select nodes, branch, leaf to the character"s leaf
  const svgG = select("svg>g>g");

  const circleNodes = svgG
      .selectAll("circle.node")
      .filter((_, i) => characterPathNodes.includes(i)),
    pathBranches = svgG
      .selectAll("line")
      .filter((_, i) => branchPathNodes.includes(i)),
    leafNode = svgG
      .selectAll("rect.node")
      .filter((_, i) => i === leafNumber);

  const maxPathDepth = pathBranches.nodes().length;

  // Add transitions to those nodes
  circleNodes
    .transition()
    .duration(750)
    .delay((d) => 400 * d.depth)
    .attr("fill", "rgb(238, 174, 202)")
    .attr("r", 25);

  pathBranches
    .transition()
    .duration(750)
    .delay((d) => 400 * d.source.depth + 50)
    .attr("stroke", "rgb(209, 120, 159)")
    .attr("stroke-width", 3);

  leafNode
    .transition()
    .duration(750)
    .delay((400 * maxPathDepth) + 50)
    .attr("fill", "rgb(255, 233, 243)");
}

const mouseEnter = (e, huffmanTreePaths) => {
  // Get the id of the element that is hovered over
  const id = e.target.id.split("-")[2];

  // Add a class to the elements
  document
    .getElementById(`ascii-coding-${id}`)
    .classList.add("coding-span-hover");
  document
    .getElementById(`huffman-coding-${id}`)
    .classList.add("coding-span-hover");
  document
    .getElementById(`text-coding-${id}`)
    .classList.add("coding-span-hover");
  
  // Extract which character the mouse is over
  const character = document.getElementById(`text-coding-${id}`).innerText.trim().split(`'`)[1];
  
  // Animate a path to the character leaf
  mouseEnterAnimatePath(character === "Space" ? " " : character, huffmanTreePaths);
};


const mouseLeaveAnimatePath = (character, huffmanTreePaths) => {
  // Extract the node paths, branch paths, and leaf number
  const characterPathNodes = huffmanTreePaths[character]["nodePath"],
    branchPathNodes = huffmanTreePaths[character]["branchPath"],
    leafNumber = huffmanTreePaths[character]["leafNumber"];
  
  // Select nodes, branch, leaf to the character"s leaf
  const svgG = select("svg>g>g");

  const circleNodes = svgG.selectAll("circle.node")
      .filter((_, i) => characterPathNodes.includes(i)),
    pathBranches = svgG.selectAll("line")
      .filter((_, i) => branchPathNodes.includes(i)),
    leafNode = svgG
      .selectAll("rect.node")
      .filter((_, i) => i === leafNumber);

  const maxCircleDepth = circleNodes.nodes().length,
    maxPathDepth = pathBranches.nodes().length;

  // Select the nodes, branch, and leaf and deanimate the path
  circleNodes
    .transition()
    .duration(750)
    .delay((d) => 400 * (maxCircleDepth - d.depth + 1))
    .attr("fill", "lightblue")
    .attr("r", 20);

  pathBranches
    .transition()
    .duration(750)
    .delay((d) => (400 * (maxPathDepth - d.source.depth)))
    .attr("stroke", "darkgray")
    .attr("stroke-width", 2);

  leafNode
    .transition()
    .duration(750)
    .attr("fill", "#edf4fb");
}

const mouseLeave = (e, huffmanTreePaths) => {
  // Get the id of the element that is hovered over
  const id = e.target.id.split("-")[2];

  // Remove a class to the elements
  document
    .getElementById(`ascii-coding-${id}`)
    .classList.remove("coding-span-hover");
  document
    .getElementById(`huffman-coding-${id}`)
    .classList.remove("coding-span-hover");
  document
    .getElementById(`text-coding-${id}`)
    .classList.remove("coding-span-hover");
  
  // Extract which character the mouse is leaving
  const character = document.getElementById(`text-coding-${id}`).innerText.trim().split(`'`)[1];

  // Animate a path from the character leaf to the root
  mouseLeaveAnimatePath(character === "Space" ? " " : character, huffmanTreePaths);
};

export { mouseEnter, mouseLeave };
