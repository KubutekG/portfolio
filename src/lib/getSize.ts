export function getWidth(
  distanceFromTop: number,
  width: number,
  cutoff: number
) {
  if (distanceFromTop <= cutoff) {
    return 100 - +(distanceFromTop * ((100 - width) / cutoff)).toFixed(0);
  } else {
    return width;
  }
}
export function getHeight(
  distanceFromTop: number,
  height: number,
  cutoff: number
) {
  if (distanceFromTop <= cutoff) {
    return 100 - +(distanceFromTop * ((100 - height) / cutoff)).toFixed(0);
  } else {
    return height;
  }
}
