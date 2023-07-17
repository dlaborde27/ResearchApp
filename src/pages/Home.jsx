import { Routedirection } from "../components/Routedirection";

// import logo from "../../public/logo2Negro.png"
import "./Home.css"

export function Home() {
  return (
    <>
      <div id="all-content">
        <h1 id="text">Home</h1>
        <div id="primary-content">
          <div id="separated-content">
            {/* <img src={logo} alt="cd" width='70%'/> */}
            <article>"Welcome to the Laboratory of Bioinformatics and Autonomous Learning (LBA<sup>2</sup>) . Our laboratory, led by Dr. Edwin Valarezo Añazco, is dedicated to fundamental research in bioinformatics and applications of artificial intelligence in the field of life sciences.
<br /><br />
In our laboratory, we are passionate about applying machine learning and computer vision techniques to address various challenges in bioinformatics. We explore the development of machine learning models for the analysis and understanding of biological data, such as microscopy images. Additionally, we conduct research in simulated environments using platforms to simulate and optimize artificial intelligence solutions.</article>
            <div id="content-image">
              <div id="secondary-content">
                <article>Our approach is based on cutting-edge research in artificial intelligence, where we develop advanced machine learning algorithms and computer vision techniques. We are particularly interested in generative approaches for synthesizing biological data, deep models and explainability in artificial intelligence, metric and representation learning, and self-supervised learning paradigms. These advancements lay the foundation for innovative applications in the field of bioinformatics, as well as for the generation of scientific knowledge through academic publications.
<br /> <br />
The Laboratory of Bioinformatics and Autonomous Learning is affiliated with:
                  <ul>
                    <li>Escuela Politécnica del Litoral (ESPOL)</li>
                  </ul>
                </article>
              </div>
              <iframe width="550" height="315" src="https://www.youtube.com/embed/aFuA50H9uek?controls=0&loop=1&playlist=aFuA50H9uek&autoplay=1&mute=1&start=15&end=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}
