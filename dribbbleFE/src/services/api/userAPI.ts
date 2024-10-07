const URL: string = "http://localhost:8899/api";

export const getUsers = async () => {
  try {
    return fetch(`${URL}/get-users`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

interface iData {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export const createAccount = async (data: iData) => {
  try {
    return fetch(`${URL}/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

interface iDataLogin {
  email: string;
  password: string;
}

export const loginAccount = async (data: iDataLogin) => {
  try {
    return fetch(`${URL}/login-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
