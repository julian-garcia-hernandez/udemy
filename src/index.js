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

const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg',
    title: 'Percy Jackson and The Lighting Thief',
    author: 'Rick Riordan'

}
const secondBook = {
    img: 'https://m.media-amazon.com/images/I/413lxIe20jL._SY346_.jpg',
    title: 'Harry Potter and The Sorcerer\'s Stone',
    author: 'J.K Rowling'
}
const Booklist = () => {
    return (
        <section className='booklist'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia asperiores autem at voluptatum
                    ipsa ipsam dolore dicta, impedit modi.
                </p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

        </section>
    );
}
const Book = ({ img, title, author, children }) => { //<- do props this way instead!!!!!
    // const {img, title, author} = props
    return <article className='book'> {/*This is called implicit return cause it doesn't have paranthesis*/}
        <img src={img} className='bookimage' alt="Percy Jackson Cover" />
        <h2>{title}</h2> {/*title is a variable*/}
        <h1>{author}</h1>
        {children}
        {/* <p>{6 + 6}</p> */}
    </article>
}

ReactDom.render(<Booklist />, document.getElementById('root')); //whatever we're going to render, and where we are going to render it