import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap"

const WorkExperience = () => {
    return (
        <div>
            <h1>Work Experience</h1>
            <form 
                type="submit">
                <label for="schoolName">Job Title</label>
                <input 
                    type= "text"
                    id="schoolName"
                    class="name"
                />
                <label for="Degree">Company</label>
                <input 
                    type= "text"
                    id="Degree"
                    class="name"
                />
                <label for="Year">Year</label>
                <input 
                    type= "text"
                    id="Year"
                    class="name"
                />
                <label for="Year">From</label>
                <input 
                    type= "text"
                    id="Year"
                    class="name"
                />
                <label for="Year">To</label>
                <input 
                    type= "text"
                    id="Year"
                    class="name"
                />
            </form>
            <Button
                type="submit
                ">Bootstrap</Button>
        </div>
    )
}

export default WorkExperience