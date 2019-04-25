import React from 'react';
import Item from './Item';

const items = [
    {
        id: 1,
        title: "tytul",
        content: "Tworzenie stron internetowych, w szczególności implementacja formularzy sprzedażowych korzystając z wewnętrznych rozwiązań (FreeMarker(ftl), HTML, CSS, JavaScript, JQuery , XML, Groovy)",
        img: "conf.jpg",
        delay: 0
    },
    {
        id: 2,
        title: "tytul",
        content: "Tworzenie i rozwój REST API dla partnerów firmy za pomocą PHP(laravel) oraz Mongodb",
        img: "work1.jpg",
        delay: 150
    },
    {
        id: 3,
        title: "tytul",
        content: "Rozwój wewnętrznej aplikacji pomocniczej do obsługi bazy Oracle oraz bazy Postgress i Mongo z użyciem Python oraz Flask, Rozwój wewnętrznej aplikacji do przerzucania plików na serwer ftp(WinScp), utworzonej w NodeJs oraz Vue.JS",
        img: "conf.jpg",
        delay: 300
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