import {makeAutoObservable} from "mobx";

export default class BlogStore {
    constructor() {
        this._blogs = [
            {
                id: 1,
                name: "Лучшая зубная паста",
                img: "sdsd.jpg",
                category: "Какая-то категория",
                author: "Дмитрий Олександрович",
                date: "10.02.2021"
            },
            {
                id: 2,
                name: "Лучшая зубная паста",
                img: "sdsd.jpg",
                category: "Какая-то категория",
                author: "Дмитрий Олександрович",
                date: "10.02.2021"
            },
            {
                id: 3,
                name: "Лучшая зубная паста",
                img: "sdsd.jpg",
                category: "Какая-то категория",
                author: "Дмитрий Олександрович",
                date: "10.02.2021"
            },
            {
                id: 4,
                name: "Лучшая зубная паста",
                img: "sdsd.jpg",
                category: "Какая-то категория",
                author: "Дмитрий Олександрович",
                date: "10.02.2021"
            }
        ]
        makeAutoObservable(this)
    }

    setBlogs(blogs) {
        this._blogs = blogs
    }

    get blogs() {
        return this._blogs
    }

}