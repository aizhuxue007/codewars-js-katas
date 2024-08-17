function stringClean(s) {
  const found = s.match(/\D/g);
  return found !== null ? found.join("") : "";
}

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
