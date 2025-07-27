const API_URL = "http://localhost:5000/api";

export const register = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const login = async (userData) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const refresh = async () => {
  const res = await fetch(`${API_URL}/auth/refresh`, {
    credentials: "include",
  });
  return res.json();
};

export const getMe = async () => {
  const res = await fetch(`${API_URL}/auth/me`, {
    credentials: "include",
  });
  return res.json();
};