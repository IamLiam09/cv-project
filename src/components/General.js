import react, { useState } from "react";
import { Col, Row } from "react-bootstrap";
const PersonalInfo = () => {
	const [personalInfo, setpersonalInfo] = useState([
		{
			firstName: "",
			lastName: "",
			title: "",
			phoneNumber: "",
			email: "",
			website: "",
			location: "",
		},
	]);
	const handleInputChange = (index, e) => {
		const inputvalue = [...personalInfo];
		inputvalue[index][e.target.name] = e.target.value;
		setpersonalInfo(inputvalue);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	// A function to send value to app
	const send = () => {
		return personalInfo
	}
	return (
		<>
			<h1>Personal Information</h1>
			<form onSubmit={handleSubmit}>
				{personalInfo.map((personalInfos, index) => {
					return (
						<div key={index}>
							<Row>
								<label for="firstNameInput">First Name</label>
								<input
									type="text"
									id="firstNameInput"
									placeholder="First Name"
									name="firstName"
									onChange={(e) => handleInputChange(index, e)}
									value={personalInfos.firstName}
								/>
							</Row>
							<Row>
								<label for="lastNameInput">Last Name</label>
								<input
									type="text"
									id="lastNameInput"
									placeholder="Last name"
									name="lastName"
									value={personalInfos.lastName}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="Title">Title</label>
								<input
									type="text"
									id="Title"
									placeholder="Title"
									name="title"
									value={personalInfos.title}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="phoneNumberInput">Phone Number</label>
								<input
									type="number"
									id="phoneNumberInput"
									placeholder="Phone Number"
									name="phoneNumber"
									value={personalInfos.phoneNumber}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="emailInput">Email</label>
								<input
									type="text"
									id="emailInput"
									placeholder="Email"
									name="email"
									value={personalInfos.email}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="websiteInput">Website</label>
								<input
									type="text"
									id="websiteInput"
									placeholder="Website"
									name="website"
									value={personalInfos.website}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="locationInput">Location</label>
								<input
									type="text"
									id="locationInput"
									placeholder="Location"
									name="location"
									value={personalInfos.location}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
						</div>
					);
				})}
			</form>
		</>
	);
};

export default PersonalInfo;
