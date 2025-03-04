import topoContainer from "./TopoStyle";
import logo from"./assets/logo.png"
export default function Topo(){
    return(
        <topoContainer>
 <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <span>ZapRecall</span>
            </div>
        </topoContainer>
    );
}