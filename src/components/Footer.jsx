import "./Footer.css"
import '@fortawesome/fontawesome-free/css/all.css';

export function Footer() {
    return (
        <>
            <footer>
                <div class="footer-content">
                    <h3>Laboratorio Bioinformática y Aprendizaje Autónomo - LBA<sup>2</sup></h3>
                    <ul class="socials">
                        <li><a href="https://www.youtube.com/@espol1" target="_blank"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/@espol1" target="_blank"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A15092634&keywords=escuela%20superior%20polit%C3%A9cnica%20del%20litoral&origin=RICH_QUERY_SUGGESTION&position=1&searchId=77076dd2-844a-4976-ac98-3b59483e518a&sid=LPK" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <p>Copyright &copy;2023 Laboratorio Bioinformática y Aprendizaje Autónomo</p>
                </div>
            </footer>
        </>
    )
}