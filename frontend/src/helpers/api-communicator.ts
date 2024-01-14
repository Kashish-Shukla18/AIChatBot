import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:5000/api/v1/user/login", { email, password });

    if (res.status !== 200) {
      throw new Error("Unable to login");
    }

    const data = await res.data;
    return data;
  } catch (error) {
    // Handle error gracefully, you might want to log it or show a user-friendly message
    console.error("Error during login:", error);
    throw new Error("Unable to login");
  }
};
