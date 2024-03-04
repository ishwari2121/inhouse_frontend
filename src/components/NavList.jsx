import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box } from "@mui/material";

import moment from "moment";
import axios from "axios";
<<<<<<< HEAD
import logo from "../assets/pictlogo.png";
=======
>>>>>>> 02b1a27c7acf564dce358eb23e2d729279eae118

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Input,
  Textarea,
  MenuItem,
  Avatar,
  Tooltip,
  IconButton,
  Card,
  Select,
  Option,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  // Square3Stack3DIcon,
  ChevronDownIcon,
  // InboxArrowDownIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { resetUser } from "../redux/user/userSlice";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "/dashboard",
  },
  // {
  //   label: "Achievements",
  //   icon: Square3Stack3DIcon,
  //   link: "/general",
  // },
  // {
  //   label: "Inbox",
  //   icon: InboxArrowDownIcon,
  //   link: "/general",
  // },
  // {
  //   label: "Help",
  //   icon: LifebuoyIcon,
  // },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ currUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  const closeMenu = (isLastItem, link) => {
    setIsMenuOpen(false);
    if (isLastItem) {
      handleOpen("xs");
    } else {
      navigate(currUser + link);
    }
  };

  const handleLogout = () => {
    handleOpen(null);
    dispatch(resetUser());
    navigate("/");
    toast.success("Logout Successful", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          if (currUser === "/a" && link === "/general") {
            console.log("Inside not happening");
            return <div key={label}></div>;
          } else {
            return (
              <MenuItem
                key={label}
                onClick={() => closeMenu(isLastItem, link)}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          }
        })}
      </MenuList>

      <Dialog
        open={size === "xs" || size === "sm"}
        size={size || "sm"}
        handler={handleOpen}
      >
        <DialogHeader>Warning</DialogHeader>
        <DialogBody>Are you sure you want to logout ?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleLogout()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Menu>
  );
}

