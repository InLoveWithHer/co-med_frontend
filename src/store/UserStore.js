import {makeAutoObservable} from "mobx";
import {retrieveUser} from "../index";

export default class UserStore {
    constructor() {
        let token = localStorage.getItem('token');
        let user;

        if (token) {
            retrieveUser().then(r => {
                user = r.data;

                if (user) {
                    this._isAuth = true
                    this._user = user
                    this._role = user.role_id
                    this._users = []
                } else {
                    this._isAuth = false
                    this._user = {}
                    this._role = {}
                    this._users = []
                }

                console.log(this._user)
                makeAutoObservable(this)
            }).catch(e => {

            });
        } else {
            this._isAuth = false
            this._user = {}
            this._role = {}
            this._users = []
            makeAutoObservable(this)
        }
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setRole(role) {
        this._role = role
    }

    setUser(user) {
        this._user = user
    }
    setUsers(users) {
        this._users = users
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get role() {
        return this._role
    }

    get users() {
        return this._users
    }
}