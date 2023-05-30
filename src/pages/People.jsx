import { Routedirection } from "../components/Routedirection";
import { Researchercard } from "../components/Researchercard";
import equipoFake from "../../public/equipo-fake.jpg"
import edwinValarezo from "../../public/edwin_valarezo.jpg"
import carlos from "../../public/carlos.jpg"
import daniela from "../../public/daniela.jpg"
import dario from "../../public/dario.jpg"
import joseMiguel from "../../public/jose_miguel.jpg"
import josueCajamarcaContreras from "../../public/josue_cajamarca_contreras.jpg"
import vicenteAlvaradoToala from "../../public/vicente_alvarado_toala.png"
import bolivarNunezMontoya from "../../public/bolivar_nunez_montoya.png"
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
                            <img src={equipoFake} alt="equipo fake" width="800" />
                        </div>
                        <h2>Team Leaders</h2>
                        <div id="grid">
                            <Researchercard pathname={edwinValarezo} name="Edwin Valarezo Añazco" carrer="Ph.D. in Electronics and Information Convergence Engineering" />
                        </div>
                        <h2>Team Members</h2>
                        <div id="grid">
                            <Researchercard pathname={carlos} name="Carlos Jimenez Farfan" carrer="Computer Science Engineer" />
                            <Researchercard pathname={daniela} name="Daniela Espin Ramos" carrer="Mechatronics Engineer" />
                            <Researchercard pathname={dario} name="Dario Laborde Jimenez" carrer="Computer Science Engineer" />
                            <Researchercard pathname={joseMiguel} name="Jose Miguel Santos" carrer="Mechatronics Engineer" />
                            <Researchercard pathname={josueCajamarcaContreras} name="Jose Cajamarca Contreras" carrer="Mechatronics Engineer" />
                            <Researchercard pathname={vicenteAlvaradoToala} name="Jose Cajamarca Contreras" carrer="Mechatronics Engineer" />
                            <Researchercard pathname={bolivarNunezMontoya} name="Jose Cajamarca Contreras" carrer="Mechatronics Engineer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}