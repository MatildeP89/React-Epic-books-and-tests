import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '3px solid red' : 'none', height: '100%'
        }}
        data-testid="single-book-card"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body className='text-center'>
           
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
          <Button
            className="w-100 cardbutton"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
Book details          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
