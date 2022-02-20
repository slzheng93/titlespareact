import {Container, Card, Row, Col} from 'react-bootstrap'

// This components is to show a list of cards of title (quick information)
// When clicked, detail information will be shown

const Movie = ({info, onClick})=>{
    return(  
        <div className="movie-container" onClick={onClick}>
            <Container>
            <Row>
                <Col>
                    <Card className="m-2" border="warning">
                    <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>{info.titleName}</Card.Title>
                            <Card.Text>
                                <span>Release Year: {info.releaseYear}</span>
                                <span>Processed Date Time UTC: {info.processedDateTimeUTC}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
        
    )
}
export default Movie;