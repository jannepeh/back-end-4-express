const userModel = require("../models/userModel");

const listUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
};

const addUser = async (req, res) => {
  await userModel.addUser(req.body);
  res.send("User added");
};

const updateUser = async (req, res) => {
  await userModel.updateUser(req.params.id, req.body);
  res.send("User updated");
};

const deleteUser = async (req, res) => {
  await userModel.deleteUser(req.params.id);
  res.send("User deleted");
};

module.exports = { listUsers, getUser, addUser, updateUser, deleteUser };
