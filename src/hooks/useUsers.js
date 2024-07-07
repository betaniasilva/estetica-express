const useUsers = () => {
  const findAll = (filter) => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (filter) {
      return users.filter(filter);
    }
    return users;
  };

  const findOne = (filter) => {
    const users = JSON.parse(localStorage.getItem("users"));

    return users.find(filter);
  };

  const create = (user) => {
    const users = JSON.parse(localStorage.getItem("users"));

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    return users;
  };

  const update = (id, user) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const index = users.findIndex((user) => user.id === id);

    users[index] = user;

    localStorage.setItem("users", JSON.stringify(users));

    return users;
  };

  const remove = (id) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const index = users.findIndex((user) => user.id === id);

    users.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(users));

    return users;
  };

  return { findAll, findOne, create, update, remove };
};

export default useUsers;
