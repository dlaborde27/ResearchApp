import "./Researchercard.css"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import '@fortawesome/fontawesome-free/css/all.css';

export function Researchercard(props) {
  return (
    <>
      <article className="integrantes">
          <div id="content-photo">
            <img className="circle" src={props.pathname} alt={props.pathname}/>
          </div>
          <div id="data">
              <span className="name">{props.name}</span>
              <span className="carrer">{props.carrer}</span>
              {props.linkLinkedIn && <Link href={props.linkLinkedIn} isExternal className="carrer"><i className="fab fa-linkedin" id="linkedIn"></i> LinkedIn <ExternalLinkIcon mx='2px'/></Link>}
              {props.linkResearchGate && <Link href={props.linkResearchGate} isExternal className="carrer"><i className="fab fa-digital-ocean"></i> Research Gate <ExternalLinkIcon mx='2px'/></Link>}
              {props.linkInstagram && <Link href={props.linkInstagram} isExternal className="carrer"><i className="fab fa-instagram" id="instagram"></i> Instagram <ExternalLinkIcon mx='2px'/></Link>}
          </div>
      </article>
    </>
  )
}