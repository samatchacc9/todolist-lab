// import logo from "./logo.svg";
// import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hello name="John" />
      <Hello name="Jack" />
      <Hello name="Jane" />
      <Footer />
    </div>
  );
}

export default App;
