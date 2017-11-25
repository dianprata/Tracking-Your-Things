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


class Verify extends Component {
    constructor(props){
        super(props);

        this.state = {
            post: []
        }
    }

    componentDidMount(){
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
                    <tr>
                      <td>Yiorgos Avraamu</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                      <td><Button color="success">Verify</Button> <Button color="warning">Decline</Button></td>
                    </tr>
                    <tr>
                      <td>Avram Tarasios</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                      <td><Button color="success">Verify</Button> <Button color="warning">Decline</Button></td>
                    </tr>
                    <tr>
                      <td>Quintin Ed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                      <td><Button color="success">Verify</Button> <Button color="warning">Decline</Button></td>
                    </tr>
                    <tr>
                      <td>Enéas Kwadwo</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                      <td><Button color="success">Verify</Button> <Button color="warning">Decline</Button></td>
                    </tr>
                    <tr>
                      <td>Agapetus Tadeáš</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                      <td><Button color="success">Verify</Button> <Button color="warning">Decline</Button></td>
                    </tr>
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
