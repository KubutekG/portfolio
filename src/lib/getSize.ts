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
export function getScale(
  distanceFromTop: number,
  cutoff: number,
  range: number
) {
  if (
    distanceFromTop < cutoff ||
    +(((distanceFromTop / cutoff) * 7) / 8).toFixed(2) < 1
  ) {
    return 1;
  } else if (distanceFromTop > cutoff + range) {
    return 1.25;
  } else {
    return (((distanceFromTop / cutoff) * 7) / 8).toFixed(2);
  }
}
export function getTranslateY(
  distanceFromTop: number,
  speed: number
) {
  if (distanceFromTop/speed <= 0) {
    return 0;
  } else if (distanceFromTop/speed >= 40) {
    return 40
  } else {
    return distanceFromTop/speed
  }
}
