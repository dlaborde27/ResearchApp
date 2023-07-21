import "./Researchercard.css"

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
          </div>
      </article>
    </>
  )
}