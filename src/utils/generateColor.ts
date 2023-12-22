export const generateColor = (id: number) => {
  // making the base color darker and leaning towards a more bluish hue
  const baseColor = "rgb(243,101,158)";
  const red = +baseColor.slice(4, 7);
  const blue = +baseColor.slice(8, 11);
  const green = +baseColor.slice(12, 15);
  return `rgb(${red - 2 * id},${blue - id},${green - id})`;
};
