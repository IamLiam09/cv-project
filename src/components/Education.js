import react, { useState } from "react";
import { Col, Row , Button} from "react-bootstrap";

const Educational = () => {
	const [ nameOfSchool, setSchoolName] = useState("")
	const [ degree, setDegree] = useState("")
	const [ startYear, setStartYear] = useState("")
	const [ endYear, setEndYear] = useState("")
	return (
		<div className="mt-4">
			<h1>Education</h1>
			<form onSubmit={}>
				<Row>
					<label for="schoolName">Name of school</label>
					<input type="text" id="schoolName" 
					placeholder="Name of school" class="name" 
					value = {nameOfSchool}
					onChange = {(e) => setSchoolName(e.target.value)}/>
				</Row>
				<Row>
					<label for="Degree">Degree</label>
					<input type="text" id="Degree" 
					placeholder="Degree" class="name" 
					value = { degree }
					onChange = {(e) => setDegree(e.target.value)} />
				</Row>
				<Row>
					<label for="Year">Start Year</label>
					<input type="Date" id="Year" class="name" 
					value = { startYear }
					onChange = {(e) => setStartYear(e.target.value)} />
				</Row>
				<Row>
					<label for="Year">End Year</label>
					<input type="Date" id="Year" class="name" 
					value = { endYear }
					onChange = {(e) => setEndYear(e.target.value)} />
				</Row>
				<div className="mt-3 mb-3 butt">
					<Button
					type="submit">Edit
					</Button>
					<Button
					variant="success"
					type="submit">Save
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Educational;
