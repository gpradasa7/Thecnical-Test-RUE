import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    responsive: ["md"],
  },
  {
    title: "NOMBRE",
    dataIndex: "name",
    key: "name",
    responsive: ["md"],
  },
  {
    title: "EDAD",
    dataIndex: "age",
    key: "age",
    responsive: ["md"],
  },
  {
    title: "ESPECIE",
    dataIndex: "especie",
    key: "especie",
    responsive: ["md"],
  },
  {
    title: "ACCIÓN",
    dataIndex: "especie",
    key: "especie",
    responsive: ["md"],
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

const App = () => <Table columns={columns} dataSource={data} />;

export default App;
