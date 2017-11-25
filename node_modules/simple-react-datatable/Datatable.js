import React, { Component } from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

class Datatable extends Component{

  componentDidMount(){
    this.initTable()
  }

  componentDidUpdate(){
    this.updateTable()
  }

  initTable(){
    $(this.refs.dt).DataTable({
      dom: "<'dtpadding' <'row' <'clmn' C> <'srch' f> <'tablerow' l> <'clear'> <'masterbutton' B> r> <'row pb' tip>>",
      autoWidth: true,
	  oLanguage: {
      sSearch: '',
      sLengthMenu: "Show _MENU_ Entries",
      sInfo: "Showing ( _START_ to _END_ ) to _TOTAL_ Entries"
      }
    })
  }

  updateTable(){
    const table = $(this.refs.dt).DataTable()
    table.clear()
    this.props.data.forEach(dt => {
      let row_data = []
      this.props.cols.forEach(c => {
        row_data.push(dt[c.key])
      })
      table.row.add(row_data)
    })
    table.draw()
  }

  render(){

    let cols = this.props.cols.map(c => {
      return (
        <th key={c.name}>{c.name}</th>
      )
    })

    let data = this.props.data.map(dt => {

      let row_data = this.props.cols.map(rd => {
        return (
          <td key={Date.now() + Math.random()}>{ dt[rd.key] }</td>
        )
      });

      return (
        <tr key={dt.id}>
          {row_data}
        </tr>
      )
    })

    return (
      <table ref="dt">
        <thead>
          <tr>
            {cols}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    )
  }

}

export default Datatable
