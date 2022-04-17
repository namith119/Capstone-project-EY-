import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      product: "John Smith",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "EMS web application",
      date: "1 March",
      amount: "Team Leader",
      method: "31 March",
      status: "Pending",
    },
    {
      id: 2,
      product: "Michael Doe",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "EMS web application",
      date: "1 March",
      amount: "Front-End Developer",
      method: "31 March",
      status: "Pending",
    },
    {
      id: 3,
      product: "John Smith",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "EMS web application",
      date: "1 March",
      amount: "Front-End Developer",
      method: "31 March",
      status: "Pending",
    },
    {
      id: 4,
      product: "Jane Smith",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "EMS web application",
      date: "1 March",
      amount: "Back-End Developer",
      method: "31 March",
      status: "Pending",
    },
    {
      id: 5,
      product: "Harold Carol",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "EMS we application",
      date: "1 March",
      amount: "Back-End Developer",
      method: "31 March",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Sl No</TableCell>
            <TableCell className="tableCell">Employee Name</TableCell>
            <TableCell className="tableCell">Project Name</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Role</TableCell>
            <TableCell className="tableCell">Target Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
