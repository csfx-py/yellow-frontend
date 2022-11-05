import {
  Button,
  Card,
  CardContent,
  Input,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import API from "../utils/API";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 24,
  p: 4,
};

function Repay() {
  const [data, setData] = useState();
  const [qrc, setQrc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    API.get(`/splitwise/expense/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const generateQR = async (text) => {
    try {
      console.log(await QRCode.toDataURL(text));
    } catch (err) {
      console.error(err);
    }
  };

  const genQR = (id, amount) => {
    return `upi://pay?pa=${id}&pn=Shreyas&am=${amount}&tn=yellow`;
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper sx={{ p: 2 }}>
            {data?.toUpi ? (
              <QRCode value={genQR(data?.toUpi, data.repayments[0].amount)} />
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Enter UPI ID
                </Typography>

                <Input
                  type="text"
                  onChange={(e) => {
                    setQrc(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    setData({ ...data, toUpi: qrc });
                    console.log(qrc);
                  }}
                >
                  Generate QR
                </Button>
              </>
            )}
          </Paper>
        </Box>
      </Modal>
      <Box
        sx={{
          padding: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ padding: 5, width: "100%" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Repay
            </Typography>
            <Typography variant="body2">
              {/* {console.log(data.repayments)} */}
              {data?.repayments[0] && (
                <Typography>
                  <b>
                    {`${data.repayments[0].fromUser.user.first_name} ${data.repayments[0].fromUser.user.last_name} `}
                  </b>
                  {" paid "}
                  <b>
                    {`${data.repayments[0].toUser.user.first_name} ${data.repayments[0].toUser.user.last_name} `}
                  </b>
                  {data.repayments[0].amount}
                </Typography>
              )}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Pay
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Repay;
