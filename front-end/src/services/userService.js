const login = async (values) => {
  const { email, password } = values;
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

const register = async (name, email, password, seller) => {
  const response = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.text,
      email: email.text,
      password: password.text,
      seller,
    }),
  });
  return await response.json();
};
module.exports = { login, register };
