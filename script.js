// Arreglo de 10 comentarios
const comments = [
  {
    id: 1,
    name: "Juan Pérez",
    comment: "¡Las Cataratas del Iguazú son impresionantes!",
  },
  { id: 2, name: "María González", comment: "El paseo en lancha es lo mejor." },
  {
    id: 3,
    name: "Carlos López",
    comment: "Increíble biodiversidad en el parque.",
  },
  {
    id: 4,
    name: "Ana Morales",
    comment: "El avistamiento de aves fue fascinante.",
  },
  {
    id: 5,
    name: "Pedro Ramírez",
    comment: "Recomiendo el tour en bicicleta, es muy divertido.",
  },
  {
    id: 6,
    name: "Sofía Martínez",
    comment: "La Garganta del Diablo es impresionante.",
  },
  {
    id: 7,
    name: "Laura Díaz",
    comment: "Perfecto para los amantes de la fotografía.",
  },
  {
    id: 8,
    name: "Luis Fernández",
    comment: "El picnic en el parque fue muy agradable.",
  },
  {
    id: 9,
    name: "Carmen Sánchez",
    comment: "Las vistas son simplemente espectaculares.",
  },
  {
    id: 10,
    name: "Ricardo Gómez",
    comment: "No te pierdas la visita a la Isla San Martín.",
  },
];

function getRandomComments(commentsArray) {
  const shuffled = commentsArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const randomComments = getRandomComments(comments);

const commentsList = document.querySelector(".comments-list");

randomComments.forEach((comment) => {
  const commentElement = document.createElement("p");
  commentElement.className = "comment";
  commentElement.innerHTML = `<blockquote>${comment.comment}</blockquote> <figcaption>- ${comment.name}</figcaption>`;
  commentsList.appendChild(commentElement);
});
