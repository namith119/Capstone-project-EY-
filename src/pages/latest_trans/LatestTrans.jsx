import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./latest.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const LatestTrans = () => {
  return (
    <div className="latesttrans">
      <Sidebar />
      <div className="latesttransContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Current Project</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default LatestTrans;
