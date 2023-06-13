function getAllUsers(req, res) {
  res.send([
    { name: "Nguyen Thai Nguyen", Age: 23 },
    { name: "Vo Van Lam", Age: 22 },
    { name: "Nguyen Duong thai Ngoc", Age: 23 },
  ]);
}

function getUserById(req, res) {
  const userId = req.params.userId;
  console.log("UserId: ", userId);
  res.send({ userId });
}

function getUserByNameAndAge(req, res) {
  const { name, age } = req.query;
  console.log("Name: ", name);
  console.log("Age: ", age);
  res.send({ name, age });
}

function createUser(req, res) {
  const { username, passwork, age } = req.body;
  res.send({ username, passwork, age });
}

function createManyUsers(req, res) {
  const users = req.body;

  users.forEach((user) => {
    createUser({ body: user }, res);
  });

  res.send("Created many users");
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByNameAndAge,
  createUser,
  createManyUsers,
};
