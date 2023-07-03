import User from '../types/User';

const users: User[] = [];

const addUser = (user: User) => {
  users.push(user);
};

const removeUser = (userId: string) => {
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
};

const getUsers = () => {
  return users;
};

export default {
  addUser,
  getUsers,
  removeUser,
};
