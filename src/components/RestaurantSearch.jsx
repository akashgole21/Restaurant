import React, { Component } from 'react';
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import NavBarManu from "./NavBarManu ";

export default class RestaurantSearch extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: null,
  //     noData: false,
  //     lastSearch: "",
  //   }
  // }

  // search(key) {
  //   console.warn(key)
  //   fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
  //     data.json().then((resp) => {
  //       console.warn("resp", resp)
  //       if (resp.length > 0) {
  //         this.setState({ searchText: resp, noData: false })
  //       }
  //       else {
  //         // set noData to true only if the search term is not empty
  //       if (key !== '') {
  //         this.setState({ noData: true, searchText: null })
  //       }
  //       }

  //       // Update lastSearch here to reflect the current search term
  //       this.setState({ lastSearch: key });

  //     })
  //   })
  // }

  // delete(id) {
  //   fetch('http://localhost:3000/restaurant/' + id,
  //     {
  //       method: "DELETE",
  //       // headers:{
  //       //     'Content-Type':'application/json'
  //       // },
  //     }).then((result) => {
  //       result.json().then((resp) => {
  //         alert("Restaurant has heen Delete")
  //         this.search(this.state.lastSearch);
  //       })
  //     })


  // }

  constructor() {
    super()
    this.state = {
        searchText: null,
        noData:false,
        lastSearch:"",
    }
}
search(key) {
    console.warn(key)
    this.setState({lastSearch:key})
    fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
        data.json().then((resp) => {
            console.warn("resp", resp)
            if(resp.length>0)
            {
                this.setState({searchText:resp,noData:false})
            }
            else
            {
                this.setState({noData:true,searchText:null})
            }
        })
    })
}
delete(id)
{
    fetch('http://localhost:3000/restaurant/'+id,
    {
        method: "DELETE",
        // headers:{
        //     'Content-Type':'application/json'
        // },
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Restaurant has heen Delete")
            this.search(this.state.lastSearch)
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
              <h1 style={{ margin: '40px 0px 20px' }}>Restaurant Search</h1>
              <Form.Control
                type="text"
                placeholder="Search restaurant..."
                onChange={(event) => { this.search(event.target.value); }}
              />

              <div>
                {this.state.searchText ? (
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
                        {this.state.searchText.map((item) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.rating}</td>
                            <td>{item.address}</td>
                            <td>
                              <Link to={"/update/" + item.id}>
                                <FontAwesomeIcon icon={faEdit} />
                              </Link>
                              <span style={{ marginLeft: "20px" }} onClick={() => this.delete(item.id)}>
                                <FontAwesomeIcon icon={faTrashCan} color="red" />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                ) : ""}
                {this.state.noData ? <h3>No Data Found</h3> : null}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


