import react, { useState } from "react";
import { Col, Row } from "react-bootstrap";
const PersonalInfo = () => {
	const [ firstName, setFirstName] = useState("")
	const [ lastName, setLastName] = useState("")
	const [ title, setTitle] = useState("")
	const [ phoneNumber, setPhoneNumber] = useState("")
	const [ email, setEmail] = useState("")
	const [ website, setWebsite] = useState("")
	const [location, setLocation] = useState("")
	return (
		<div>
			<h1>Personal Information</h1>
			<form onSubmit={}>
				<Row>
					<label for="firstNameInput">First Name</label>
					<input type="text" 
					id="firstNameInput"
					 placeholder="First Name"
					  class="name" 
					  onChange={(e) => setFirstName(e.target.value)}
					  value = {firstName}
					  />
				</Row>
				<Row>
					<label for="lastNameInput">Last Name</label>
					<input type="text" id="lastNameInput" 
					placeholder="Last name" class="name" 
					value = {lastName}
					onChange={(e) => setLastName(e.target.value)} />
				</Row>
				<Row>
					<label for="Title">Title</label>
					<input type="text" id="Title" 
					placeholder="Title" class="name" 
					value = {title}
					onChange={(e) => setTitle(e.target.value)}/>
				</Row>
				<Row>
					<label for="phoneNumberInput">Phone Number</label>
					<input type="number" id="phoneNumberInput" 
					placeholder="Phone Number" class="name" 
					value = {phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}/>
				</Row>
				<Row>
					<label for="emailInput">Email</label>
					<input type="text" id="emailInput" 
					placeholder="Email" class="name" 
					value = {email}
					onChange={(e) => setEmail(e.target.value)} />
				</Row>
				<Row>
					<label for="websiteInput">Website</label>
					<input type="text" id="websiteInput" 
					placeholder="Website" class="name" 
					value = {website}
					onChange={(e) => setWebsite(e.target.value)} />
				</Row>
				<Row>
					<label for="locationInput">Location</label>
					<input type="text" id="locationInput" 
					placeholder='Location' class="name" 
					value = {location}
					onChange={(e) => setLocation(e.target.value)} />
				</Row>
			</form>
		</div>
	);
};

export default PersonalInfo;
