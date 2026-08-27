export function setPengui(el, animation, duration='800ms') {
  el.className = `pengui pengui--${animation} is-playing`;
  el.style.setProperty('--duration', duration);
}
