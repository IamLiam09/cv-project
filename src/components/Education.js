import react, { useState } from "react";
import uniqid from "uniqid";
import { Col, Row, Button } from "react-bootstrap";

const Educational = (props) => {
	const [educationInfo, setEducationInfo] = useState([
		{
			nameOfSchool: "",
			degree: "",
			startYear: "",
			endYear: "",
			id: uniqid(),
		},
	]);
	// Basic function to prevent default submit
	const handleSubmit = (e) => {
		e.preventDefault();
		props.trigger();
	};
	// The function I used for adding in new forms
	const addEducationForm = () => {
		setEducationInfo([
			...educationInfo,
			{
				nameOfSchool: "",
				degree: "",
				startYear: "",
				endYear: "",
				id: uniqid(),
			},
		]);
	};
	// The function to handle input
	const handleInputChange = (index, e) => {
		const inputvalue = [...educationInfo];
		inputvalue[index][e.target.name] = e.target.value;
		setEducationInfo(inputvalue);
		props.onChange(educationInfo)
	};
	// The fucntion to  handle delete
	const del = (id) => {
		setEducationInfo(educationInfo.filter((item) => item.id !== id));
	};
	const WhenEmpty = () => {
		if(educationInfo.length < 1){
			console.log("empty")
			return(
				<div>
					<Button variant="success" onClick={addEducationForm}>
						Add
					</Button>
				</div>
			)
		}
	}
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
								<Button onClick={() => del(educationInfos.id)} variant="danger">
									Delete
								</Button>
								<Button variant="success" onClick={addEducationForm}>
									Add
								</Button>
							</div>
						</div>
					);
					<WhenEmpty />
				})}
			</form>
		</>
	);
};

export default Educational;
