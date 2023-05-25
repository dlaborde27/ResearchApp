import "./Researchercard.css"

export function Researchercard(props) {
  return (
    <>
      <article className="integrantes">
          <img className="circle" src={props.pathname} alt={props.pathname} width="150"/>
          <div>
              <span className="name">{props.name}</span>
              <span className="carrer">{props.carrer}</span>
          </div>
      </article>
    </>
  )
}