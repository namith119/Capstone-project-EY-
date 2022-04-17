export const userColumns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
        </div>
      );
    },
  },
  {
    field: "empid",
    headerName: "Employee Id",
    width: 100,
    renderCell: (params) => {
      return (
        <div>
          {params.row.empid}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Full Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          {params.row.displayName}
        </div>
      );
    },
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          {params.row.designation}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "location",
    headerName: "Location",
    width: 140,
    renderCell: (params) => {
      return (
        <div>
          {params.row.country}
        </div>
      );
    },
  },
];
