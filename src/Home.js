import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'armaganim', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'burak', id: 2},
        {title: 'Wev dev top tips', body: 'lorem ipsum...', author: 'erdem', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
     );
}
 
export default Home;