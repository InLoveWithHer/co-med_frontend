import {makeAutoObservable} from "mobx";

export default class NewsStore {
    constructor() {
        this._news = []
        makeAutoObservable(this)
    }

    setNews(news) {
        this._news = news
    }

    setUsers(users) {
        this._users = users
    }

    get news() {
        return this._news
    }

    get users() {
        return this._users
    }




}