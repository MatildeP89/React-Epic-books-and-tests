import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2FjODhjNDg0MzFhZTAwMTU0MmU4MWMiLCJpYXQiOjE3MzkzNjA0NTIsImV4cCI6MTc0MDU3MDA1Mn0.Z33dDI7oGCN1Oe1YZmsR5p0mPbbElXlPkBmxpjL-j4w',
          },
        }
      )
      if (response.ok) {
        alert('Review has been deleted!')
      } else {
        throw new Error('Review has not been deleted!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item data-testid="single-comment">
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment;
