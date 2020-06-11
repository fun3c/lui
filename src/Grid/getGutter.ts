const getGutter = (
  attrName: string,
  x: number,
  other: { [propName: string]: any },
  gutter?: number,
) => {
  gutter = gutter || 0;
  const style = {
    ...other.style,
    [`${attrName}Left`]: (gutter / 2) * x,
    [`${attrName}Right`]: (gutter / 2) * x,
  };

  return style;
};

export default getGutter;
