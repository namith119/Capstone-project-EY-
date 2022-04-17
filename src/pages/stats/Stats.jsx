import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./stats.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Stats = () => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="statsContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="earning" />
        </div> */}
        <div className="charts">
          <Featured />
          <Chart title="Number of Employees joined:" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
