import { Button } from "antd"

const Home = () => {
  return (
    <div>
      <div>
        Home
      </div>
      <Button 
      // className="text-3xl bg-red-500 p-6 rounded-3xl hover:bg-red-400"
      // style={{backgroundColor: "red"}}
      variant="dashed"
      style={{color:'#0000FF'}}
      type="primary">Primary Button</Button>
    </div>
  )
}

export default Home