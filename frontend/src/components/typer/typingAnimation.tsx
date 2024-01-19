import { TypeAnimation } from "react-type-animation"

const TypeAnim = () => {
  return (
    <div>
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "👋 Hello there! Ready for some fun conversation?",
    1000,
    "🌟 Welcome to the chat party! Let's chat, laugh, and have a great time together!",
    1000,
    "🤖 Beep boop! Your friendly chatbot is here to brighten your day!",
    1000,
    "🚀 Buckle up! We're about to embark on a journey of delightful conversations!",
    1000,
  ]}
  speed={50}
  style={{ fontSize: '50px',color:"white",display:"inline-block",textShadow:"1px 1px 2px #000" }}
  repeat={Infinity}
/>
    </div>
  )
}

export default TypeAnim;