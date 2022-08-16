import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Algoritmo from "./algoritmo";
import Mascotas from "./mascotas";

function TabsComponent() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="mascotas" title="MASCOTAS">
        <Mascotas />
      </Tab>
      <Tab eventKey="algoritmo" title="ALGORITMO">
        <Algoritmo />
      </Tab>
    </Tabs>
  );
}

export default TabsComponent;
