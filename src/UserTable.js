import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const UserTable = ({ rows }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                maxWidth: 800,
                margin: "30px auto",
                padding: 2,
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#1e3c72" }}>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Name</TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row, index) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                                    "&:hover": { backgroundColor: "#e0f7fa" },
                                    "&:last-child td, &:last-child th": { border: 0 },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{
                                            margin: "0px 5px",
                                            backgroundColor: "#4caf50",
                                            color: "#fff",
                                            "&:hover": { backgroundColor: "#45a049" },
                                            borderRadius: 1,
                                        }}
                                        onClick={() => { }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        sx={{
                                            margin: "0px 5px",
                                            backgroundColor: "#f44336",
                                            color: "#fff",
                                            "&:hover": { backgroundColor: "#d32f2f" },
                                            borderRadius: 1,
                                        }}
                                        onClick={() => { }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow
                            key="no-data"
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" colSpan={3} align="center">
                                No Data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
