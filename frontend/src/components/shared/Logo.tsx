import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Logo = () => {
  return (
    <div style={{
      display: "flex", marginRight: "auto", alignItems: "center", gap: "8px"
    }}>
      <Link to={"/"}>
        <img src='./openai.png' width={'30px'} height={'30px'} className='img-inverted' />
      </Link>
      <Typography sx={{ 
          display: { md: "block", sm: "none", xs: "none" }, 
          marginRight: "auto", 
          fontWeight: "800", 
          textShadow: "2px 2px 20px #000" }}>
          <span style={{ fontSize: "20px", color: "white" }}>AI</span>-GPT
        </Typography>
    </div>
  )
}

export default Logo