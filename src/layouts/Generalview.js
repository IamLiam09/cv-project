import { Col, Row } from "react-bootstrap";
import { useState } from "react";
const Generalview = (props) => {
	const { personalInfo } = props;
	const [firstarr, setFirstArr] = useState(personalInfo);
	return (
		<section>
			{firstarr.map((first, index) => {
				return (
					<div key={index} className="generalview">
						<Row>
							<Row className="generalview firstInfo">
								<h2>
									{first.firstName} {first.lastName}
								</h2>
							</Row>
							<Row>
								<h4>{first.title}</h4>
							</Row>
							<Row>
								<a className="link-tag" href={first.website}>{first.website}</a>
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
