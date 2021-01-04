import React from "react";
import styled from "styled-components";
import { Table } from "antd";

const ActivePositions = () => {
  const dataSource = [
    {
      number: "1",
      name: "ETH Straddle $580/$610",
      expiry: "12/01/2021 (3 days 2 hours remaining)",
      pnl: "$102 (+20%)",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Expiry Date",
      dataIndex: "expiry",
      key: "expiry",
    },
    {
      title: "PNL",
      dataIndex: "pnl",
      key: "pnl",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ActivePositions;
