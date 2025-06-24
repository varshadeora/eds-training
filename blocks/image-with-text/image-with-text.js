export default function decorate(block) {
  // Try to find an <a> tag or a text node with the image URL or an <img> tag
  let imagePath = '';
  const link = block.querySelector('a');
  if (link) {
    imagePath = link.href;
  } else {
    const img = block.querySelector('img');
    if (img) {
      imagePath = img.src;
    }
  }

  // Create image element
  const imageContainer = document.createElement('img');
  imageContainer.classList.add('image-with-text');
  imageContainer.setAttribute('src', imagePath);
  imageContainer.setAttribute('alt', 'image-with-text');

  // Create text container
  const textContainer = document.createElement('p');
  textContainer.classList.add('image-text');
  textContainer.innerText = 'This is the testing content';
  textContainer.setAttribute('id', 'image-text');

  // Clear block and append new elements
  block.innerHTML = '';
  block.append(textContainer);
  block.append(imageContainer);
}
