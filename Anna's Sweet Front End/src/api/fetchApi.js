// const API_URL = "http://18.188.238.204:8080";
const API_URL = "https://melvin-nguyen.com:8443";

export async function getMenu() {
  try {
    let response = await fetch(`${API_URL}/getMenu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function signUp(userData) {
  try {
    let response = await fetch(`${API_URL}/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok && response.status !== 409) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return { status: response.status, data };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function signIn(loginData) {
  try {
    let response = await fetch(`${API_URL}/validatePassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        // Handle authentication failure differently
        return { status: 401, data };
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return { status: response.status, data };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function createOrder(order) {
  try {
    let response = await fetch(`${API_URL}/order/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function checkOrder(id) {
  try {
    let response = await fetch(`${API_URL}/order/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
