const floodFill = (canvas, newColor, oldColor, startx, starty) => {
  if (
    startx < 0 ||
    starty < 0 ||
    startx >= canvas.length ||
    starty >= canvas[0].length
  ) {
    return canvas;
  }

  if (canvas[startx][starty] != oldColor) {
    return canvas;
  }
  canvas[startx][starty] = newColor;
  //above
  floodFill(canvas, newColor, oldColor, startx - 1, starty);
  //below
  floodFill(canvas, newColor, oldColor, startx + 1, starty);
  //right
  floodFill(canvas, newColor, oldColor, startx, starty + 1);
  //left
  floodFill(canvas, newColor, oldColor, startx, starty - 1);
  return canvas;
};
var canvas = [
  [3, 2, 3, 4, 3],
  [2, 3, 3, 4, 0],
  [7, 3, 3, 5, 3],
  [6, 5, 3, 4, 1],
  [1, 2, 3, 3, 3],
];

console.log(floodFill(canvas, 1, canvas[4][4], 4, 4));
