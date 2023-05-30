import { Routedirection } from "../components/Routedirection";
import { Researchercard } from "../components/Researchercard";
import edwinValarezo from "../../public/edwin_valarezo.jpg"
import carlos from "../../public/carlos.jpg"
import carlos from "../../public/carlos.jpg"
import "./People.css"

export function People() {
    return (
        <>
            <div id="all-content">
                <h1 id="text">People</h1>
                <div id="primary-content">
                    <div id="separated-content">
                        <Routedirection mensaje="People" />
                        <div id="img">
                            <img src="equipo-fake.jpg" alt="equipo fake" width="800" />
                        </div>
                        <h2>Team Leaders</h2>
                        <div id="grid">
                            <Researchercard pathname={edwinValarezo} name="Edwin Valarezo Añazco" carrer="Ph.D. in Electronics and Information Convergence Engineering" />
                        </div>
                        <h2>Team Members</h2>
                        <div id="grid">
                            <Researchercard pathname={carlos} name="Carlos Jimenez Farfan" carrer="Computer Science Engineer" />
                            <Researchercard pathname="daniela.jpg" name="Daniela Espin Ramos" carrer="Mechatronics Engineer" />
                            <Researchercard pathname="dario.jpg" name="Dario Laborde Jimenez" carrer="Computer Science Engineer" />
                            <Researchercard pathname="jose_miguel.jpg" name="Jose Miguel Santos" carrer="Mechatronics Engineer" />
                            <Researchercard pathname="josue_cajamarca_contreras.jpg" name="Jose Cajamarca Contreras" carrer="Mechatronics Engineer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}