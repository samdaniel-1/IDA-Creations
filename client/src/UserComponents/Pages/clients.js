import { Col, Row } from "react-bootstrap"

function Clients(){
    let you = "https://t4.ftcdn.net/jpg/00/32/44/53/360_F_32445303_fOmurtPlubp0PDwggnsyqhteqLKXsahO.jpg"
    let Corporate = "https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/corporate%20responsiblity%20leaders%20trends%202021.jpg"
    let Trust = "https://blog.ipleaders.in/wp-content/uploads/2016/08/Trust.jpg"
    let foreign = "https://www.docsplanner.com/blogs/wp-content/uploads/2022/06/fc-1.png"
    let csr = "https://upload.wikimedia.org/wikipedia/commons/6/63/Sorted_waste_containers_in_Taiwan.jpg"
    let invest = "https://m.economictimes.com/thumb/msid-59530915,width-1200,height-900,resizemode-4,imgsize-46852/how-can-i-invest-in-share-market.jpg"
    let fi = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220628171843/Financial-Institution.png"
    let ei = "https://www.excessindia.com/images/educational-institution.png"
    let gi = "https://igod.gov.in/assets/images/banner.jpg"
    let ngo = "https://media.licdn.com/dms/image/D4D12AQH3bCJQ0aXcoQ/article-cover_image-shrink_720_1280/0/1689060299043?e=2147483647&v=beta&t=omvXyxF9cEQb3UIrHcEH_R3DD6tWh4jX2ZTkzzEqzi0"
    return(
        <>
        <h1 className="about-title" id="services">Our Clients are</h1>
        <marquee>
            <Row>
                <Col className="d-flex m-5">
                <figure className="m-3">
                <img src={you} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">You</figcaption>
                </figure>
                <figure className="m-3">
                <img src={Corporate} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Corporates</figcaption>
                </figure>
                <figure className="m-3">
                <img src={Trust} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Trust</figcaption>
                </figure>
                <figure className="m-3">
                <img src={foreign} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Foreigners</figcaption>
                </figure>
                <figure className="m-3">
                <img src={csr} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Social <br/>responsible <br/>people</figcaption>
                </figure>
                <figure className="m-3">
                <img src={invest} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Investors</figcaption>
                </figure>
                
                <figure className="m-3">
                <img src={fi} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Financial <br/>Institutions</figcaption>
                </figure>
                <figure className="m-3">
                <img src={ei} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Educational <br/>Institutions</figcaption>
                </figure>
                <figure className="m-3">
                <img src={gi} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Government <br/>Institutions</figcaption>
                </figure>
                <figure className="m-3">
                <img src={ngo} className="rounded-5 border border-info" height={'100px'} width={'100px'}/>
                <figcaption className="m-3">Non-Government <br/>Organisations</figcaption>
                </figure>


                </Col>
               
            </Row>

                
        </marquee>
        </>
    )
}
export default Clients