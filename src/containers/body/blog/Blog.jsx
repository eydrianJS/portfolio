import React from 'react';
import BlogImage from './BlogImage';

const Blog = () => {
    return ( 
    <section id="blog">
        <div className="container">
            <BlogImage data-aos="flip-left"/>
            <BlogImage data-aos="flip-left"/>
            <BlogImage data-aos="flip-left"/>
            <BlogImage data-aos="flip-left"/>
            <BlogImage data-aos="flip-left"/>
            <BlogImage data-aos="flip-left"/>
        </div>
    </section> 
    );
}
 
export default Blog;