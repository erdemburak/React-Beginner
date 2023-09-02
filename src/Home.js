import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'armaganim', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'burak', id: 2},
        {title: 'Wev dev top tips', body: 'lorem ipsum...', author: 'armaganim', id: 3}
    ]);

    const [name, setName] = useState('burak');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    },[name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('armaganim')}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;