export default function NavList() {
  const { currentUser } = useSelector((state) => state.user);

  //  notification modal ---------------
  const [notices, setNotices] = useState([]);
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [isSendModalOpen, setSendModalOpen] = useState(false);
  const [usernames, setusernames] = useState([]);
  let teachers = [];

  // const [tableData, setTableData] = useState({
  //   students: [],
  //   teachers: [],
  // });
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0];
  };
  const [notificationData, setNotificationData] = useState({
    Username: currentUser?.Username,
    Title: "",
    Description: "",
    Role: currentUser?.Role,
    DateTime: getCurrentDate(),
    Receiver: currentUser?.Role === 1 ? "adminasg@gmail.com" : "",
  });

  const fetchAllTeachers = async () => {
    try {
<<<<<<< HEAD
      const apiUrl = "http://10.10.15.150:8081/api/v1/auth/getAllTeacher";
=======
      const apiUrl = "http://localhost:5000/api/v1/auth/getAllTeacher";
>>>>>>> 02b1a27c7acf564dce358eb23e2d729279eae118
      const response = await axios.get(apiUrl);
      console.log(response?.data?.data);
      teachers = response?.data?.data;

      const usernamesArray = teachers.map((item) => ({
        value: item.Username,
        label: item.Username,
      }));
      usernamesArray.unshift({ value: "All", label: "All" });
      setusernames(usernamesArray);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotices = async () => {
    try {
      console.log(currentUser?.Role, currentUser?.Username);
<<<<<<< HEAD
      const apiUrl = "http://10.10.15.150:8081/api/v1/general/get-notices";
      console.log("Info = ", currentUser?.Role, currentUser?.Username)
=======
      const apiUrl = "http://localhost:5000/api/v1/general/get-notices";
>>>>>>> 02b1a27c7acf564dce358eb23e2d729279eae118
      const response = await axios.post(apiUrl, {
        Role: currentUser?.Role,
        Username: currentUser?.Username,
      });
      console.log("Notices:", response.data.data);

      // Update the state with fetched notices
      setNotices(response.data.data);
    } catch (error) {
      console.error("Error fetching notices:", error.message);
    }
  };

  const handleOpenNotificationModal = () => {
    setNotificationModalOpen(true);
    fetchNotices();
  };

  const handleCloseNotificationModal = () => {
    setNotificationModalOpen(false);
  };

  const handleOpenSendModal = () => {
    setSendModalOpen(true);
    fetchAllTeachers();
    // Close the notification modal when opening the send modal
    handleCloseNotificationModal();
  };

  const handleCloseSendModal = () => {
    setSendModalOpen(false);
  };

  const handleNotificationChange = (e) => {
    const { name, value } = e.target;
    setNotificationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitNotification = async (e) => {
    e.preventDefault();
    console.log(notificationData);

    const finalData = {
      ...notificationData,
      Receiver: notificationData.Receiver,
    };
    console.log("final", finalData);
    try {
<<<<<<< HEAD
      const apiUrl = "http://10.10.15.150:8081/api/v1/general/send-notice";
=======
      const apiUrl = "http://localhost:5000/api/v1/general/send-notice";
>>>>>>> 02b1a27c7acf564dce358eb23e2d729279eae118
      await axios.post(apiUrl, finalData);

      // console.log(response);

      // Fetch notices again after sending a new notification
      fetchNotices();

      // Clear the form data
      setNotificationData({
        Title: "",
        Description: "",
        Receiver: "",
      });

      // Close the modal
      handleCloseSendModal();
    } catch (error) {
      console.error("Error sending notification:", error);
      // Handle error as needed
    }
  };

  var pathLink = "";

  if (currentUser && currentUser.Role === 0) {
    pathLink = "/a";
  } else if (currentUser && currentUser.Role === 1) {
    pathLink = "/t";
  } else if (currentUser && currentUser.Role === 2) {
    pathLink = "/s";
  }

  return (
    <nav className=" block w-full rounded-xl border  border-white/80 bg-white bg-opacity-80 py-2 px-2 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
      <div>
        <div className="w-full flex items-center px-2 gap-x-2 justify-between text-gray-900">
<<<<<<< HEAD
          <img src={logo} className="w-16 h-16" />
=======
          <img src="../../src/assets/pictlogo.png" className="w-16 h-16" />
>>>>>>> 02b1a27c7acf564dce358eb23e2d729279eae118
          <Link
            to={"/"}
            className="mr-4 w-full font-bold cursor-pointer py-1.5 font-sans text-2xl leading-normal text-inherit antialiased"
          >
            <span>PICT</span>
          </Link>

          {currentUser === null ? (
            <Link
              to={"/auth/login"}
              className=" w-full flex items-center justify-end"
            >
              <button
                className=" rounded-lg bg-gradient-to-tr px-4 bg-blue-500 py-2  font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                type="button"
                data-ripple-light="true"
              >
                <span>Log In</span>
              </button>
            </Link>
          ) : (
            <div className="flex gap-4">
              {currentUser?.Role !== 2 && (
                <Tooltip
                  content="Notifications"
                  placement="left"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 0 },
                  }}
                >
                  <IconButton
                    className="bg-white rounded-full p-2 shadow-none hover:shadow-none"
                    onClick={handleOpenNotificationModal}
                  >
                    <NotificationsActiveIcon color="warning" />
                  </IconButton>
                </Tooltip>
              )}
              <div className=" w-full flex items-center justify-end">
                <i className="fa-solid fa-user"></i>
                <ProfileMenu currUser={pathLink} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Notification Modal */}
      <Modal
        open={isNotificationModalOpen}
        onClose={handleCloseNotificationModal}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            maxWidth: "80vw",
            maxHeight: "80vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            margin: "20px", // Add margin
          }}
          className="flex flex-col gap-2 rounded-md shadow-md"
        >
          <div className="flex justify-between relative">
            <div>
              <Tooltip
                content="Send Notifications"
                placement="top"
                style={{ position: "absolute" }}
                className="z-50"
              >
                <Button
                  className="text-white hover:bg-black"
                  onClick={handleOpenSendModal}
                >
                  Send Notification
                </Button>
              </Tooltip>
            </div>
            <div>
              <Typography
                variant="h4"
                color="black"
                className="mb-2 text-center"
              >
                Notices
              </Typography>
            </div>
            <div>
              <Button
                className="text-white bg-red-600 p-2 hover:bg-red-700"
                onClick={handleCloseNotificationModal}
              >
                <CloseIcon />
              </Button>
            </div>
          </div>

          {/* Icon to open Send Notice Modal */}

          {notices?.map((notice, index) => (
            <Card
              key={index}
              shadow={false}
              className=" p-2 my-2 rounded-md shadow-md bg-gray-50"
            >
              <div>
                <div className="flex justify-between items-center">
                  <Typography
                    variant="body1"
                    color="blue-gray"
                    className="mb-2"
                    style={{ fontWeight: "600", letterSpacing: "0.5px" }}
                  >
                    {notice.Title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="blue-gray"
                    className="mb-2 text-sm"
                  >
                    {"Date - "}
                    {moment(notice.DateTime).format("YYYY-MM-DD")}
                  </Typography>
                </div>

                <Typography variant="body2" color="blue-gray">
                  {notice.Description}
                </Typography>
              </div>
              <div className="flex items-center justify-end p-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 text-sm"
                >
                  {"Sent by - "}
                  {notice.Username}
                </Typography>
              </div>
            </Card>
          ))}
        </Box>
      </Modal>
      {/* Send Modal */}
      <Modal open={isSendModalOpen} onClose={handleCloseNotificationModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
          className="flex flex-col gap-2 rounded-md shadow-md h-auto"
        >
          <Typography
            variant="h5"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Send Notification
          </Typography>
          <div className="flex flex-col gap-4">
            <Input
              size="large"
              name="Title"
              value={notificationData.Title}
              label="Title"
              onChange={handleNotificationChange}
            />
            {currentUser && currentUser?.Role === 0 && (
              <Select
                size="large"
                name="Receiver"
                value={notificationData.Receiver}
                label="To"
                onChange={(value) =>
                  handleNotificationChange({
                    target: { name: "Receiver", value },
                  })
                }
              >
                {usernames.map((user) => (
                  <Option key={user.value} value={user.value}>
                    {user.label}
                  </Option>
                ))}
              </Select>
            )}
            <Textarea
              size="large"
              name="Description"
              value={notificationData.Description}
              label="Description"
              onChange={handleNotificationChange}
            />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={handleCloseSendModal}
              color="red"
              variant="text"
              // className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmitNotification}
              color="green"
              variant="filled"
              // className="rounded-full"
            >
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </nav>
  );
}
