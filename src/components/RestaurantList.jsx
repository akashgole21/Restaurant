import React, { Component } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import NavBarManu from "./NavBarManu ";

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
  }

  delete(id) {
    fetch('http://localhost:3000/restaurant/'+id,
    {
      method:"DELETE",
      // headers:{
      //   'Content-Type':'application/json'
      // }

    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been Deleted");
        this.getData();
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
              <h1 style={{margin:'40px 0px 20px'}}>Restaurant List</h1>
              {this.state.list?
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Location</th>
                        <th>Operation</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.list.map((item, index) =>
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.rating}</td>
                          <td>{item.address}</td>
                          <td>
                            <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} /></Link>
                            <span style={{marginLeft:"20px"}} onClick={()=>this.delete(item.id)}>
                              <FontAwesomeIcon icon={faTrashCan} color="red" />
                            </span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              : <p>Please Wait...</p>
              }
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
