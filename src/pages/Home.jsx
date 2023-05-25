import { Routedirection } from "../components/Routedirection";

export function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <div>
          <div>
            <Routedirection mensaje="Home" />
            <article id="primary-content">Welcome to the Bioinformatics and Laboratory of Machine Learning (LBA<sup>2</sup>). Led by Dr. Edwin Valarezo, our laboratory is dedicated to research in Machine Learning and its application in the field of Bioinformatics.</article>
            <div id="content-image">
              <div id="secondary-content">
                <article>At LABioML, we focus on utilizing Machine Learning and Data Mining techniques to extract valuable insights from large biological datasets. Our goal is to develop advanced algorithms and models that enable efficient and accurate analysis of genetic and molecular information.
                  Our research areas:
                  <ul>
                    <li>Department of Biology at XYZ University</li>
                    <li>Internationally renowned Bioinformatics Center</li>
                    <li>Collaboration Network in Machine Learning and Artificial Intelligence in Biomedicine</li>
                  </ul>
                </article>
              </div>
              <iframe width="600" src="https://www.youtube.com/embed/Js1E1XCZPoM&ab_channel=CodeReview" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
