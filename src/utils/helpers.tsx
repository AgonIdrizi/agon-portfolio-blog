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
  const {offsetTop} = getDimensions(ele)
  window.scrollTo({
    top: offsetTop - 80,
    behavior: "smooth",
  })
}