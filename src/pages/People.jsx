import { Routedirection } from "../components/Routedirection";
import { Researchercard } from "../components/Researchercard";

export function People() {
    return (
        <>
            <div>
                <h1>Home</h1>
                <div>
                    <div>
                        <Routedirection mensaje="People" />
                        <div id="grid">
                            <Researchercard pathname="carlos.jpg" name="Carlos Jimenez Farfan" carrer="computacion" />
                            <Researchercard pathname="daniela.jpg" name="Daniela Espin" carrer="Mecatronico" />
                            <Researchercard pathname="dario.jpg" name="Dario Laborde Jimenez" carrer="Mecatronico" />
                            <Researchercard pathname="jose_miguel.jpg" name="Jose Miguel Santos" carrer="computacion" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}