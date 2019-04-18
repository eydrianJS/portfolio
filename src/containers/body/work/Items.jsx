import React from 'react';
import Item from './Item';

const items = [
    {
        id: 1,
        title: "tytul",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint alias est nobis accusantium libero quia ut ipsum, recusandae quos amet deleniti debitis. Nihil quisquam perspiciatis magnam non, velit assumenda.",
        img: "conf.jpg",
        delay: 0
    },
    {
        id: 2,
        title: "tytul",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint alias est nobis accusantium libero quia ut ipsum, recusandae quos amet deleniti debitis. Nihil quisquam perspiciatis magnam non, velit assumenda.",
        img: "work1.jpg",
        delay: 300
    },
    {
        id: 3,
        title: "tytul",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint alias est nobis accusantium libero quia ut ipsum, recusandae quos amet deleniti debitis. Nihil quisquam perspiciatis magnam non, velit assumenda.",
        img: "javascript.jpg",
        delay: 600
    },
]

const Items = () => {
    return ( 
        items.map((item) => (
            <Item key={item.id} title={item.title} content={item.content} img={item.img} delay={item.delay}/>
        ))
     );
}
 
export default Items;