import { Col, Row } from "react-bootstrap"

function Home(){
    let imgurl = "https://img.freepik.com/premium-photo/law-protector-legal-advisor-lawyer-asserting-expertise-amidst-sea-knowledge_1000124-23808.jpg"
    let nodeimg = "https://blog.ipleaders.in/wp-content/uploads/2020/06/international-relations-and-diplomacy-1.jpg" 

    return(
        <>
        <Row>
            <Col id="home" xs="6">
            <img src={imgurl} alt="loading" height="500px" className="aiimage"/>
            <h1 className="title">Your perfect legal partner</h1>
            <a href="/"><div className="explore rounded-3 mt-3"><h6 className="explore p-1 rounded-3 m-1">explore</h6></div></a>
            </Col>
            <Col xs="6"></Col>
            <Col id="about" className="m-5">
            <h1 className="">Who we are?</h1>
            <p>People try to start their business on own and some have target for global reach. But you know in the world of 192 countries, how many rules have?. Well not only that when in comes to Fast moving consumer goods(FMCG), there have low import duty and so on. </p>
            <p>But you want a perfect legal partner <span className="right">RIGHT?</span></p>
            <p className="no"><span className="worry">Don't worry!</span> We're there for you.</p>
            <p>Our branch situated in all of the UN recognized countries. And we are also have great community from all across the geography</p>
            </Col>
            <Col>
            <img src={nodeimg} alt="loading" height="370px" className="aiimage"/>
            </Col>
        </Row>
        </>
    )
}

export default Home