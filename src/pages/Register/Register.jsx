import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useState } from "react";

const RegistrationForm = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    acceptUpdates: Yup.boolean(),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptUpdates: false,
      acceptTerms: false,
    },

    validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  return (
    <div
      className={`${styles.formContainer} min-h-screen flex items-center justify-center bg-transparent py-12 px-4`}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-xl w-full space-y-6"
      >
        <h2 className="text-white font-bold text-3xl">Register</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              {...formik.getFieldProps("firstName")}
              className="w-full px-3 py-2 border rounded-xl border-gray-300 bg-transparent"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
              className="w-full px-3 py-2 border rounded-xl border-gray-300 bg-transparent"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="address"
            placeholder="Address"
            {...formik.getFieldProps("address")}
            className="w-full px-3 py-2 border rounded-xl border-gray-300 bg-transparent"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm"> {formik.errors.address}</div>
          )}
        </div>
        <div>
          <PhoneInput
            country={"lk"}
            value={formik.values.phone}
            onChange={(phone) => formik.setFieldValue("phone", phone)}
            containerClass="w-full rounded-2xl"
            inputClass={`w-full px-3 py-2 border rounded-xl border-gray-300 !bg-transparent ${
              formik.values.phone ? "text-white" : "text-gray-400"
            }`}
            buttonClass="!bg-transparent border-none"
            dropdownClass="!bg-gray-300 !text-gray-700"
            buttonStyle={{
              backgroundColor: "transparent",
              borderRight: "2px solid #9ca3af",
            }}
            inputStyle={{
              backgroundColor: "transparent",
              color: formik.values.phone ? "white" : "#9ca3af",
            }}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm"> {formik.errors.phone}</div>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            className="w-full px-3 py-2 border rounded-xl border-gray-300 bg-transparent"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm"> {formik.errors.email}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            className="w-full px-3 py-2 border rounded-xl border-gray-300 bg-transparent"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...formik.getFieldProps("confirmPassword")}
            className="w-full px-3 py-2 border rounded-xl border-gray-300 bg-transparent"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <label>
            <input
              type="checkbox"
              name="acceptUpdates"
              {...formik.getFieldProps("acceptUpdates")}
              className="mr-2"
            />
            <span>I agree to receive news and updates</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              {...formik.getFieldProps("acceptTerms")}
              className="mr-2"
            />
            <span>
              I agree to the{" "}
              <Link to="#" className="text-blue-400">
                terms and conditions
              </Link>
            </span>
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className="text-red-500 text-sm">
              {formik.errors.acceptTerms}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-700 text-white p-3 rounded-2xl"
          >
            Register
          </button>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-1/2 flex justify-center items-center bg-white hover:bg-gray-300 text-red-500 p-3 rounded-2xl"
            >
              <IoIosArrowBack className="flex justify-center" />
              Go Back
            </button>

            <button
              type="button"
              // onClick={() => navigate("/login")}
              onClick={handleLoginClick}
              className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-2xl"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default RegistrationForm;
