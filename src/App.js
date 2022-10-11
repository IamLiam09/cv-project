
import react, { components, useState} from "react"
import './App.css';
import PersonalInfo from "./components/General.js"
import Educational from "./components/Education.js"
import WorkExperience from "./components/Practicalexp.js"
import Buildbtn from "./components/Buildbtn.js"
import GeneralView from "./view/Generalview.js"
import { Container, Row, Col, Button} from "react-bootstrap"

function App() {
  let firstarr = {}
  let secondarr = {}
  let  thirdarr = {}
  const educationalData = (data) => {
    const third = data
    thirdarr = [...third]
    
  }
  const workexperienceData = (data) => {
    const second = data
    secondarr = [...second]
  }
  const PersonalData = (data) => {
    const first = data
    firstarr = [...first]
  }
  const wl = () => {
    {firstarr.map((firstus, index) => {
      return(
        <div key={index}>
          <Row>
            <h1 className="mt-4">{firstus.firstName}</h1>
          </Row>
        </div>
      )
    })}
  }
  return (
    <>
      <Container >
        <PersonalInfo onChange={PersonalData}/>
        <WorkExperience onChange={workexperienceData}/>
        <Educational  onChange={educationalData}/>
        <Buildbtn />
      </Container>
      
    </>
  );
}

export default App;
