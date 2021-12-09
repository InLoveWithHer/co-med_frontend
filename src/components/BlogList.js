import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BlogItem from "./BlogItem";

const BlogList = observer(() => {
    const {blog} = useContext(Context)

    return (
        <div className="text-center">
            <h4>Все статьи</h4>
            {blog.blogs.map(blog =>
                <BlogItem key={blog.id} blog={blog}/>
            )}
        </div>

    );
});

export default BlogList;