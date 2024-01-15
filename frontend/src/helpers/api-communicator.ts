import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:5000/api/v1/user/login", { email, password }, { withCredentials: true });

    console.log("Response:", res); // Add this line for debugging

    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      console.error("Unexpected status during login:", res.status, res.data);
      throw new Error("Unable to login");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Unable to login");
  }
};

export const checkAuthStatus = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/user/auth-status");

    console.log("Response:", res); // Add this line for debugging

    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      console.error("Unexpected status during login:", res.status, res.data);
      throw new Error("Unable to Authenticate");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Unable to login");
  }
};


