import react, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";

const Educational = () => {
	const [educationInfo, setEducationInfo] = useState([
		{
			nameOfSchool: "",
			degree: "",
			startYear: "",
			endYear: "",
		},
		
	]);
	// Basic function to prevent default submit
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	// A function to send value to app
	const send = () => {
		return educationInfo
	}
	// The function I used for adding in new forms
	const addEducationForm = () => {
		setEducationInfo([
			...educationInfo,
			{
				nameOfSchool: "",
				degree: "",
				startYear: "",
				endYear: "",
			},
		]);
	};
	// The function to handle input
	const handleInputChange = (index, e) => {
		const inputvalue = [...educationInfo];
		inputvalue[index][e.target.name] = e.target.value;
		setEducationInfo(inputvalue);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				{educationInfo.map((educationInfos, index) => {
					return (
						<div className="mt-4" key={index}>
							<h1>Education</h1>
							<Row>
								<label for="schoolName">Name of school</label>
								<input
									type="text"
									id="schoolName"
									placeholder="Name of school"
									name="nameOfSchool"
									value={educationInfos.nameOfSchool}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="Degree">Degree</label>
								<input
									type="text"
									id="Degree"
									placeholder="Degree"
									name="degree"
									value={educationInfos.degree}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="Year">Start Year</label>
								<input
									type="Date"
									id="Year"
									name="startYear"
									value={educationInfos.startYear}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="Year">End Year</label>
								<input
									type="Date"
									id="Year"
									name="endYear"
									value={educationInfos.endYear}
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<div className="mt-3 mb-3 butt">
								<Button type="submit">Edit</Button>
								<Button variant="success" type="submit"
								onClick = {addEducationForm}>
									Add
								</Button>
							</div>
						</div>
					);
				})}
			</form>
		</>
	);
};

export default Educational;
