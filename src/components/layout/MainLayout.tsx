import { Layout } from "antd";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const { Content, Header, Footer } = Layout;


const MainLayout = () => {
  return (
    <Layout className="h-[100%]" style={{height: '100vh'}}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
