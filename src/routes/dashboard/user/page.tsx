import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "@/session";

export default function UserPage() {
  const [file, setFile] = useState<File | any>();

  const [user_name, setUser_name] = useState("");
  const [user_phone_number, setUser_phone_number] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_password, setUser_password] = useState("");
  const [user_designation, setUser_designation] = useState("");

  /** This function is responsible to take the authorized_users informations
   *  and store them into authorized_users table to create a new user
   */
  const addNewUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("user_phone_number", user_phone_number);
    formData.append("user_email", user_email);
    formData.append("user_password", user_password);
    formData.append("user_designation", user_designation);
    formData.append("user_image", file);

    axios
      .post(
        `https://wosambackend-production.up.railway.app/insert_user_infos`,
        formData
      )
      .then((response) => {
        if (response.data.Status === "Success") {
          console.log("Succeded");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => console.log(error));

    window.location.reload();
  };

  const session = useSession();

  // This code can fetch specific user informations from database and show where we want
  const [data, setData] = useState<any>("initial state");
  useEffect(() => {
    axios
      .get(
        `https://wosambackend-production.up.railway.app/get_specific_user_infos/${session?.user?.user_email}`
      )
      .then((response) => {
        console.log({ response: response });
        setData(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  /** This function is responsible to take the authorized_users new informations
   *  and update them into authorized_users table using the email stored in session.user
   */
  const updateUserInfo = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("user_phone_number", user_phone_number);
    formData.append("user_password", user_password);
    formData.append("user_designation", user_designation);
    formData.append("user_image", file);

    axios
      .put(
        `https://wosambackend-production.up.railway.app/update_user_infos/${session?.user?.user_email}`,
        formData
      )
      .then((response) => {
        if (response.data.Status === "Success") {
          console.log("Succeded");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => console.log(error));

    window.location.reload();
  };

  // This code can delete a user based on given email address
  const [userToDelete, setUserToDelete] = useState("");
  const [message, setMessage] = useState("");

  const deleteUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (userToDelete === session?.user?.user_email) {
      setMessage(`You can't delete yourself`);
    } else {
      axios
        .delete(
          `https://wosambackend-production.up.railway.app/delete_user/${userToDelete}`
        )
        .then((response) => {
          if (response.data.Status === "Success") {
            console.log("Succeded");
          } else {
            console.log("Failed");
          }
        })
        .catch((error) => console.log(error));

      window.location.reload();
    }
  };

  return (
    <div className="dashboard-page">
      <section className="form-fillup-container ">
        <section>
          <h1>User Profile Information</h1>
          <section className="user-input">
            <label>User Name</label>
            <input type="text" value={data.user_name} />
          </section>

          <section className="user-input">
            <label>User's Phone Number</label>
            <input type="text" value={data.user_phone_number} />
          </section>

          <section className="user-input">
            <label>User's Email</label>
            <input type="email" value={data.user_email} />
          </section>

          <section className="user-input">
            <label>User's Designation</label>
            <input type="text" value={data.user_designation} />
          </section>
        </section>

        <section className="form-fillup-container">
          <h1>Edit User Profile Information</h1>
          <form onSubmit={updateUserInfo}>
            <section className="user-input">
              <label>User Name</label>
              <input
                type="text"
                required
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>User's Phone Number</label>
              <input
                type="text"
                required
                value={user_phone_number}
                onChange={(e) => setUser_phone_number(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>New Password</label>
              <input
                type="password"
                required
                value={user_password}
                onChange={(e) => setUser_password(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>User's Designation</label>
              <input
                type="text"
                required
                value={user_designation}
                onChange={(e) => setUser_designation(e.target.value)}
              />
            </section>

            <section className="file-input">
              <label>Choose New Image</label>
              <input
                type="file"
                // onChange={handleFileChange}
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    const selectedFile = files[0];
                    setFile(selectedFile);
                  }
                }}
              />
            </section>

            <section className="user-input">
              <button style={{ backgroundColor: "#8F5942" }}>
                Update Informations
              </button>
            </section>
          </form>
        </section>

        <section>
          <h1>Add New User</h1>
          <form onSubmit={addNewUser}>
            <section className="user-input">
              <label>User Name</label>
              <input
                type="text"
                required
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>User's Phone Number</label>
              <input
                type="text"
                required
                value={user_phone_number}
                onChange={(e) => setUser_phone_number(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>User's Email</label>
              <input
                type="email"
                required
                value={user_email}
                onChange={(e) => setUser_email(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>Password</label>
              <input
                type="password"
                required
                value={user_password}
                onChange={(e) => setUser_password(e.target.value)}
              />
            </section>

            <section className="user-input">
              <label>User's Designation</label>
              <input
                type="text"
                required
                value={user_designation}
                onChange={(e) => setUser_designation(e.target.value)}
              />
            </section>

            <section className="file-input">
              <label>Choose New Image</label>
              <input
                type="file"
                // onChange={handleFileChange}
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    const selectedFile = files[0];
                    setFile(selectedFile);
                  }
                }}
                required
              />
            </section>

            <section className="user-input">
              <button>Add New User</button>
            </section>
          </form>
        </section>

        <section>
          <form className="user-input" onSubmit={deleteUser}>
            <label>Please Provide The User's Email To Delete His Profile</label>
            <label style={{ textAlign: "center", color: "brown" }}>
              {message}
            </label>
            <input
              type="email"
              required
              value={userToDelete}
              onChange={(e) => setUserToDelete(e.target.value)}
            />
            <section className="user-input">
              <button style={{ backgroundColor: "brown" }}>Delete</button>
            </section>
          </form>
        </section>
      </section>
    </div>
  );
}
