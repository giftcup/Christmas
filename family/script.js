let image = document.getElementById("mainImage");

const showImage = (node) => {
  image.setAttribute("src", node.getAttribute("src"));
};
