import react, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const WorkExperience = (props) => {
	const [generalInfo, setGeneralInfo] = useState([
		{
			jobTitle: "",
			company: "",
			location: "",
			from: "",
			end: "",
		},
	]);
	// The function to handleinput
	const handleInputChange = (index, e) => {
		const inputvalue = [...generalInfo];
		inputvalue[index][e.target.name] = e.target.value;
		setGeneralInfo(inputvalue);

	};
	// Basic function to prevent default submit
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(generalInfo)
	};
	// The function I used for adding in new forms
	const addWorkExperience = (e) => {
		e.preventDefault()
		setGeneralInfo([
			...generalInfo,
			{
				jobTitle: "",
				company: "",
				location: "",
				from: "",
				end: "",
			},
			
		]);
	};
	
	// const deleteTask = (e , index) => {
	// 	e.preventDefault()
	// 	console.log(e.target.jobTitle)
	// 	setGeneralInfo(generalInfo.filter((general) => general.index !== index))
	//   }
	return (
		<>
			<form onSubmit={handleSubmit}>
				{generalInfo.map((generalInfos, index) => {
					return (
						<div className="mt-4" key={index}>
							<h1>Work Experience</h1>
							<Row>
								<label for="JobTitle">Job Title</label>
								<input
									type="text"
									id="JobTitle"
									placeholder="Job Title"
									value={generalInfos.jobTitle}
									name="jobTitle"
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="Company">Company</label>
								<input
									type="text"
									id="Company"
									placeholder="Company"
									value={generalInfos.company}
									name="company"
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="Location">Location</label>
								<input
									type="text"
									id="Location"
									placeholder="Location"
									value={generalInfos.location}
									name="location"
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="StartYear">From</label>
								<input
									type="date"
									id="StartYear"
									placeholder="From"
									value={generalInfos.from}
									name="from"
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<Row>
								<label for="EndYear">To</label>
								<input
									type="date"
									id="EndYear"
									placeholder="To"
									value={generalInfos.end}
									name="to"
									onChange={(e) => handleInputChange(index, e)}
								/>
							</Row>
							<div className="mt-3 mb-3 butt">
								<Button type="submit" >Edit</Button>
								<Button variant="success" type="submit" onClick={(e) => addWorkExperience(e)}>
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

export default WorkExperience;
