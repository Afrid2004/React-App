import "./App.css";
import Card from "./components/card";

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

          {/* component */}
          <div className="component-div custom">
            <div className="component">
              <div className="category">
                <p>
                  <i class="fi fi-tr-cards-blank"></i> Card using component
                </p>
              </div>

              <div className="all-card">
                {/* card 1 */}
                <Card />
                {/* card 2 */}
                <Card />
                {/* card 3 */}
                <Card />
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
