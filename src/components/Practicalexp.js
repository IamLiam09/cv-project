import react, {useState} from "react";
import { Row, Col, Button } from "react-bootstrap";

const WorkExperience = () => {
	const [ jobTitle, setSchoolName] = useState("")
	const [ company, setCompany] = useState("")
	const [ location, setLocation] = useState("")
	const [ from, setFrom] = useState("")
	const [ end, setEnd] = useState("")
	return (
		<div className="mt-4">
			<h1>Work Experience</h1>
			<form onSubmit={}>
				<Row>
					<label for="JobTitle">Job Title</label>
					<input type="text" id="JobTitle" 
					placeholder="Job Title" class="name" 
					value = {jobTitle}
					onChange = {(e) => setSchoolName(e.target.value)}/>
				</Row>
				<Row>
					<label for="Company">Company</label>
					<input type="text" id="Company" 
					placeholder="Company" class="name"
					value = {company}
					onChange = {(e) => setCompany(e.target.value)} />
				</Row>
				<Row>
					<label for="Location">Location</label>
					<input type="text" id="Location" 
					placeholder="Location" class="name"
					value = {location}
					onChange = {(e) => setLocation(e.target.value)} />
				</Row>
				<Row>
					<label for="StartYear">From</label>
					<input type="date" id="StartYear" 
					placeholder="From" class="name" 
					value = {from}
					onChange = {(e) => setFrom(e.target.value)} />
				</Row>
				<Row>
					<label for="EndYear">To</label>
					<input type="date" id="EndYear" 
					placeholder="To" class="name"
					value = {end}
					onChange = {(e) => setEnd(e.target.value)} />
				</Row>
			</form>
			<div className="mt-3 mb-3 butt">
			<Button
				type="submit">Edit
			</Button>
			<Button
                variant="success"
				type="submit">Save
			</Button>
			</div>
		</div>
	);
};

export default WorkExperience;
