import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import horror from '../Dati/horror.json'

const BookDetails = () => {
  const params = useParams()
  const selectedBook = horror.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={selectedBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {selectedBook.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails;
