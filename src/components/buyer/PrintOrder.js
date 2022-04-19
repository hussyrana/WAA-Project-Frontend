
import { jsPDF } from "jspdf";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const PrintOrder = ({ order }) => {

    const handlePDF = () => {
        const pdf = new jsPDF('p', 'pt', 'letter');

        const source = document.getElementById(`print-order-${order.id}`);

        pdf.html(source, {
            callback: function (doc) {
                doc.save(`order_${order.id}.pdf`);
            },
            x: 10,
            y: 10
        });

    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>Print Order</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style} >
                    <div id={`print-order-${order.id}`}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Order Summary:
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Price</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{row.name}</TableCell>
                                            <TableCell >{row.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Total: ${order.map(item => item.price)
                                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
                        </Typography>
                    </div>
                    <Button onClick={handlePDF}>
                        PDF
                    </Button>
                </Box>
            </Modal>

        </>
    );
}