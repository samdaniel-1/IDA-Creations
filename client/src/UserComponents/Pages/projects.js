import { Card, Carousel } from "react-bootstrap"

function Projects(){
    let car1= "https://cdn.ylcube.com/public/media/images/environment.2e16d0ba.fill-1600x900.format-webp.webp"
    let car2= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSql5GSFdg1KCt-k0b7vgb_Vy6tukY3v2EBUA&s"
    let car3= "https://c8.alamy.com/comp/CC002E/nutrition-content-label-soft-drink-canada-dry-CC002E.jpg"

    return(
        <>
        <div>
        <h3 className="about-title">Cases</h3>
        <h5 className="text-center">Here few of the Cases that impact the world</h5>
        <Carousel slide={true} className="text-center mt-5">
            <Carousel.Item className>
                <Card style={{width:"100rem"}}>
                    <Card.Img variant="top" src={car1} height="500px"></Card.Img>
                    <Card.Body>
                        <Card.Title>
                            Environmental protection
                        </Card.Title>
                        <Card.Text>
                <Carousel.Caption className="bg car-world">
                <p className="m-5 text-white justify">PIL has been used to bring about significant changes in environmental protection in India. In the case of M.C. Mehta v. Union of India, the Supreme Court ordered the closure of industries in Delhi that were causing pollution. This case led to the formation of the Central Pollution Control Board, which is responsible for monitoring pollution in India.
                </p>
            </Carousel.Caption>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card>
                    <Card.Img variant="top" src={car2} height="500px"></Card.Img>
                    <Card.Body>
                        <Card.Title>
                            Human Rights
                        </Card.Title>
                        <Card.Text>
                <Carousel.Caption className="text-white car-world">
                <p className="m-5 text-white justify bg-dark bg">PIL has been used to protect the human rights of marginalized sections of society. In the case of People’s Union for Democratic Rights v. Union of India, the Supreme Court ordered that bonded labor be abolished in India.
                </p>
            </Carousel.Caption>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card>
                    <Card.Img src={car3} height={'500px'}/>
                    <Card.Body>
                        <Card.Title>
                            Consumer rights
                        </Card.Title>
                        <Card.Text>
                            <Carousel.Caption className="text-white car-world">
                                <p className="bg-dark m-5">PIL has been used to protect the rights of consumers in India. In the case of Vishal Jeet v. Union of India, the Supreme Court ordered that manufacturers of soft drinks disclose the contents of their products.
                                </p>
                            </Carousel.Caption>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            
        </Carousel>
        </div>

        </>
    )

}

export default Projects