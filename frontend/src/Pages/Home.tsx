import { Box } from "@mui/material"
import TypeAnim from "../components/typer/typingAnimation"
const Home = () => {
  return (
    <div>
      <Box width={"100%"} height={"100%"} flex={"flex"} mx={"auto"}>
        <Box sx={{
          display: "flex",
          width: "100%", flexDirection: "column", alignItems: "center", mx: "auto"
        }
        }>
          <Box>
            <TypeAnim/>
          </Box>
          <Box sx={{
            width:"100%",
            display:"flex",
            flexDirection:{md:"row",xs:"column"},
            gap:5,
            my:10,
          }}>
            <img src="/robot.png" alt="robot" style={{width:"200px",margin:"auto"}}/>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Home