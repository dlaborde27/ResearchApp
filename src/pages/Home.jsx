import teamWorking from "../../public/teamWorking.png"
import teamTurtle from "../../public/team/teamTurtleFun.jpg"
import "./Home.css"

export function Home() {
  return (
    <>
      <div id="all-content">
        <h1 id="text">Home</h1>
        <div id="primary-content">
          <div id="separated-content">
            <div className="contenedor-imagen">
              <img id="team" src={teamTurtle} alt="Team Turtle" />
            </div>
            <h2 id="welcome">Welcome to the Laboratory of Bioinformatics and Autonomous Learning (LBA<sup>2</sup>)</h2>
            <article id="lab-overview">LBA2 led by Professor Edwin Valarezo Añazco, is dedicated to fundamental and applied research in healthcare, medical, robot, and advanced control fields.</article>
            <div id="contenedor-contenido">
              <article>We are thrilled to have you join us in exploring the fascinating fields of Deep Learning, Deep Reinforcement Learning, and Autonomous Systems. Our research encompasses a wide range of cutting-edge topics, including Deep Learning to advance the frontiers of knowledge in Machine/Robot Vision, healthcare, and medical applications. Focusing on leveraging the power of data-driven algorithms, we explore Deep Reinforcement Learning for autonomous object manipulation and autonomous navigation. LBA2 investigates complex patterns and develops intelligent models to revolutionize how machines perceive and interact with the world. Get ready to dive into innovation, collaboration, and transformative research!</article>
              <div className="contenedor-imagen" id="contenedor-imagenlab">
                <img src={teamWorking} alt="Team Working" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
