import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const StyledTableWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.3);
  color: #45494a;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  height: 100%;
  overflow-y: hidden;
  padding: 15px 10px;

  &.collapsed {
    height: 60px;
  }
`;
const StyledTableTitle = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;

  .tableAction {
    color: #b6b6b6;
    font-size: 0.8rem;

    i {
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

const StyledTableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px;
  border-radius: 30px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f8f3;
  }
`;

const StyledTableCell = styled.div`
  i {
    margin-left: 9px;
  }
  &.measurement-high {
    color: rgba(255, 95, 69, 1);
  }

  &.measurement-normal {
    color: rgba(112, 210, 138, 1);
  }
`;

class LargeFeatureRowTable extends Component {
  state = {
    isOpen: true
  };

  toggleTable = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={6} xl={6} className="mb-5">
        <StyledTableWrapper
          className={
            this.state.isOpen ? "styledTable" : "styledTable collapsed"
          }
        >
          <StyledTableTitle>
            <p className="title">{this.props.tableTitle}</p>
            <span className="tableAction" onClick={this.toggleTable}>
              {this.state.isOpen ? (
                <span>
                  Close <i className="fas fa-chevron-down" />
                </span>
              ) : (
                <span>
                  Expand
                  <i className="fas fa-chevron-down" />
                </span>
              )}
            </span>
          </StyledTableTitle>
          {this.props.tableData.map(element => {
            return (
              <StyledTableRow key={element.id}>
                <StyledTableCell>{element.metric}</StyledTableCell>
                <StyledTableCell
                  className={
                    element.measurement > 50
                      ? "measurement measurement-high"
                      : "measurement measurement-normal"
                  }
                >
                  {element.measurement}
                  {element.measurement > 50 ? (
                    <i className="fas fa-chevron-up" />
                  ) : (
                    <i className="fas fa-chevron-down" />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </StyledTableWrapper>
      </Col>
    );
  }
}

export default LargeFeatureRowTable;
