import react, {useState} from "react";
import { Row, Button } from "react-bootstrap";
const BuildBtn = (props) => {
    
    return(
        <>
            <Row>
                <Button type="submit"
                onClick = {props.onClick}>
                    Build
                </Button>
            </Row>
        </>
    )
}
export default BuildBtn