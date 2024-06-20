import {Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom"

function Services(){
    let personal = "https://babitajaishankar.com/wp-content/uploads/2014/08/marca-personal-mk-personal-branding-personal.jpg"
    let msme = "https://msmepromotioncouncilindia.com/wp-content/uploads/2023/08/about-us-msme-pci.jpg"
    let St = "https://amarseva.org/wp-content/uploads/2022/10/HBanner1.jpg"
    let sw = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/swachh_story_647_081417063244_0.jpg?VersionId=U0Mvgk0VeBF5ob5TbmhytPn39rsvRGWz"

    let ai = "https://idacreations.com/img/cpu_888995.png"
    let mg = "https://idacreations.com/img/workplace_8170939.png"
    let vp = "https://idacreations.com/img/studio_9200070.png"
    let aa = "https://idacreations.com/img/team_2083290.png"

    let mr = "https://idacreations.com/img/3d-model_14189680.png"
    let vfx = "https://idacreations.com/img/visual-effect_3879988.png"
    let cg = "https://idacreations.com/img/production_13136249.png"
    let ve = "https://idacreations.com/img/film-editing_4035077.png"


    return(
        <>
    <h1 className="about-title" id="services">Our Services</h1>
    <h5 className="text-center">Reinvent your legal strategy for good and effective way</h5>
    <h3 className="m-5 service-title">1. Personal</h3>
    <Row>
        <Col className="doodles justify">
        We are guarantee for your personal legal problems. Cases include cleaniness around your houses and surrounding, improper electric connection that is dangerous, improper structure that leads to death, illegal land grabbing, marriages and so on. Don't worrywe are there for you!. Give your contact details to know more. We will reach you within 2 hrs.
        <Link to="/contact" className="btn btn-secondary d-block col-3 m-5">Contact here</Link>
        </Col>

        <Col xs="2" className="doodles">
        <img src={personal} alt="loading" height="200px"/>
        </Col>
       
    </Row>
    <Row>
    <h3 className="m-5 service-title">2. Corporate/MSMEs</h3>
        <Col className="doodles justify">
        The Corporates and MSMEs( Medium, Small, Micro Entreprises ) face alot of problems in day to day life of business from accounting, recording, managing working capital to tax payment and Corporate Social Responsibilities ( CSR ) and so on. Dont wory we are here to solve the problems. Give your contact number, we will reach you within 2 hrs. 
        <Link to='/contact' className="btn btn-secondary d-block col-3 m-5">Contact here</Link>
        </Col>
        <Col xs="3">
        <img src={msme} alt="loading" height="200px"/>
        </Col>
    </Row>
    <Row>
        <h3 className="m-5 service-title">3. Social Services/ Trusts</h3>
        <Col className="doodles justify">
        Social services plays an important Responsibilities for the development of our society. Trusts give hands and eyes as guide who don't dont have that, They give awareness for people to know their rights, They give education who don't afford it, They give Mental abilities who are mentally ill. We are premierly there to help the trusts and social services activities. If you read this don't miss out, just tap few details within a minute we'll be contacting you within 2 hrs. 
        <Link to={'/contact'} className="btn btn-secondary d-block col-3 m-5">Contact here</Link>
        </Col>
        <Col xs="3">
        <img src={St} alt="loading" height="200px"/>
        </Col>
    </Row>
    <Row>
        <h3 className="m-5 service-title">4. People for social welbeing</h3>
        <Col className="doodles justify">
        <p>People with social wellbeing we think is not born but are made, we have special community from all across the world, in the other way we are gathering you kind of peoples who are involved in social welbeing. Cases includes many things that you fighting against it we will always be a helping hands. Cases like PIL ( Public Interest Litigation ), advising government bills, illegal garbage disposal and so on, we are there as guiding and providing advocates and solicitors ( lawyers for advising governments ) all across the globe. Just fell free to contact us. </p>
        <Link to={'/contact'} className="btn btn-secondary d-block col-3 m-5">Contact here</Link>
        </Col>
        <Col xs="3">
        <img src={sw} alt="loading" height="200px"/>
        </Col>
    </Row>

    </>
    )
}

export default Services