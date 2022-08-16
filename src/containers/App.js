import Container from "react-bootstrap/Container";

import "../styles/App.css";
import TabsComponent from "../components/TabsComponent";

function App() {
  return (
    <div className="App">
      <Container>
        <TabsComponent />
      </Container>
    </div>
  );
}

export default App;
