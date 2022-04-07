import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';
import { books } from './book'; //if it is a named export, you need to have the curly braces
//stateless functional component
//you must always return JSX
//RULES:
//you can only return a single element, not more than one
//follow the semantics and don't just return divs!!
//capitalize attributes of any html returned
//use camelCase for html attributes
//use className instead of class
//you need to use a closing tag on EVERY html element!!!
//you can nest components within other react components.



// const names = ['john', 'peter', 'susan']; //this is another array object

// const newNames = names.map((name) => {
//     return <h1>{name}</h1>;
// });

//since we can't render objects in their entirety we need to destructure their props
function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => { //.map() runs a function on every value in books
                //const { id, img, title, author } = book; //destructure props instead of doing . notation (books.img, books.title)
                //console.log(book);
                return (
                    // <Book /*key is a prop and book.id is the object passed into the property*/ key={book.id} book={book} /> //instead just pass entire book object as a prop
                    <Book /*key is a prop and book.id is the object passed into the property*/ key={book.id} {...book} /> //instead just pass entire book object as a prop
                );
            })/* {returnBooks} */}
        </section>
    );
}

const Book = ({ img, title, author }) => { //<- do props this way instead!!!!!
    // const { img, title, author } = props.book; //we're not destructuring props rather the book property specifically
    // const { img, title, author } = props; //we will use this method since we used the spread operator when passing in the book properties within the map method above
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world');
    };
    const complexExample = (author) => {
        console.log(author);
    }
    return <article className='book' onMouseOver={() => {
        console.log(title);
    }}> {/*This is called implicit return cause it doesn't have paranthesis*/}
        <img src={img} className='bookimage' alt="Percy Jackson Cover" />
        <h2>{title}</h2> {/*title is a variable*/}
        <h1 onClick={() => {    //this is using inline function for the event handler function
            console.log(title);
        }}>{author}</h1>
        <button type='button' /*On click is the event, function within braces is the handler*/ onClick={clickHandler}>Using an event handler with reference</button>
        {/* <button type='button' onClick={complexExample(author) this is will result in an invoked function as soon as the page loads | wrong}>More complex example</button> */}
        <button type='button' onClick={() => complexExample(author)}>More complex example</button> {/*event handler needs to be called using an arrow functio instead if it has parameters like the author in this case*/}
        {/* <p>{6 + 6}</p> */}
    </article >
}

ReactDom.render(<BookList />, document.getElementById('root')); //whatever we're going to render, and where we are going to render it