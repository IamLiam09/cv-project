import react, { components } from "react"
import './App.css';
import PersonalInfo from "./components/General.js"
import Educational from "./components/Education.js"
import WorkExperience from "./components/Practicalexp.js"
import Buildbtn from "./components/Buildbtn.js"
import { Container, Row, Col, Button} from "react-bootstrap"

function App() {
  const educationalData = (data) => {
    const first = data
    const firstarr = [...first]
    firstarr.map((firstus) => {
      console.log(firstus.nameOfSchool)
    })
  }
  const workexperienceData = (data) => {
    const second = data
    const secondarr = [...second]
    secondarr.map((secondarr) => {
      console.log(secondarr.jobTitle)
    })
  }
  const personalData = (data) => {
    const third = data
    const thirdarr = [...third]
    console.log(thirdarr)
  }
  const trigger = (e) => {
    e.preventDefault()
    console.log("working for all")
  }
  return (
    <>
      <Container >
        <PersonalInfo onSubmit={(e) => trigger} />
        <WorkExperience onSubmit={(e) => trigger} />
        <Educational onSubmit={trigger} collectData={educationalData}/>
        <Buildbtn onClick={trigger}/>
      </Container>
      
    </>
  );
}

export default App;
