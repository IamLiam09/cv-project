import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const Generalview = (props) => {
	const { educationInfo } = props;
	const [thirdarr, setThirdArr] = useState(educationInfo);
	return (
		<section>
			<h1 className=""> Education </h1>
			<hr className="secondarr line"></hr>
			{thirdarr.map((third, index) => {
                // The function I used for rendering the data
                // gotten from the form.
				return (
					<div key={index}>
						<div className="__details">
							<Row>
								<h5>{third.nameOfSchool}</h5>
								<h6>{third.degree}</h6>
							</Row>
							<Row>
								<h5>{third.location}</h5>
								<p>
									{third.startYear}-{third.endYear}
								</p>
							</Row>
						</div>
					</div>
				);
			})}
		</section>
	);
};
export default Generalview;
