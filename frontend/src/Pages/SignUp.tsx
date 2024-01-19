import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button } from "@mui/material";
import CustomisedInput from "../components/shared/CustomisedInput";
import { toast } from "react-hot-toast";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const auth = UserAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Please fill in all required fields", { id: "signup" });
      return;
    }

    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name,email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signing Ups Failed", { id: "signup" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth]);


  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              SignUp
            </Typography>
            <CustomisedInput type="text" name="name" label="Name" />
            <CustomisedInput type="email" name="email" label="Email" />
            <CustomisedInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              SignUp
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;