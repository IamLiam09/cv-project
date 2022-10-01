import react, {useState} from "react";
import { Row, Button } from "react-bootstrap";
const BuildBtn = ({all}) => {
    const disp = ({all}) => {
        console.log(all)
    }
    return(
        <>
            <Row>
                <Button type="submit">
                    Build
                </Button>
            </Row>
        </>
    )
}
export default BuildBtn