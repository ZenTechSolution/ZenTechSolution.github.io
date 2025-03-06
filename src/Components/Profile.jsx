import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./AdminDashboard/DashboardData";
import axios from "axios";

// export const Profile = () => {
//   const [profile, setProfile] = useState({
//     firstName: "Name",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     facebook: "",
//     github: "",
//     linkedin: "",
//     twitter: "https://twitter.com/yourprofile",
//     img_path: "", // Default placeholder image
//   });

//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     let dataUser = localStorage.getItem("user");
//     let data = JSON.parse(data);

//     setProfile({
//       id: data.id || null,
//       firstName: data.first_name || "",
//       lastName: data.last_name || "",
//       role: data.role || "",
//       email: data.email || "",
//       emailVerifiedAt: data.email_verified_at || null,
//       passwordText: data.password_text || "",
//       facebook: data.facebook || "",
//       github: data.github || "",
//       linkedin: data.linkedin || "",
//       twitter: data.twitter || "",
//       address: data.address || "",
//       createdAt: data.created_at || "",
//       updatedAt: data.updated_at || "",
//       imgPath: data.img_path || "/Images/Images/user-avatar.png", // Default image if not available
//       description: data.description || "",
//       dob: data.dob || null,
//     });
//   }, []);

//   const fetchProfileData = async () => {
//     const response = await fetch("/api/profile");
//     const data = await response.json();
//     setProfile(data);
//   };

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = () => {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "image/*";
//     fileInput.onchange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         setSelectedImage(URL.createObjectURL(file));
//         setProfile({ ...profile, img_path: URL.createObjectURL(file) });
//       }
//     };
//     fileInput.click();
//   };

//   function Addbtn() {
//     console.log("Hello");
//   }

//   return (
//     <div>
//       <NavigationBar
//         heading={"Profile"}
//         btnName={"Change Password"}
//         Addbtn={() => console.log("Open")}
//       />

//       <div className="d-flex justify-content-center align-items-center h-100">
//         <div className="ProfileCard d-flex flex-column flex-md-row col-12 col-md-11 mx-auto p-3 gap-3">
//           {/* Left Section - Profile Image & Name */}
//           <div className="profileLeftSection col-12 col-md-3 text-center mb-3 mb-md-0">
//             <div className="profileImgBox">
//               <img
//                 src={
//                   selectedImage ||
//                   profile.img_path ||
//                   "/Images/Images/user-avatar.png"
//                 }
//                 alt="Profile"
//                 className="img-fluid rounded-circle"
//               />
//             </div>
//             <button
//               className="btn btn-outline-primary mt-3 col-12"
//               onClick={handleImageUpload}
//             >
//               Choose File
//             </button>
//             <h3 className="profileName mt-2">
//               {profile.firstName} {profile.lastName}
//             </h3>
//           </div>

//           {/* Right Section - Profile Details */}
//           <div className="profileCardText col-12 col-md-9">
//             <div className="profileDetails d-flex flex-column gap-2 h-90">
//               {[
//                 { label: "First Name", name: "firstName", type: "text" },
//                 { label: "Last Name", name: "lastName", type: "text" },
//                 { label: "Email", name: "email", type: "email" },
//                 { label: "Phone", name: "phone", type: "tel" },
//                 { label: "Address", name: "address", type: "text" },
//                 { label: "Facebook", name: "facebook", type: "text" },
//                 { label: "LinkedIn", name: "linkedin", type: "text" },
//                 { label: "GitHub", name: "github", type: "text" },
//                 { label: "Twitter", name: "twitter", type: "text" },
//               ].map((field, index) => (
//                 <div className="row mb-2" key={index}>
//                   <div className="col-sm-4 col-md-2">
//                     <h6 className="mb-0 fieldName">{field.label}</h6>
//                   </div>
//                   <div className="col-sm-8 col-md-10 text-secondary">
//                     <input
//                       type={field.type}
//                       className="form-control"
//                       name={field.name}
//                       value={profile[field.name]}
//                       placeholder={field.label}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Edit Button */}
//             <div className="row mt-3">
//               <div className="col-sm-12">
//                 <button className="btn btn-primary w-100">Save Changes</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Profile = () => {
  const [profile, setProfile] = useState({
    id: "",
    first_name: "Name",
    last_name: "",
    email: "",
    role: "",
    phone: "",
    address: "",
    facebook: "",
    github: "",
    linkedin: "",
    twitter: "https://twitter.com/yourprofile",
    img_path: "",
    description: "",
    dob: "",
    password: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load user profile from API or localStorage
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setProfile(JSON.parse(storedUser));
      } else {
        const response = await axios.get("/api/profile");
        if (response.data) {
          const apiData = response.data;
          setProfile({
            id: apiData.id || "",
            first_name: apiData.first_name || "Name",
            last_name: apiData.last_name || "",
            email: apiData.email || "",
            role: apiData.role || "",
            phone: apiData.phone || "",
            address: apiData.address || "",
            facebook: apiData.facebook || "",
            github: apiData.github || "",
            linkedin: apiData.linkedin || "",
            twitter: apiData.twitter || "https://twitter.com/yourprofile",
            img_path: apiData.img_path || "",
            description: apiData.description || "",
            dob: apiData.dob || "",
            password: "",
          });
          localStorage.setItem("user", JSON.stringify(apiData)); // Save data locally
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));

    // Store updates in localStorage
    localStorage.setItem("user", JSON.stringify({ ...profile, [name]: value }));
  };

  const handleImageUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setProfile((prev) => ({ ...prev, img_path: imageUrl }));

        // Store updated profile in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({ ...profile, img_path: imageUrl })
        );
      }
    };
    fileInput.click();
  };

  const handleSave = async () => {
    try {
      const response = await axios.put("/api/updateProfile", profile);
      if (response.data.success) {
        alert("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(profile)); // Save changes
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <NavigationBar
        heading={"Profile"}
        btnName={"Change Password"}
        Addbtn={() => console.log("Open")}
      />

      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="ProfileCard d-flex flex-column flex-md-row col-12 col-md-11 mx-auto p-3 gap-3">
          {/* Left Section - Profile Image & Name */}
          <div className="profileLeftSection col-12 col-md-3 text-center mb-3 mb-md-0">
            <div className="profileImgBox">
              <img
                src={
                  selectedImage ||
                  profile.img_path ||
                  "/Images/Images/user-avatar.png"
                }
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </div>
            <button
              className="btn btn-outline-primary mt-3 col-12"
              onClick={handleImageUpload}
            >
              Choose File
            </button>
            <h3 className="profileName mt-2">
              {profile.first_name} {profile.last_name}
            </h3>
          </div>

          {/* Right Section - Profile Details */}
          <div className="profileCardText col-12 col-md-9">
            <div className="profileDetails d-flex flex-column gap-2 h-90">
              {[
                { label: "First Name", name: "first_name", type: "text" },
                { label: "Last Name", name: "last_name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Role", name: "role", type: "text" },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Address", name: "address", type: "text" },
                { label: "Facebook", name: "facebook", type: "text" },
                { label: "LinkedIn", name: "linkedin", type: "text" },
                { label: "GitHub", name: "github", type: "text" },
                { label: "Twitter", name: "twitter", type: "text" },
                { label: "Description", name: "description", type: "text" },
                { label: "Date of Birth", name: "dob", type: "date" },
                { label: "Password", name: "password", type: "password" },
              ].map((field, index) => (
                <div className="row mb-2" key={index}>
                  <div className="col-sm-4 col-md-2">
                    <h6 className="mb-0 fieldName">{field.label}</h6>
                  </div>
                  <div className="col-sm-8 col-md-10 text-secondary">
                    <input
                      type={field.type}
                      className="form-control"
                      name={field.name}
                      value={profile[field.name]}
                      placeholder={field.label}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Save Button */}
            <div className="row mt-3">
              <div className="col-sm-12">
                <button className="btn btn-primary w-100" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
