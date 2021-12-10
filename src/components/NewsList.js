import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NewsItem from "./NewsItem";
import http from "../utils/http";
import {render} from "@testing-library/react";

const NewsList = observer(() => {
    const {news} = useContext(Context)
    const fetchNews = async () => {
        return await http.get('api/news');
    }

    const getNews = () => {
        fetchNews().then(r => {
            news.setNews(r.data);
        }).catch();
    }

    getNews();

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