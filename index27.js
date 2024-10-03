function shortcut(string) {
  return string
    .split("")
    .filter((c) => !"aeiou".includes(c))
    .join("");
}
