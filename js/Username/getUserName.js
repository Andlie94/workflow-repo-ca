export function getUserName() {
  const username = localStorage.getItem("username");
  return username ? username : "guest";
}
