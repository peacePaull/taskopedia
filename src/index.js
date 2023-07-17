import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}
function SubHeader() {
  return <p>This will be an exciting course</p>;
}
function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  return (
    <div>
      <p>
        In this course we will learn {whatWeWillLearn} by building Taskopedia
        Total Lecture = {lectureCount}
      </p>

      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div>
        Enter Task: <input maxLength={5} readOnly={false}></input>
      </div>
    </div>
  );
}

function Students(){
  const fullName = "Kris Walley";

  return(
    <div className="container p-4">
      <div className="row">
        Students Enrolled
      </div>
    </div>
  )
}

function Footer() {
  return <p style={{color: "gray", backgroundColor: "black"}}>Happy Coding</p>;
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);
