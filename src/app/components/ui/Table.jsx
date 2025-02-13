import TableStyle from "@/styles/table.styled";
const Table = ({ children }) => {
    return (
        <TableStyle>
            <table>{children}</table>
        </TableStyle>
    );
};

export default Table;
