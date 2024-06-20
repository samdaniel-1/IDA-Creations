import { Col, Row } from "react-bootstrap"

function About(){
    let abtimg = "https://idacreations.com/img/6650956%20copy.png"
    return(
        <>
        
        <h1 className="text-center about-title" id="about">IDA - AR, VR and MR Company in India</h1>
        <Row>
            <Col xs={8}>
            <p className="p 1p">Every companies and personal</p>
            <p className="p 2p">
            We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.
            </p>            
            <p className="p 3p">
            Join Us into the Immersive Future
            </p>
            <a><div className="explore rounded-3 learn"><h6 className="explore rounded-3 learn">Learn more</h6></div></a>
            </Col>
            <Col xs={4}>
            <img src={abtimg} alt="loading" height="400px" className="abtimg" />
            </Col>
        </Row>
        </>
    )
}

export default About
