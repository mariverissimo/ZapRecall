import TopoStyle from "./TopoStyle"
import logo from"./assets/logo.png"
export default function Topo(){
    return(
        <TopoStyle>
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                <span>ZapRecall</span>
            </div>
        </TopoStyle>
    );
}