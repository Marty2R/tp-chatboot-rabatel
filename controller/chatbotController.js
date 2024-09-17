export const chatbot = (req, res) => {
  return res.render("index");
};

const search = (req, res) => {
  // Afficher en console les données POST reçues
  console.log("Données reçues en POST :", req.body);

  // Simuler des données à passer à la vue
  const data = req.body;

  // Rendre la vue index.ejs avec des données simulées
  return res.render("index", { data });
};

export default { chatbot, search };
