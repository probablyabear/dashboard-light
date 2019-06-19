import React from "react";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const iconColors = {
  green: {
    dark: "rgba(112, 210, 138, 1);",
    light: "rgba(112, 210, 138, 0.3);"
  },
  pink: {
    dark: "rgba(247, 123, 199, 1);",
    light: "rgba(247, 123, 199, 0.3);"
  },
  orange: {
    dark: "rgba(255, 95, 69, 1);",
    light: "rgba(255, 95, 69, 0.3);"
  },
  blue: {
    dark: "rgba(65, 213, 252, 1);",
    light: "rgba(65, 213, 252, 0.3);"
  },
  default: {
    dark: "rgba(204, 204, 204, 1);",
    light: "rgba(204, 204, 204, 0.3);"
  }
};

const RowItem = styled.div`
  background: #ffffff;
  margin-bottom: 35px;
  border-radius: 8px;
  padding: 30px 25px;
  transition: all 0.2s;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: solid 3px transparent;

  &:hover {
    border-bottom: solid 3px #84c795;
  }
`;

const RowItemIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props =>
    props.green
      ? iconColors.green.light
      : props.blue
      ? iconColors.blue.light
      : props.pink
      ? iconColors.pink.light
      : props.orange
      ? iconColors.orange.light
      : iconColors.default.light};
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  i {
    color: ${props =>
      props.green
        ? iconColors.green.dark
        : props.blue
        ? iconColors.blue.dark
        : props.pink
        ? iconColors.pink.dark
        : props.orange
        ? iconColors.orange.dark
        : iconColors.default.dark};
  }
`;

const RowItemTextContent = styled.div`
  color: #45494a;
  margin-left: 20px;

  .statTitle {
    margin-bottom: 0;
  }

  .statValue {
    font-size: 2em;
    margin-right: 10px;
  }

  .statSeeMoreWrapper {
    a {
      text-decoration: none;
    }
    .statSeeMoreLink {
      color: #9489ce;
      font-size: 0.85rem;

      span {
        margin-right: 8px;
      }
    }
  }
`;

const SmallFeatureRowItem = props => {
  return (
    <Col xs={12} sm={12} md={12} lg={3} xl={3}>
      <RowItem>
        <RowItemIcon {...props}>
          <i className="fas fa-running fa-2x" />
        </RowItemIcon>
        <RowItemTextContent>
          <p className="statTitle">{props.statTitle}</p>
          <span className="statValue">{props.statValue}</span>
          <span className="statValueLabel">items</span>
          <div className="statSeeMoreWrapper">
            <a href="/">
              <span className="statSeeMoreLink">
                <span>See More</span>
                <i className="far fa-arrow-alt-circle-right" />
              </span>
            </a>
          </div>
        </RowItemTextContent>
      </RowItem>
    </Col>
  );
};

export default SmallFeatureRowItem;
