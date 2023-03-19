import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import RecentTransactionsTable from "../../components/RecentTransactionsTable/RecentTransactionsTable";
import "./Home.scss";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import ShowYesNo from "../../components/ModalYesNo";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        {/* <ShowYesNo /> */}
        <div className="listContainer">
          <div className="listTitle">Giao dịch gần đây</div>
          <RecentTransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
