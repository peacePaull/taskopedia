import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
function MainHeader() {
  return <h1 className="text-primary">REACT COURSE</h1>;
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
  return (
    <div>
      <p>In this course we will learn react js by building Taskopedia</p>
      <ul>
        <li>Call me</li>
        <li>Go to walmart</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p>Happy Coding</p>;
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
