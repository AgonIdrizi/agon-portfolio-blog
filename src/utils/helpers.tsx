export const getDimensions = ele => {
  const {height} = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  }
}

export const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}