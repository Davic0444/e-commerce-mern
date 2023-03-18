import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

import { useState, useEffect } from "react";

const UsersPageComponent = ({ fetchUsers }) => {
    const [users, setUsers] = useState([]);

    const deleteHandler = () => {
        if (window.confirm("Are you sure?")) alert("User deleted!");
    };

    useEffect(() => {
        const abctrl = new AbortController();
        fetchUsers(abctrl)
            .then((res) => setUsers(res))
            .catch((er) =>
                console.log(
                    er.response.data.message ? er.response.data.message : er.response.data
                )
            );
        return () => abctrl.abort();
    }, []);

    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />
            </Col>
            <Col md={10}>
                <h1>User List</h1>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Is Admin</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(
                        (user, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.isAdmin ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}
                                </td>
                                <td>
                                    <LinkContainer to={`/admin/edit-user/${user._id}`}>
                                        <Button className="btn-sm">
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                    </LinkContainer>
                                    {" / "}
                                    <Button
                                        variant="danger"
                                        className="btn-sm"
                                        onClick={deleteHandler}
                                    >
                                        <i className="bi bi-x-circle"></i>
                                    </Button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default UsersPageComponent;