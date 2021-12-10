import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CreateNews from "../components/modals/CreateNews";
import http from "../utils/http";

const ManageStaff = observer(() => {
    const {user} = useContext(Context)
    const [createStaffVisible, setCreateStaffVisible] = useState(false)

    const fetchNews = async () => {
        return await http.get('api/staff');
    }

    const getUsers = () => {
        fetchNews().then(r => {
            user.setUsers(r.data);
            console.log(r.data)
        }).catch();
    }

    getUsers()

    return (
        <Container>
            <Button
                variant={"outline-dark"}
                style={{width: 200}}
                className="mt-4 p-2"
                onClick={() => setCreateStaffVisible(true)}
            >
                Создать роль
            </Button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Пользователь</th>
                    <th scope="col">Роль</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                {/*{user.users.map(user => user.map(u =>*/}
                {/*    <tr key={u.id}>*/}
                {/*        <td>{u.name}</td>*/}
                {/*        <td>{u.role_id}</td>*/}
                {/*        <td>*/}
                {/*            <button className="btn btn-outline-primary" type="button">Удалить</button>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
            </table>
            <CreateNews show={createStaffVisible} onHide={() => setCreateStaffVisible(false)}/>
        </Container>
    );
});

export default ManageStaff;