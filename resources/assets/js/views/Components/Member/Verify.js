import React, {Component} from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from "reactstrap";
import {getRequest} from "../../../helper/network";


class Verify extends Component {
    constructor(props){
        super(props);

        this.state = {
            unactiveMember: [],
            activeMember: []
        }
    }

    componentDidMount(){
        this.fetchUnactiveMember();
        this.fetchActiveMember();
    }

    fetchUnactiveMember(){
        getRequest('/api/member/unactive', (res) => {
            this.setState({ unactiveMember: res.data });
            console.log(this.state.unactiveMember);
        }, (err) => {
            console.log(err);
        });
    }

    fetchActiveMember(){
        getRequest('/api/member/active', (res) => {
            this.setState({ activeMember: res.data });
            console.log(this.state.activeMember);
        }, (err) => {
            console.log(err);
        });
    }

    doVerify(e){
        let payload = {
            id: e.target.id
        }

        console.log(payload);
        getRequest('/api/user/activate/'+payload.id, (res) => {
            this.fetchUnactiveMember();
            this.fetchActiveMember();
        }, (err) => {
            console.log(err);
        });
    }

    doDecline(e){
        let payload = {
            id: e.target.id
        }

        getRequest('/api/user/unverify/'+payload.id, (res) => {
        }, (err) => {
            console.log(err);
        });
    }

    doDeactive(e){
        let payload = {
            id: e.target.id
        }

        getRequest('/api/user/deactive/'+payload.id, (res) => {
            console.log(res.data);
            this.fetchUnactiveMember();
            this.fetchActiveMember();
        }, (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Unverified Member
                </CardHeader>
                <CardBlock className="card-body">
                  <Table responsive striped>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    { this.state.unactiveMember.map((member) => {
                        return (
                            <tr key={ member.id.toString() }>
                                <td>{ member.name }</td>
                                <td>{ member.email }</td>
                                <td>{ member.company }</td>
                                <td>
                                {(() => {
                                        switch (true) {
                                            case (member.active === 0):
                                                return <Badge color="secondary">Inactive</Badge>;
                                        }
                                })()}
                                </td>
                                <td><Button color="success" id={ member.id } onClick={this.doVerify.bind(this)} >Verify</Button> <Button color="warning" onClick={this.doDecline.bind(this)} id={ member.id }>Decline</Button></td>
                            </tr>
                        )
                    }) }
                    </tbody>
                  </Table>
                </CardBlock>
              </Card>
            </Col>

            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Active Member
                </CardHeader>
                <CardBlock className="card-body">
                  <Table responsive striped>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    { this.state.activeMember.map((member) => {
                        return (
                            <tr key={ member.id.toString() }>
                                <td>{ member.name }</td>
                                <td>{ member.email }</td>
                                <td>{ member.company }</td>
                                <td>
                                {(() => {
                                        switch (true) {
                                            case (member.active === 1):
                                                return <Badge color="success">ACTIVE</Badge>;
                                        }
                                })()}
                                </td>
                                <td><Button color="danger" id={ member.id } onClick={this.doDeactive.bind(this)} >Deactive</Button></td>
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

export default Verify;
