import "./App.css";
import Card from "./components/card";
import Technology from "./components/technology";
import Data from "./data.json";
import UserInfo from "./components/uuidcard";
import NestedUser from "./components/neasted-mapping";
import ClsCard from "./components/classcomponent";
import Reacticon from "./components/reacticon";
import Bootstracard from "./components/bootstrap-card";


var name, heading, cardbody;
name = "Afrid";
heading = {
  fontWeight: "500",
  marginBottom: "1rem",
};
cardbody = {
  padding: "1.5rem",
  maxWidth: "370px",
  border: "1px solid rgba(211, 211, 211, 0.053)",
  background: "#11171fff",
  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

function App() {
  return (
    <>
      <div className="main-custom-container">

        <div className="header">
          <div className="custom-container">
            <h1>
              Compleate React JS Project <i class="fi fi-tr-react"></i>
            </h1>
          </div>
        </div>

        <div className="custom-container">

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

            {/* mapping data with a unique uuid */}
            <div className="uuid-div custom">

              <div>

                <div className="category">
                  <p>
                    <i class="fi fi-tr-id-badge"></i> Mapping unlimited data with a unique uuid
                  </p>
                </div>

                <div className="user-all-card">

                  <UserInfo />

                </div>


              </div>

            </div>

            {/* mapping nested data */}
            <div className="nested-div custom">

              <div>

                <div className="category">
                  <p>
                    <i class="fi fi-tr-back-up"></i> Mapping unlimited Nested Data
                  </p>
                </div>

                <div className="usercard">
                  <NestedUser />
                </div>

              </div>

            </div>

            {/* Card using class Component included Props */}
            <div className="nested-div custom">

              <div>

                <div className="category">
                  <p>
                    <i class="fi fi-tr-back-up"></i> Card using Class Component included props
                  </p>
                </div>

                <div className="usercard">
                  <ClsCard title="HTML" desc="Hyper Text Markup language" />
                  <ClsCard title="CSS" desc="Cascading Style sheet" />
                  <ClsCard title="JS" desc="JavaScript" />
                </div>

              </div>

            </div>

            {/* React Icons */}
            <div className="icons-div custom">

              <div>

                <div className="category">
                  <p>
                    <i class="fi fi-tr-react"></i> React Icons
                  </p>
                </div>

                <div className="usercard">

                  <Reacticon />

                </div>

              </div>

            </div>

            {/* Implement Bootstrap in React */}
            <div className="bootstrap-div custom">

              <div>

                <div className="category">
                  <p>
                    <i class="fi fi-brands-bootstrap"></i> Implement Bootstrap in React
                  </p>
                </div>

                <div className="all-card">
                  <Bootstracard src="/images/car-1.jpg" />
                  <Bootstracard src="/images/car-1.jpg" />
                  <Bootstracard src="/images/car-1.jpg" />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="footer">
          <div className="custom-container">
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

      </div>
    </>
  );
}

export default App;
