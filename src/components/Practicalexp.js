import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const WorkExperience = () => {
	return (
		<div>
			<h1>Work Experience</h1>
			<form type="submit">
				<Row>
					<label for="JobTitle">Job Title</label>
					<input type="text" id="JobTitle" placeholder="Job Title" class="name" />
				</Row>
				<Row>
					<label for="Company">Company</label>
					<input type="text" id="Company" placeholder="Company" class="name" />
				</Row>
				<Row>
					<label for="Location">Location</label>
					<input type="text" id="Location" placeholder="Location" class="name" />
				</Row>
				<Row>
					<label for="StartYear">From</label>
					<input type="date" id="StartYear" placeholder="From" class="name" />
				</Row>
				<Row>
					<label for="EndYear">To</label>
					<input type="date" id="EndYear" Placeholder="From" class="name" />
				</Row>
			</form>
			<Button
				type="submit">Edit
			</Button>
			<Button
				type="submit">Save
			</Button>
		</div>
	);
};

export default WorkExperience;
