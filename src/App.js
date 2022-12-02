import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { AppState } from "./CartContext";

function App() {
  return (
    <div className="App">
      <AppState>
        <Header />
        <Home />
        <Footer />
      </AppState>
    </div>
  );
}

export default App;