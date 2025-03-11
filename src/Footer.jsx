import FooterStyle from "./FooterStyle"
export default function Footer({ answeredCount }) {
    return(
       <FooterStyle>
         <div className= "footer-container">
         <p>{answeredCount}/8 CONCLUÍDOS</p>
         </div>
       </FooterStyle>
    )
}