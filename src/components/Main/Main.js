import About from "./About/About";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <About />
      <div className="header">
        <h1>Manewry</h1>
        <p>Sytuacje w boju, procedury awaryjne i lądowanie</p>
      </div>
    </main>
  );
};

export default Main;
