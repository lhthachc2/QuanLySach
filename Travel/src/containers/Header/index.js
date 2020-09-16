import React from "react";
import { Layout } from "antd";
import HeaderPC from "./HeaderPC";
const { Header } = Layout;

const Index = React.memo(() => {
  return (
    <Header className="header">
      <HeaderPC />
    </Header>
  );
});
export default Index;
