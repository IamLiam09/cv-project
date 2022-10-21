import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const Generalview = (props) => {
	const { generalInfo } = props;
    const [secondarr, setSecondArr ] = useState(generalInfo)
	return (
		<section>
            <h1 className="secondarr"> Work Experience</h1>
            <hr className="secondarr line"></hr>
			{secondarr.map((second, index) => {
                return(
                    <div key={index}>
                        <div className="__details">
                            <div>
                                <p>{second.from}-
                                {second.end}</p>
                            </div>
                            <div>
                                <p>
                                    {second.jobTitle}
                                </p>
                                <p>{second.company}, {second.location}</p>
                            </div>
                        </div>
				    </div>
                )
			})}
		</section>
	);
};
export default Generalview;
