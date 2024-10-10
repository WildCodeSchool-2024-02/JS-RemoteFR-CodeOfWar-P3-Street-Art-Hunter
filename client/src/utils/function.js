export function frenchDate(date) {
  const event = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date
    ? event.toLocaleDateString("fr-FR", options)
    : " Pas d'information";
}

export const datePicture = new Date().toLocaleDateString("fr-FR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
