import "./App.css";
import Card from "./components/card";
import Technology from "./components/technology";
import Data from "./data.json";

var name, heading, cardbody;
name = "Afrid";
heading = {
  fontWeight: "500",
  marginBottom: "1rem",
};
cardbody = {
  padding: "1.5rem",
  maxWidth: "370px",
  borderRadius: "1rem",
  background: "#11171fff",
  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

function App() {
  return (
    <>
      <div className="container">

        <div className="header">
          <h1>
            Compleate React JS Project <i class="fi fi-tr-react"></i>
          </h1>
        </div>

        <div className="body">

          {/* without using component */}
          <div className="main-div custom">
            <div className="cards">
              <div className="category">
                <p>
                  <i class="fi fi-tr-cards-blank"></i> Card
                </p>
              </div>
              <div className="all-card">
                {/* card 1 */}
                <div style={cardbody}>
                  <h1 style={heading}>
                    Hello, I'm {name}. From today, we will learn about React JS
                  </h1>
                  <h3>The library for web and native user interfaces.</h3>
                </div>
                {/* card 2 */}
                <div style={cardbody}>
                  <h1 style={heading}>
                    Hello, I'm {name}. From today, we will learn about React JS
                  </h1>
                  <h3>The library for web and native user interfaces.</h3>
                </div>
                {/* card 3 */}
                <div style={cardbody}>
                  <h1 style={heading}>
                    Hello, I'm {name}. From today, we will learn about React JS
                  </h1>
                  <h3>The library for web and native user interfaces.</h3>
                </div>
              </div>
            </div>


          </div>

          {/* component with props and destructure*/}
          <div className="component-div custom">

            <div className="component">

              <div className="category">
                <p>
                  <i class="fi fi-tr-cards-blank"></i> Card using component included props and destructure
                </p>
              </div>

              <div className="all-card">

                {/* card 1 */}
                <Card authorName="Afrid" cardHeading="From today we will learn about React JS" cardDesc="The library for web and native user interfaces." />

                {/* card 2 */}
                <Card authorName="Faisal" cardHeading="From today we will learn about Express JS" cardDesc="The library for web and native user interfaces." />

                {/* card 3 */}
                <Card authorName="Arman" cardHeading="From today we will learn about Next JS" cardDesc="The library for web and native user interfaces." />

              </div>

            </div>
          </div>

          {/* mapping unlimited JSON data to card components */}
          <div className="mapping-div custom">

            <div className="mapping-component">

              <div className="category">
                <p>
                  <i class="fi fi-tr-back-up"></i> Mapping unlimited JSON data to card components
                </p>
              </div>

              <div className="all-card">

                {Data.map((data, index) => <Technology techImg={data.techImg} techTitle={data.techTitle} techDesc={data.techDesc} key={index} />)}

              </div>

            </div>

          </div>

        </div>

        <div className="footer">
          <div className="footer-content">
            <p>
              <span>
                &copy; 2025 | All Rights Reserved | design & developed by{" "}
                <a href="https://faisalafrid.vercel.app/">
                  Faisal Yousuf Afrid
                </a>
              </span>
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
