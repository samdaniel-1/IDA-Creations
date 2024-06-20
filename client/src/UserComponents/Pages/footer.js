import { Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function Footer(){
    let logo = "https://media.istockphoto.com/id/1277251837/vector/hand-holding-scales-solid-icon-concept-civil-rights-sign-on-white-background-justice-scales.jpg?s=612x612&w=0&k=20&c=uubB_GGI5Cpn_g7KWpfYAWSg0RBA7CS2Cmr522jL5ic="
    let em = "https://imaginethatcreative.net/blog/wp-content/uploads/2023/06/2250206.png"
    let fb = "https://qph.cf2.quoracdn.net/main-qimg-c587a229e7a3bd5e84d8abb46504eb52-lq"
    let x = "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"
    return(
        <>
        <Row className="bg-dark text-white">
            <Col className="m-4">
            <h3>Contact us</h3>
            <address>
            INDUSTRIAL DESIGN & ANIMATIONS<br/>
Karunaa Conclave,<br/>
No.1963, J Block, 3rd Street, 5th Main Road,<br/>
Anna Nagar West, Anna Nagar, Chennai,<br/>
Tamil Nadu - 600040, INDIA<br/>
  </address>
        <Link to={'/contact'} className="btn text-dark btn-light"><h5>Join now</h5></Link>
            </Col>
        <Col>
        <figure className="m-4">
        <img src={logo} height={'100px'} width={'100px'}/>
        <figcaption>
        <h1>Balance</h1>
        <h4>Your perfect legal advisor</h4>
        </figcaption>
        </figure>
        </Col>
        <Col className="m-4 media">
        <h3>Social media</h3>
        <div className="d-flex">
        <figure className="m-3">
            <img src={em} height={'50px'} width={'50px'}/>
            <figcaption>
                <h4>Email</h4>
            </figcaption>
        </figure>
        <figure className="m-3">
            <img src={fb} height={'50px'} width={'50px'}/>
            <figcaption>
                <h4>Facebook</h4>
            </figcaption>
        </figure>
        <figure className="m-3">
            <img src={x} height={'50px'} width={'50px'}/>
            <figcaption>
                <h4>X ( twitter) </h4>
            </figcaption>
        </figure>
        </div>
        </Col>
        </Row>
        </>
    )
}
export default Footer