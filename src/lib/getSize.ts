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
  viewport: number,
  description: number | null | undefined
) {
  if (description) {
    if (viewport + 800 > distanceFromTop) {
      return 1;
    } else if (distanceFromTop > viewport + 800 + description) {
      return 1.15;
    } else {
      return (1 + (distanceFromTop - viewport - 800) / 10000).toFixed(2);
    }
  }
}
export function getTranslateY(
  distanceFromTop: number,
  viewport: number,
  speed: number
) {
  return (distanceFromTop - viewport - 800) / speed;
}
