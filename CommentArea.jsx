import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import CommentList from './CommentList';
import AddComment from './AddComment';


const CommentArea=({asin})=>{
  const [comments, setComments]=useState([])
  const [isLoading, setIsLoading]=useState(false)
  const [isError, setIsError]=useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2FjODhjNDg0MzFhZTAwMTU0MmU4MWMiLCJpYXQiOjE3MzkzNjA0NTIsImV4cCI6MTc0MDU3MDA1Mn0.Z33dDI7oGCN1Oe1YZmsR5p0mPbbElXlPkBmxpjL-j4w',
            },
          }
        )
        console.log(response)
        
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsError(false)
          setIsLoading(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (asin) {
      getComments()}
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea;
