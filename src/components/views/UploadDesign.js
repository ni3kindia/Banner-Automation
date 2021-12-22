import React from "react";



class UploadView extends React.Component {
  constructor() {
    super();
    this.state = {
      nextRow: [{}],
      fileName: "",
    };
  }

  handleChange = (data,index) => {
    var items = this.state.nextRow;

    console.log("filechanged--", data.target.files);
        this.setState(pre=>({
          nextRow:items
        }));
        console.log("the result---", this.state.nextRow);

    // this.setState({
    //   nextRow: items,
    // });
    // this.setState({color: "blue"});
  };
  addRow = (data) => {
    console.log("this is add method");

    this.state.nextRow.push(this.state.fileName);
    this.setState({
      nextRow: this.state.nextRow,
    });
  };

  removeRow = (index) => {
    var items = this.state.nextRow;

    items.splice(index, 1);

    this.setState({
      nextRow: items,
    });
  };

  render() {

    return (
      <div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Upload</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.nextRow.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <th scope="row">
                  <div className="input-group">
                    <input
                      type="file"
                      value={this.state.nextRow[index].fileName}
                      onChange={this.handleChange.bind(this)}
                      className="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon04"
                    >
                      Remove
                    </button>
                  </div>
                </th>

                <td>
                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button type="button" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.addRow}
                      >
                        Add
                      </button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Third group"
                    >
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => this.removeRow(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UploadView;
