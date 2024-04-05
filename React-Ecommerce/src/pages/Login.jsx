import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("*Username is required")
          .min(4, "*Name is too Short!"),
        password: Yup.string()
          .required("*Password is required")
          .min(6, "*Password must  be at least 6 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
      })}
    >
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Login Here!
          </h2>

          <Form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <Field
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full name"
                    name="username"
                  />
                </div>
                <span className="text-red-500 fw-bold text-sm">
                  <ErrorMessage name="username" />
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-1">
                  <Field
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <span className="text-red-500 fw-bold text-sm">
                  <ErrorMessage name="password" />
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login
                </button>
                <Link to="/shop">
                  <button
                    type="button"
                    className="inline-flex w-full mt-2 items-center justify-center rounded-md bg-black px-3.5 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};
