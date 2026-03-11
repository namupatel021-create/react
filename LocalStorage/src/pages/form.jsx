import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPen, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LocalStorage = () => {
  const { register, handleSubmit, reset } = useForm();

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  function Save(data) {
    if (userId === null) {
      setUsers([...users, { ...data, id: uuidv4() }]);
      toast.success("User Added Successfully ✅");
    } else {
      const newUser = [...users];
      const index = newUser.findIndex((user) => user.id === userId);
      newUser[index] = { ...data, id: userId };
      setUsers(newUser);

      toast.info("User Updated Successfully ✏️");

      setUserId(null);
    }

    reset({
      name: "",
      accountNumber: "",
      bankName: "",
      branchName: "",
      city: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
    });
  }

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    setUsers(userList);
  }, []);

  function trash(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const filterData = users.filter((user) => user.id !== id);
      setUsers(filterData);

      toast.error("User Deleted Successfully ❌");
    }
  }

  function edit(id) {
    setUserId(id);
    const singleUser = users.find((user) => user.id === id);
    reset(singleUser);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(Save)}
        className="col-lg-6 col-md-8 col-11 mx-auto my-5"
      >
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-primary text-white text-center rounded-top-4">
            <h4 className="mb-0">User Registration Form</h4>
          </div>

          <div className="card-body p-4">

            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control form-control-lg"
                {...register("name", { required: true })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Account Number</label>
              <input
                type="number"
                placeholder="Enter account number"
                className="form-control form-control-lg"
                {...register("accountNumber", { required: true })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Bank Name</label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="form-control form-control-lg"
                {...register("bankName", { required: true })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Branch Name</label>
              <input
                type="text"
                placeholder="Enter branch name"
                className="form-control form-control-lg"
                {...register("branchName", { required: true })}
              />
            </div>

                                   <div className="mb-3">
                            <label className="form-label fw-semibold">City</label>
                            <select
                                className="form-select form-select-lg"
                                {...register("city", { required: true })}
                            >
                                <option value="">Select City</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Surat">Surat</option>
                                <option value="Vadodara">Vadodara</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Bhavnagar">Bhavnagar</option>
                                <option value="Jamnagar">Jamnagar</option>
                                <option value="Junagadh">Junagadh</option>
                                <option value="Gandhinagar">Gandhinagar</option>
                                <option value="Anand">Anand</option>
                                <option value="Bharuch">Bharuch</option>
                                <option value="Navsari">Navsari</option>
                                <option value="Valsad">Valsad</option>
                                <option value="Vapi">Vapi</option>
                                <option value="Porbandar">Porbandar</option>
                                <option value="Morbi">Morbi</option>
                                <option value="Surendranagar">Surendranagar</option>
                                <option value="Mehsana">Mehsana</option>
                                <option value="Palanpur">Palanpur</option>
                                <option value="Godhra">Godhra</option>
                                <option value="Dahod">Dahod</option>
                                <option value="Botad">Botad</option>
                                <option value="Amreli">Amreli</option>
                                <option value="Patan">Patan</option>
                                <option value="Himmatnagar">Himmatnagar</option>
                                <option value="Dwarka">Dwarka</option>
                                <option value="Veraval">Veraval</option>
                                <option value="Gondal">Gondal</option>
                                <option value="Kalol">Kalol</option>
                                <option value="Deesa">Deesa</option>
                                <option value="Jetpur">Jetpur</option>
                            </select>
                        </div>


            <div className="mb-3">
              <label className="form-label fw-semibold">Age</label>
              <input
                type="number"
                placeholder="Enter age"
                className="form-control form-control-lg"
                {...register("age", { required: true })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold d-block">Gender</label>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Male"
                  {...register("gender", { required: true })}
                />
                <label className="form-check-label">Male</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Female"
                  {...register("gender", { required: true })}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control form-control-lg"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Phone</label>
              <input
                type="number"
                placeholder="Enter mobile number"
                className="form-control form-control-lg"
                {...register("phone", { required: true })}
              />
            </div>

            {userId === null ? (
              <button className="btn btn-primary btn-lg w-100">
                Register Now
              </button>
            ) : (
              <button className="btn btn-warning btn-lg w-100">
                Update Now
              </button>
            )}
          </div>
        </div>
      </form>

      <div className="col-lg-10 mx-auto">

        <h3 className="text-center mb-3">User List</h3>

        <table className="table table-bordered table-striped text-center">

          <thead className="table-dark">
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Account No</th>
              <th>Bank</th>
              <th>Branch</th>
              <th>City</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.accountNumber}</td>
                  <td>{item.bankName}</td>
                  <td>{item.branchName}</td>
                  <td>{item.city}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => trash(item.id)}
                    >
                      <FaTrash />
                    </button>

                    <button
                      className="btn btn-warning btn-sm ms-2"
                      onClick={() => edit(item.id)}
                    >
                      <FaPen />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center text-danger fw-bold">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default LocalStorage;