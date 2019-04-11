import React from 'react';
import BlogImage from './BlogImage';

const Blog = () => {
    return ( 
    <section id="blog">
        <div className="container">
            <BlogImage />
            <BlogImage />
            <BlogImage />
            <BlogImage />
            <BlogImage />
            <BlogImage />
        </div>
    </section> 
    );
}
 
export default Blog;