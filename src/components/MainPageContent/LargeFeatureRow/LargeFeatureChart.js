import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "Coffee", uv: 4000, amt: 2400 },
  { name: "Soda", uv: 3000, amt: 2210 },
  { name: "Green Tea", uv: 2000, amt: 2290 },
  { name: "Water", uv: 2780, amt: 2000 },
  { name: "Black Tea", uv: 1890, amt: 2181 },
  { name: "Red Bull", uv: 2390, amt: 2500 }
];

const StyledChartWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.3);
  color: #45494a;
  transition: all 0.2s;
  padding: 15px 20px;
`;

const StyledChartTitle = styled.div`
  margin-bottom: 5px;

  p {
    font-size: 1.2rem;
  }
`;

const colors = [
  "#ff55b3",
  "#f78A6D",
  "#ffc86D",
  "#937cfe",
  "#65b1f3",
  "#92ddf6"
];

class CustomizedAxisTick extends Component {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={3}
          textAnchor="end"
          fill="#666"
          transform="rotate(-90)"
          fontSize="11"
        >
          {payload.value}
        </text>
      </g>
      // <Text
      //   x={x}
      //   y={y}
      //   textAnchor="middle"
      //   verticalAnchor="start"
      //   fontSize="11"
      //   fill="#666"
      // >
      //   {payload.value}
      // </Text>
    );
  }
}

class LargeFeatureChart extends Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <StyledChartWrapper>
          <StyledChartTitle>
            <p>{this.props.chartTitle}</p>
          </StyledChartTitle>
          <ResponsiveContainer height={250}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                fontSize={11}
                interval={0}
                height={55}
                tick={<CustomizedAxisTick />}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                unit="mg"
                fontSize={11}
              />
              <CartesianGrid
                horizontal={true}
                vertical={false}
                stroke="#ececec"
              />
              <Tooltip cursor={false} />
              <Bar dataKey="uv" barSize={20}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </StyledChartWrapper>
      </Col>
    );
  }
}

export default LargeFeatureChart;
