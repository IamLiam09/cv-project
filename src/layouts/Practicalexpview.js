import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const Generalview = (props) => {
	const { secondarr } = props;
	return (
		<section>
            <h1 className=""> Work Experience </h1>
			{secondarr.map((second, index) => {
				<div key={index}>
					<Row>
                        <div className="flex">
                            <Row>
                                <h1>
                                    {second.jobTitle}
                                </h1>
                                <h2>{second.location}</h2>
                            </Row>
                            <Row>
                                <h2>{second.company}</h2>
                                <h4>{second.from}-{second.end}</h4>
                            </Row>
                        </div>
				    </Row>
				</div>;
			})}
		</section>
	);
};
export default Generalview;
