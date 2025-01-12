
import { Layout, Menu, MenuProps, theme } from "antd";
import { createElement, Suspense } from "react";
import { Outlet } from "react-router";


const {Content,Header,Sider,Footer} = Layout;


const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Home'
    },
    {
        key: '2',
        label: 'Pop'
    },
    {
        key: '3',
        label: 'User management',
        children:[
            {
                key: '11',
                label: 'user-1' 
            },
            {
                key: '12',
                label: 'user-2' 
            }
        ]
    }
]


const MainLayout = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return (
        <Layout style={{height: "100vh"}} >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
            <div className=" text-center text-white text-xl font-semibold mt-4">
                <h1>Nexen University</h1>
            </div>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
             <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet /> {/* Nested routes are rendered here */}
        </Suspense>
      </main>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
};

export default MainLayout;