import React, { components } from "react"
import './App.css';
import General from "./components/General.js"
import Educational from "./components/Education.js"
import WorkExperience from "./components/Practicalexp.js"
import { Container, Row, Col, Button} from "react-bootstrap"

function App() {
  return (
    <>
      <Container >
        <General />
        <WorkExperience />
        <Educational />
      </Container><!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </>
  );
}

export default App;
