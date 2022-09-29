import React, { components } from "react"
import './App.css';
import General from "./components/General.js"
import Educational from "./components/Education.js"
import WorkExperience from "./components/Practicalexp.js"
import Buildbtn from "./components/Buildbtn.js"
import { Container, Row, Col, Button} from "react-bootstrap"

function App() {
  return (
    <>
      <Container >
        <General />
        <WorkExperience />
        <Educational />
        <Buildbtn />
      </Container>
      
    </>
  );
}

export default App;
