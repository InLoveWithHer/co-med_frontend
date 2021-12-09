import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateNews from "../components/modals/CreateNews";
import CreateRecipe from "../components/modals/CreateRecipe";
import DeleteNews from "../components/modals/DeleteNews";

const Admin = () => {
    const [createNewsVisible, setCreateNewsVisible] = useState(false)
    const [createRecipeVisible, setCreateRecipeVisible] = useState(false)
    const [deleteNewsVisible, setDeleteNewsVisible] = useState(false)

    return (
        <Container className="d-flex flex-column align-items-center">
            <Button
                variant={"outline-dark"}
                style={{width: 200}}
                className="mt-4 p-2"
                onClick={() => setCreateNewsVisible(true)}
            >
                Создать новость
            </Button>
            <Button
                style={{width: 200}}
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateRecipeVisible(true)}
            >
                Написать рецепт
            </Button>
            <Button
                style={{width: 200}}
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteNewsVisible(true)}
            >
                Удалить новость
            </Button>
            <CreateNews show={createNewsVisible} onHide={() => setCreateNewsVisible(false)}/>
            <CreateRecipe show={createRecipeVisible} onHide={() => setCreateRecipeVisible(false)}/>
            <DeleteNews show={deleteNewsVisible} onHide={() => setDeleteNewsVisible(false)}/>
        </Container>
    );
};

export default Admin;