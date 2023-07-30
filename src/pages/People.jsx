import { Routedirection } from "../components/Routedirection";
import { Researchercard } from "../components/Researchercard";
import equipoFake from "../../public/team/team.jpg"
import edwinValarezo from "../../public/edwin_valarezo.jpg"
import carlos from "../../public/carlos.jpg"
import daniela from "../../public/daniela.jpg"
import dario from "../../public/dario.jpg"
import joseMiguel from "../../public/jose_miguel.jpg"
import josueCajamarcaContreras from "../../public/josue_cajamarca_contreras.jpg"
import vicenteAlvaradoToala from "../../public/vicente_alvarado_toala.png"
import bolivarNunezMontoya from "../../public/bolivar_nunez_montoya.png"
import domenicaCordovaBermeo from "../../public/domenica_cordova_bermeo.jpg"
import erickFloresCampana from "../../public/erick_flores_campana.jpg"
import joelQuindeOrdonez from "../../public/joel_quinde_ordonez.jpg"
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
                            <img src={equipoFake} alt="equipo fake"/>
                        </div>
                        <h2 className="subtitulo">Lab Director</h2>
                        <div className="grid">
                            <Researchercard pathname={edwinValarezo} name="Edwin Valarezo Añazco, Ph.D." 
                            carrer="Ph.D. in Electronics and Information Convergence Engineering" 
                            linkLinkedIn="https://www.linkedin.com/in/edwin-valarezo-a%C3%B1azco-88099b66/?originalSubdomain=ec"
                            linkResearchGate="https://www.researchgate.net/profile/Edwin-Valarezo-Anazco"
                            linkInstagram="https://www.instagram.com/edwin_valarezo_a/?hl=en"/>
                            
                        </div>
                        <h2 className="subtitulo">Lab Manager</h2>
                        <div className="grid">
                            <Researchercard pathname={daniela} name="Daniela Espin Ramos" carrer="Bioimaging analysis" />
                        </div>
                        <h2 className="subtitulo">Lab Members</h2>
                        <div className="grid" id="lab-members">
                            <Researchercard pathname={carlos} name="Carlos Jimenez Farfan, Ing" carrer="Autonomous Navigation" />
                            <Researchercard pathname={bolivarNunezMontoya} name="Bolivar Nunez Montoya, Ing" carrer="Prosthesis" />
                            <Researchercard pathname={dario} name="Dario Laborde Jimenez" carrer="Web master" />
                            <Researchercard pathname={joseMiguel} name="Jose Miguel Santos" carrer="Machine and Robot Vision" />
                            <Researchercard pathname={josueCajamarcaContreras} name="Jose Cajamarca Contreras" carrer="Autonomous Object Storage" />
                            <Researchercard pathname={vicenteAlvaradoToala} name="Vicente Alvarado Toala" carrer="Biosignal analysis" />
                            <Researchercard pathname={domenicaCordovaBermeo} name="Domenica Cordova Bermeo" carrer="Autonomous assembly" />
                            <Researchercard pathname={erickFloresCampana} name="Erick Flores Campana" carrer="VET Imaging Analysis" />
                            <Researchercard pathname={joelQuindeOrdonez} name="Joel Quinde Ordonez" carrer="Autonomous manipulation" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}