import React, { Component } from 'react';
import NavBarManu from './NavBarManu ';
import { Container, Row, Col } from "react-bootstrap";
class LoginOld extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                    console.warn(this.props.history.push('lists'))
                }
                else {
                    alert("Please check username and password")
                }

            })
        })
    }


    render() {
        return (
            <>
                <NavBarManu />
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ margin: '40px 0px 20px' }}>Login</h1>
                            <input
                                type="text"
                                placeholder="enter name"
                                name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                            <input
                                placeholder="enter password"
                                type="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /> <br />
                            <button onClick={() => { this.login() }} >Login</button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default LoginOld;