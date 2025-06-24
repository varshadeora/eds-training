export default function decorate(block) {
  block.innerHTML = `“${block.textContent}”`;
}
