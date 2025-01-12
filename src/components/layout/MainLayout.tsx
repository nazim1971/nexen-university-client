import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import { createElement } from "react";


const {Content,Header,Sider,Footer} = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//       key: String(index + 1),
//       icon: createElement(icon),
//       label: `nav ${index + 1}`,
//     }),
//   );

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
        <Layout  style={{height: "100vh"}} >
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
            <div  style={{ color: 'wheat', textAlign: 'center', marginTop: '10px'}}>
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
             The main content should go here
            </div>
          </Content>
          <Footer className="text-3xl" style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
};

export default MainLayout;