
import YourAccount from "./YourAccount";
import Cards from "./Cards";
import Slider from "../Orders/slider";

function Account() {
  const hrStyle = {
    width: '90%',
    height: '1px',
    backgroundColor: '#58B310',
    border: 'none',
    marginTop: '40px',
    marginLeft: "5%",
    position: 'relative',
  };

  return <div className="sm:pb-5" style={{ paddingTop: "7vh", paddingBottom: "7vh" }}>
    <YourAccount />
    {/* <hr style={hrStyle} /> */}
    {/* <Cards /> */}
    {/* <hr style={hrStyle} /> */}
    {/* <div style={{ paddingInline: "5vw" }}> <Slider /></div> */}
  </div>;
}

export default Account;
