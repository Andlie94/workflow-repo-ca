export function isActivePath(currentPath, href) {
  if (currentPath === "/" && (href === "/" || href === "/index.html")) {
    return true;
  }
  return currentPath === href || currentPath.includes(href);
}
