import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const Generalview = (props) => {
	const { thirdarr } = props;
	return (
		<section>
            <h1 className=""> Work Experience </h1>
			{thirdarr.map((third, index) => {
				<div key={index}>
					<Row>
                        <div className="flex">
                            <Row>
                                <h1>
                                    {third.nameOfSchool}
                                </h1>
                                <h2>{third.location}</h2>
                            </Row>
                            <Row>
                                <h2>{third.degree}</h2>
                                <h4>{third.startYear}-{third.endYear}</h4>
                            </Row>
                        </div>
				    </Row>
				</div>;
			})}
		</section>
	);
};
export default Generalview;
