import { useState } from "react";
function Toggle() {
  const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (
        <div onClick={handleToggle} style={{width:"70px",height:"40px",borderRadius:"50px",backgroundColor:isOn?"green":"red",position:"relative"}}>
            <div style={{ position: "absolute",top:"50%", width:"35px",height:"35px",borderRadius:"50%",backgroundColor:"black",left:isOn?"33px":"2px",transform:"translateY(-50%)",alignItems:"center",}}>
            </div>
    </div>
    );
}
export default Toggle;