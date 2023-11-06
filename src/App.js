import "./styles.css";

import useLocoScroll from "./hooks/useLocoScroll";

import Homepage from "./pages/Homepage";

const App = () => {

  useLocoScroll(true);

  return (
    <div data-scroll-container className="App">
      <Homepage />
    </div>
  );
}

export default App;