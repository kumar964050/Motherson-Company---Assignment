import Header from "./components/Header";
import Home from "./components/Home";
import AddProject from "./components/AddProject";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <main className="main-container">
      <Header />
      <Home />
      <AddProject />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
