import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NewsItem from "./NewsItem";

const NewsList = observer(() => {
    const {news} = useContext(Context)

    return (
        <div className="text-center">
            <div style={{marginLeft: 450, marginBottom:50}}><h4>Новости</h4></div>
            {news.news.map(news =>
                <NewsItem key={news.id} news={news}/>
            )}
        </div>

    );
});

export default NewsList;