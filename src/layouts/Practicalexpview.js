const Generalview = (props) => {
	const { generalInfo } = props;
	return (
		<section>
            <h2 className="secondarr"> Work Experience</h2>
            <hr className="secondarr line"></hr>
			{generalInfo.map((second, index) => {
                return(
                    <div key={index}>
                        <div className="__details">
                            <div>
                                <p>{second.from} - </p>
                                <p>{second.end}</p>
                            </div>
                            <div>
                                <h6>
                                    {second.jobTitle}
                                </h6>
                                <h6>{second.company}, {second.location}</h6>
                            </div>
                        </div>
				    </div>
                )
			})}
		</section>
	);
};
export default Generalview;
