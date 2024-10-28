import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // Pass the selected role to the signup form via URL params
    navigate(`/auth/signup?role=${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-3">Welcome to JobGate!</h1>
      <p className="mb-10 text-lg">Choose your role to get started:</p>
      <div className="grid grid-cols-2 gap-8 mb-16">
        <button
          onClick={() => handleRoleSelect("Client")}
          className="px-9 py-9 bg-slate-200 rounded-md flex justify-end items-start flex-col"
        >
          <span className="text-green-700 font-semibold text-2xl mb-2">
            I am a Client,
          </span>
          <span className="text-lg font-medium text-slate-600">
            Looking for talents.
          </span>
          <span className="mt-2 text-sm text-gray-500">
            Discover top talents for your projects and hire with ease.
          </span>
        </button>

        <button
          onClick={() => handleRoleSelect("Applicant")}
          className="px-9 py-9 bg-slate-200 rounded-md flex justify-end items-start flex-col"
        >
          <span className="text-green-700 font-semibold text-2xl mb-2">
            I am an Applicant,
          </span>
          <span className="text-lg font-medium text-slate-600">
            Looking for job opportunities.
          </span>
          <span className="mt-2 text-sm text-gray-500">
            Explore job openings and take the next step in your career.
          </span>
        </button>
      </div>

      <p className="text-lg">
        Already have an account?{" "}
        <NavLink
          to="/auth/login"
          className="text-green-700 underline hover:no-underline"
        >
          Log in
        </NavLink>
      </p>
    </div>
  );
};

export default RoleSelection;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const RoleSelection = () => {
//   const navigate = useNavigate();

//   const handleRoleSelect = (role) => {
//     // Pass the selected role to the signup form via URL params
//     navigate(`/auth/signup?role=${role}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
//         Welcome to JobGate!
//       </h1>
//       <p className="text-lg text-gray-600 mb-10">
//         Choose your role to get started:
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl px-4">
//         <button
//           onClick={() => handleRoleSelect("Client")}
//           className="relative flex flex-col justify-center items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-8 text-left group"
//         >
// <span className="absolute top-4 left-4 text-blue-600 font-semibold text-xl">
//   I am a Client,
// </span>
// <span className="mt-16 text-gray-700 text-base group-hover:text-blue-600 transition duration-300">
//   Looking for talents.
// </span>
// <span className="mt-2 text-sm text-gray-500">
//   Discover top talents for your projects and hire with ease.
// </span>
//         </button>

//         <button
//           onClick={() => handleRoleSelect("Applicant")}
//           className="relative flex flex-col justify-center items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-8 text-left group"
//         >
//           <span className="absolute top-4 left-4 text-blue-600 font-semibold text-xl">
//             I am an Applicant,
//           </span>
//           <span className="mt-16 text-gray-700 text-base group-hover:text-blue-600 transition duration-300">
//             Looking for job opportunities.
//           </span>
//           <span className="mt-2 text-sm text-gray-500">
//             Explore job openings and take the next step in your career.
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;
