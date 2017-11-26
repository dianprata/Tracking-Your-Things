import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button, FormGroup, Label, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {postRequest, getRequest} from "../../../helper/network";

class Category extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            nameEdit: "",
            categoryId: "",
            category: [],
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    componentDidMount(){
        this.fetchCategory();
    }

    onChangeCategoryName(e){
        this.setState({ name: e.target.value });
    }

    onChangeCategoryNameEdit(e){
        this.setState({ nameEdit: e.target.value })
    }

    doCreateCategory(){
        let payload = {
            name: this.state.name
        }
        postRequest('/api/category/create',payload,(res) => {
            this.fetchCategory();
            console.log(res);
        }, (err) => {
            console.log(err);

        });
    }

    doDestroyCategory(e){
        let payload = {
            id: e.target.id
        }
        getRequest('/api/category/destroy/'+payload.id,(res) => {
            this.fetchCategory();
            console.log(res);
        }, (err) => {
            console.log(err);

        });
    }

    doEditCategory(){
        this.setState({
            modal: !this.state.modal
        })
        let payload = {
            id: this.state.categoryId,
            name: this.state.nameEdit
        }
        postRequest('/api/category/edit/'+payload.id,payload,(res) => {
            this.fetchCategory();
            console.log(res);
        }, (err) => {
            console.log(err);

        });
    }

    fetchCategory(){
        getRequest('/api/category/show', (res) => {
            this.setState({ category: res.data });
        }, (err) => {
            console.log(err);
        });
    }

    getCategoryId(e){
        this.setState({
            categoryId: e.target.id,
            modal: !this.state.modal
        });
    }

  render() {
    return (
      <div className="animated fadeIn">
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Category</strong>
                <small> Form</small>
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup>
                  <Label htmlFor="name">Category Name</Label>
                  <Input type="text" id="name" placeholder="Enter your category name" onChange={this.onChangeCategoryName.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Button color="success" onClick={this.doCreateCategory.bind(this)}>Create</Button>
                </FormGroup>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Active Category
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>

                  { this.state.category.map((category) => {
                      return(
                        <tr key={category.id}>
                            <td>{ category.name }</td>
                            <td>
                                <Button onClick={this.getCategoryId.bind(this)} id={category.id} color="warning">Edit</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                  <ModalHeader toggle={this.toggle}>Edit Category</ModalHeader>
                                  <ModalBody>
                                  <FormGroup>
                                    <Label htmlFor="name">Category Name</Label>
                                    <Input type="text" id="name" placeholder="Enter your category name" onChange={this.onChangeCategoryNameEdit.bind(this)} />
                                  </FormGroup>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button color="primary" color="warning" onClick={this.doEditCategory.bind(this)}>Edit</Button>
                                    <Button color="secondary" color="primary" onClick={this.toggle}>Cancel</Button>
                                  </ModalFooter>
                                </Modal>
                                <Button color="danger" id={category.id} onClick={this.doDestroyCategory.bind(this)}>Delete</Button>
                             </td>
                        </tr>
                      )
                  }) }
                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>
      </div>
    )
  }
}

export default Category;
