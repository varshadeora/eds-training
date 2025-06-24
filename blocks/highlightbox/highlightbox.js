// export default function decorate(block) {
//   const message = document.createElement('p');
//   message.textContent = 'This is a JavaScript message.';
//   block.append(message);
// }

export default function decorate(block) {
  const icon = document.createElement('span');
  icon.className = 'icon icon-cloud-rain';
  block.prepend(icon);
}
