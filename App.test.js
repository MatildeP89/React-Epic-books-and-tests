import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'


  it('renders Welcome component', () => {
    render(<App />)
    const mainHeader = screen.getByRole('heading', {
      name: /welcome to epibooks!/i,
    })
    expect(mainHeader).toBeInTheDocument()
  })

  it('renders cards length', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('single-book-card')
    expect(allTheBookCards).toHaveLength(150)
  })

  it('renders CommentArea component', () => {
    render(<App />)
    const CommentArea = screen.getByPlaceholderText(
      /Write your review here/i
    )
    expect(CommentArea).toBeInTheDocument()
  })


  it("checks if there is only one result when searching for the word 'revenge'", () => {
    render(<App />)
    const inputField = screen.getByPlaceholderText(/search books/i)
    fireEvent.change(inputField, { target: { value: 'revenge' } })
    const allTheBookCards = screen.getAllByTestId('single-book-card')
    expect(allTheBookCards).toHaveLength(1)
  })


  it ("finds four results when typing the word 'night'", () => {
render(<App />)
const inputField=screen.getByPlaceholderText(/search books/i)
fireEvent.change(inputField, { target: {value: 'night'}} )
const allTheBookCards=screen.getAllByTestId('single-book-card')
expect(allTheBookCards).toHaveLength(4)
  })


  it('changes the book border color to red when selected', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('single-book-card')
    const ExampleOfBookCard = allTheBookCards[0]
    fireEvent.click(ExampleOfBookCard)
    expect(ExampleOfBookCard).toHaveStyle('border: 3px solid red')
  })

  it ('restores regular border once click on another card', () =>{
render(<App />)
const AllTheBooksCards=screen.getAllByTestId('single-book-card')
const ExampleOfCard=AllTheBooksCards[2]
const SecondExampleOfCard=AllTheBooksCards[5]
fireEvent.click(ExampleOfCard)
expect(ExampleOfCard).toHaveStyle('border: 3px solid red')
fireEvent.click(SecondExampleOfCard) 
expect(ExampleOfCard).not.toHaveStyle('border: 3px solid red')
  })
  
it('does not populate any book comment at DOM load',  () => {
render(<App />)
const allBooksComments=screen.queryAllByTestId('single-comment')
expect(allBooksComments).toHaveLength(0)
})
 

  it('shows comments when clicking on a book', async () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('single-book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    const allTheBookComments = await screen.findAllByTestId('single-comment')
    expect(allTheBookComments).not.toHaveLength(0)
  })

