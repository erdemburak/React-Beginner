import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'armaganim', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'burak', id: 2},
        {title: 'Wev dev top tips', body: 'lorem ipsum...', author: 'erdem', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;