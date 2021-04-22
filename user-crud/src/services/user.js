//GET

export const getUser = () => {
  return fetch("https://hello-world.innocv.com/api/user")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getUserDetails = (id) => {
  return fetch(`https://hello-world.innocv.com/api/user/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        name: data.name,
        birthdate: data.birthdate,
      };
    });
};

//POST

export const addNewUser = (name, birthdate) => {
  return fetch(`https://hello-world.innocv.com/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, birthdate }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//PUT

export const updateUser = (id, name, birthdate) => {
  return fetch(`https://hello-world.innocv.com/api/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, birthdate }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//DELETE

export const deleteUser = (id) => {
  return fetch(`https://hello-world.innocv.com/api/user/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => data);
};
