import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';
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
const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg',
        title: 'Percy Jackson and The Lighting Thief',
        author: 'Rick Riordan',

    },
    {
        img: 'https://m.media-amazon.com/images/I/413lxIe20jL._SY346_.jpg',
        title: 'Harry Potter and The Sorcerer\'s Stone',
        author: 'J.K Rowling',
    },
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
    return <h1>{name}</h1>;
});

console.log(newNames);

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const { img, title, author } = book;
                return (
                    <Book book={book}></Book>
                );
            })}
        </section>
    );
}

const Book = (props) => { //<- do props this way instead!!!!!
    const { img, title, author } = props.book;
    return <article className='book'> {/*This is called implicit return cause it doesn't have paranthesis*/}
        <img src={img} className='bookimage' alt="Percy Jackson Cover" />
        <h2>{title}</h2> {/*title is a variable*/}
        <h1>{author}</h1>
        {/* <p>{6 + 6}</p> */}
    </article>
}

ReactDom.render(<BookList />, document.getElementById('root')); //whatever we're going to render, and where we are going to render it