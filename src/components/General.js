import React from "react";
import { Col, Row } from "react-bootstrap";
const PersonalInfo = () => {
	return (
		<div>
			<h1>Personal Information</h1>
			<form>
				<Row>
					<label for="firstNameInput">First Name</label>
					<input type="text" id="firstNameInput" placeholder="First Name" class="name" />
				</Row>
				<Row>
					<label for="lastNameInput">Last Name</label>
					<input type="text" id="lastNameInput" placeholder="Last name" class="name" />
				</Row>
				<Row>
					<label for="Title">Title</label>
					<input type="text" id="Title" placeholder="Title" class="name" />
				</Row>
				<Row>
					<label for="phoneNumberInput">Phone Number</label>
					<input type="number" id="phoneNumberInput" placeholder="Phone Number" class="name" />
				</Row>
				<Row>
					<label for="emailInput">Email</label>
					<input type="text" id="emailInput" placeholder="Email" class="name" />
				</Row>
				<Row>
					<label for="websiteInput">Website</label>
					<input type="text" id="websiteInput" placeholder="Website" class="name" />
				</Row>
				<Row>
					<label for="locationInput">Location</label>
					<input type="text" id="locationInput" placeholder='Location' class="name" />
				</Row>
			</form>
		</div>
	);
};

export default PersonalInfo;
