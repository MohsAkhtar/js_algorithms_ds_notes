// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// for while loop we stop above 1 to stop at 'stopper'
// otherwise it will run an infinite loop
// The stopper is to signify when we have searched all children of
// a level
function levelWidth(root) {
  const arr = [root, "stopper"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "stopper") {
      counters.push(0);
      arr.push("stopper");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
