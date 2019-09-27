import React, { Component } from 'react';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  returnRows(row, data){
      var rows = [], elem;
      let columns = ["contact_name","company_name","email","phone","gst","outstanding_receivable_amount","payable"];
      for(var i=0; i< columns.length; i++){
        elem = <div className="div-table-cell" id={data[row].contact_id} key={row*23*i}>
                                  {data[row][columns[i]]}
                                </div>
        rows.push(elem);
      }
      return rows;
  }
  render() {
   const contacts = this.props.contacts;
   let colHeaders = [], rows = [], nodata = [];
   let headers = ["NAME","COMPANY NAME","EMAIL", "WORK PHONE","GST TREATMENT", "RECEIVABLES", "PAYABLES"];
   for(var i=0; i< headers.length; i++){
     colHeaders.push(<div className="div-table-head" key={i}>{headers[i]}</div>);
   }
   for(var j=0; j< contacts.length; j++){
     var row = <div className="div-table-row" key={j*103}>
                  {this.returnRows(j, contacts[j].contacts)}
                </div>
    rows.push(row);
     }
     if(contacts.length == 0){
       var row = <div className="no-data" key={1023}> No Data to display</div>
       nodata.push(row);
     }
   return (
     <div>
        <div className="div-table">
          <div className="div-table-heading">
            <div className="div-table-row">
              {colHeaders}
            </div>
          </div>
          <div className="div-table-body">
            {rows}
          </div>
        </div>
        {nodata}
     </div>
   )
}
}

export default Contacts;
