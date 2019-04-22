import React from 'react';

const Blog = (props) => {
    return ( 
    <section id="blog" className="sticky">
        <blockquote>Moje projekty<span></span></blockquote>
        <img id="office" src="../img/biurko.jpg" />
        <img id="building" src="../img/pjona.jpg" onClick={props.openTodo}/>
        <div id="box"/>
    </section> 
    );
}
 
export default Blog;