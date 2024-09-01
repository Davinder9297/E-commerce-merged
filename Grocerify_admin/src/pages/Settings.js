import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { BASE_URl } from "../Apis/api";

// AdminLogin Component
const AdminLogin = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to the login endpoint to authenticate the admin
      const response = await axios.post(
        BASE_URl+"/loginAdminWithEmail",
        formData
      );
      const token = response.data.token;
      // Store the token securely (e.g., in local storage)
      localStorage.setItem("adminToken", token);
      // Set logged in state to true
      setLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};



const Settings = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [admin, setAdmin] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [adminToken, setAdminToken] = useState('');

  // update admin form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  useEffect(() => {
    // Retrieve the admin token from local storage
    if (loggedIn) {
      setEditModal(true);
    }
    const token = localStorage.getItem('adminToken');
    setAdminToken(token);

    const fetchAllAdminDetails = async () => {
      try {
        const response = await axios.get(BASE_URl+"/admins", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAdmin(response.data.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchAllAdminDetails();
  }, [loggedIn]);

  const styles = {
    color: "grey",
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(BASE_URl+"/updateadmin", formData, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      // Fetch admin details again to reflect changes
      const response = await axios.get(BASE_URl+"/admins", {
        headers: {
          Authorization: `Bearer ${adminToken}`
        }
      });
      setAdmin(response.data.data);
      toggleEditModal();
    } catch (error) {
      console.log("Error updating admin:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row h-auto">
      <div className="flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 w-full">
        <div className="font-Gorditas text-[#333333] space-y-1">
          <p className="text-3xl font-Gorditas">Settings</p>
          <p className="font-Plus Jakarta Sans text-[#909090]">
            View settings and manage them.
          </p>
        </div>

        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell style={styles}>Name</TableCell>
                <TableCell style={styles}>Email</TableCell>
                <TableCell style={styles}>Mobile</TableCell>
                {/* <TableCell style={styles}>Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {admin.map((user) => (
                <TableRow key={user._id}>
                  <TableCell style={styles}>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell style={styles}>{user.email}</TableCell>
                  <TableCell style={styles}>{user.mobile}</TableCell>
                  {/* <TableCell style={{ display: "flex", gap: "10px" }}>
                    <MdOutlineModeEdit
                      className="cursor-pointer text-xl"
                      onClick={() => {
                        setFormData({
                          firstName: user.firstName,
                          lastName: user.lastName,
                          email: user.email,
                          mobile: user.mobile,
                        });
                        toggleEditModal();
                      }}
                    />
                    <FaRegTrashAlt
                      className="cursor-pointer text-red-500"
                      onClick={toggleDeleteModal}
                    />
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* update modal */}
        {editModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div
              className="absolute bg-white border border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative flex flex-col p-6">
                <h3 className="text-2xl text-center underline font-semibold">
                  Update Admin
                </h3>
                <form
                  className="w-full max-w-lg mt-2"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block tracking-wide  text-gray-700 text-md mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block tracking-wide  text-gray-700 text-md mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                        id="grid-last-name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full  px-3">
                      <label
                        className="block tracking-wide  text-gray-700 text-md mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full  px-3">
                      <label
                        className="block tracking-wide  text-gray-700 text-md mb-2"
                        htmlFor="grid-last-name"
                      >
                        Password
                      </label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                        id="grid-last-name"
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block tracking-wide  text-gray-700 text-md mb-2"
                        htmlFor="grid-last-name"
                      >
                        Mobile No
                      </label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                        id="grid-last-name"
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="reset"
                      onClick={toggleEditModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* delete modal  */}
        {deleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div
              className="absolute bg-white border border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative flex flex-col p-6">
                <h3 className="text-2xl font-semibold">Delete Admin</h3>
                <p>Are you sure you want to delete?</p>
                <div className="mt-4 flex justify-between">
                  <button className="text-red-500">Yes</button>
                  <button className="text-blue-500" onClick={toggleDeleteModal}>
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
