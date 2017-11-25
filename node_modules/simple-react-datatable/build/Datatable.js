'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require('jquery');
$.DataTable = require('datatables.net');

var Datatable = function (_Component) {
  (0, _inherits3.default)(Datatable, _Component);

  function Datatable() {
    (0, _classCallCheck3.default)(this, Datatable);
    return (0, _possibleConstructorReturn3.default)(this, (Datatable.__proto__ || (0, _getPrototypeOf2.default)(Datatable)).apply(this, arguments));
  }

  (0, _createClass3.default)(Datatable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initTable();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateTable();
    }
  }, {
    key: 'initTable',
    value: function initTable() {
      $(this.refs.dt).DataTable({
        dom: "<'dtpadding' <'row' <'clmn' C> <'srch' f> <'tablerow' l> <'clear'> <'masterbutton' B> r> <'row pb' tip>>",
        autoWidth: true,
        oLanguage: {
          sSearch: '',
          sLengthMenu: "Show _MENU_ Entries",
          sInfo: "Showing ( _START_ to _END_ ) to _TOTAL_ Entries"
        }
      });
    }
  }, {
    key: 'updateTable',
    value: function updateTable() {
      var _this2 = this;

      var table = $(this.refs.dt).DataTable();
      table.clear();
      this.props.data.forEach(function (dt) {
        var row_data = [];
        _this2.props.cols.forEach(function (c) {
          row_data.push(dt[c.key]);
        });
        table.row.add(row_data);
      });
      table.draw();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var cols = this.props.cols.map(function (c) {
        return _react2.default.createElement(
          'th',
          { key: c.name },
          c.name
        );
      });

      var data = this.props.data.map(function (dt) {

        var row_data = _this3.props.cols.map(function (rd) {
          return _react2.default.createElement(
            'td',
            { key: Date.now() + Math.random() },
            dt[rd.key]
          );
        });

        return _react2.default.createElement(
          'tr',
          { key: dt.id },
          row_data
        );
      });

      return _react2.default.createElement(
        'table',
        { ref: 'dt' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            cols
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          data
        )
      );
    }
  }]);
  return Datatable;
}(_react.Component);

exports.default = Datatable;