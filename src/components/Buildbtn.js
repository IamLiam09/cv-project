import react, {useState} from "react";
import { Row, Button } from "react-bootstrap";
const BuildBtn = ({all}) => {
    const disp = ({e, all}) => {
        e.preventDefault()
        console.log(all)
    }
    
    return(
        <>
            <Row>
                <Button type="submit"
                onClick = {disp}>
                    Build
                </Button>
            </Row>
        </>
    )
}
export default BuildBtn