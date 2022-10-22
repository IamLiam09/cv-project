import { Row, Button } from "react-bootstrap";
const BuildBtn = (props) => {
    const { show, setShow } = props
    const changeValue = () => {
        setShow(show => !show )
    }
    return(
        <>
            <Row>
                <Button onClick={changeValue}>
                    Build
                </Button>
            </Row>
        </>
    )
}
export default BuildBtn