import React from "react";
import { Col, Row , Button} from "react-bootstrap";

const Educational = () => {
	return (
		<div>
			<h1>Education</h1>
			<form>
				<Row>
					<label for="schoolName">Name of school</label>
					<input type="text" id="schoolName" placeholder="Name of school" class="name" />
				</Row>
				<Row>
					<label for="Degree">Degree</label>
					<input type="text" id="Degree" placeholder="Degree" class="name" />
				</Row>
				<Row>
					<label for="Year">Year</label>
					<input type="Date" id="Year" class="name" />
				</Row>
                <Button
				type="submit">Edit
			    </Button>
                <Button
				type="submit">Save
			    </Button>
			</form>
		</div>
	);
};

export default Educational;
