
import { useState} from "react"
import './App.css';
import PersonalInfo from "./components/General.js"
import Educational from "./components/Education.js"
import WorkExperience from "./components/Practicalexp.js"
import Buildbtn from "./components/Buildbtn.js"
import Generalview from "./layouts/Generalview.js"
import Practicalexpview from "./layouts/Practicalexpview"
import Educationview from "./layouts/Educationview.js"
import { Container } from "react-bootstrap"
import uniqid from "uniqid";
function App() {
  // The state for PersonalInfo
  const [personalInfo, setpersonalInfo] = useState([
		{
			firstName: "",
			lastName: "",
			title: "",
			phoneNumber: "",
			location: "",
			email: "",
			website: "",
		},
	]);
	// The state of work experience
	const [generalInfo, setGeneralInfo] = useState([
		{
			jobTitle: "",
			company: "",
			location: "",
			from: "",
			end: "",
			id: uniqid(),
		},
	]);
  // The state for EducationInfo
  const [educationInfo, setEducationInfo] = useState([
		{
			nameOfSchool: "",
			location: "",
			degree: "",
			startYear: "",
			endYear: "",
			id: uniqid(),
		},
	]);
	const [show, setShow] = useState(false)
  return (
    <>
      <Container >
        <PersonalInfo personalInfo={personalInfo} setpersonalInfo={setpersonalInfo} />
        <WorkExperience generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Educational  educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
        <Buildbtn show={show} setShow={setShow} />
        {show && <div className="bg-white mt-4 mb-3 paper">
			<Generalview personalInfo={personalInfo} />
			<Practicalexpview generalInfo={generalInfo} />
			<Educationview educationInfo={educationInfo} />
		</div>}
      </Container>
    </>
  );
}

export default App;
