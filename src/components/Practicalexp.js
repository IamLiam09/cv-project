import { useState } from "react";
import uniqid from "uniqid";
import { Row, Button } from "react-bootstrap";

const WorkExperience = (props) => {
	const {generalInfo, setGeneralInfo} = props
	const [emptyvalue, setEmptyValue] = useState(false)
	// The function to handleinput
	const handleInputChange = (index, e) => {
		const inputvalue = [...generalInfo];
		inputvalue[index][e.target.name] = e.target.value;
		setGeneralInfo(inputvalue);
	};
	// Basic function to prevent default submit
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	// The function I used for adding in new forms
	const addWorkExperience = () => {
		setGeneralInfo([
			...generalInfo,
			{
				jobTitle: "",
				company: "",
				location: "",
				from: "",
				end: "",
				id: uniqid(),
			},
		]);
	};
	// The function to delete one of the form
	const del = (id) => {
		setGeneralInfo(generalInfo.filter((item) => item.id !== id));
		SwitchEmpty()
	};
	const SwitchEmpty =  () => {
		if(generalInfo.length < 2){
			setEmptyValue(emptyvalue => !emptyvalue)
		}
	}
	// remove button
	const removeButton = () =>{
		addWorkExperience()
		setEmptyValue(empty => !emptyvalue)
	}
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
								<Button onClick={() => del(generalInfos.id)} variant="danger">Delete</Button>
								<Button
									variant="success"
									onClick={(e) => addWorkExperience(e)}
								>
									Add
								</Button>
							</div>
						</div>
					);
				})}
			</form>
			<div className="mt-3 mb-2 butt">
				{emptyvalue && <Button onClick={removeButton}
				variant="success" >Add Work Experience</Button>}
			</div>
		</>
	);
};

export default WorkExperience;
