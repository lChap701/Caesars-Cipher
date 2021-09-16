function rot13(str) {
  let decoded = [];
  let rot = {
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
  };
  let chars = str.split("");

  for (let i = 0; i < chars.length; i++) {
    if (/\W|_/.test(chars[i])) {
      decoded.push(chars[i]);
    }

    decoded.push(rot[chars[i]]);
  }

  return decoded.join("");
}

// Should be "FREE CODE CAMP"
console.log(rot13("SERR PBQR PNZC"));
