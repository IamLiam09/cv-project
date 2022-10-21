import { Col, Row } from "react-bootstrap";
import { useState } from "react";
const Generalview = (props) => {
	const { personalInfo } = props;
	const [firstarr, setFirstArr] = useState(personalInfo);
	console.log(firstarr);
	return (
		<section>
			{firstarr.map((first, index) => {
				return (
					<div key={index} className="generalview">
						<Row>
							<Row className="generalview firstInfo">
								<h1>
									{first.firstName} {first.lastName}
								</h1>
							</Row>
							<Row>
								<a href={first.website}>{first.website}</a>
							</Row>
							<Row>
								<h2>{first.title}</h2>
							</Row>
							<Row>
								<p>{first.phoneNumber} | {first.email} | {first.location}</p>
							</Row>
						</Row>
					</div>
				);
			})}
		</section>
	);
};
export default Generalview;
