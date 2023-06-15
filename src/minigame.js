const player = [{ name: "NTN", attack: 5, health: 20, status: "alive" }];

const monster = [
  { name: "Minion", attack: 1, health: 5, status: "alive" },
  { name: "Cannon", attack: 2, health: 6, status: "death" },
];

export { player, monster };
route.put("/attack", (req, res) => {
  const { player, monster } = req.body;
});
