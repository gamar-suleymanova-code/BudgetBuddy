// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Type definition for form values
interface AuthFormValues {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

// Props type definition
interface AuthFormProps {
  isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const navigate = useNavigate();
  const _input = `input_style rounded_12px px_18px py_12px text_md transition_default w-100`;

  // Initial values based on login or register
  const initialValues: AuthFormValues = isLogin
    ? { email: '', password: '' }
    : { fullName: '', email: '', password: '', confirmPassword: '' };

  // Validation schema based on login or register
  const validationSchema = Yup.object(
    isLogin
      ? {
          email: Yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
        }
      : {
          fullName: Yup.string().required('Full name is required'),
          email: Yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm your password'),
        }
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }: any) => {
        console.log(values);
        if (isLogin) {
          navigate("/BudgetBuddy/dashboard");
        } else {
          navigate("/BudgetBuddy/greeting");
        }
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <form
          className={`${
            isLogin ? "login_form" : "register_form"
          } d-flex flex-column gap_24px`}
          onSubmit={formik.handleSubmit}
        >
          <div className="input_group d-flex flex-column gap_18px">
            {!isLogin && (
              <Field
                className={_input}
                name="fullName"
                type="text"
                placeholder="Full Name"
                autoComplete="name"
              />
            )}
            <Field
              className={_input}
              name="email"
              type="text"
              placeholder="Email"
              autoComplete="email"
            />
            <Field
              className={_input}
              name="password"
              type="password"
              placeholder="Password"
              autoComplete={isLogin ? "current-password" : "new-password"}
            />
            {!isLogin && (
              <Field
                className={_input}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
              />
            )}
          </div>
          <button
            type="submit"
            className="default_btn auth_btn shadow_on_state bg_main c_light rounded_12px w-100 h6 flex_center gap-1 transition_default"
            disabled={formik.isSubmitting}
          >
            {`${isLogin ? "Login" : "Register"}`}
            {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
            {/* Icons made by Font Awesome (https://fontawesome.com) are licensed by MIT License.  */}
            <svg
              className='right-arrow'
              width="32"
              height="36"
              viewBox="0 0 140 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // Icons made by Font Awesome (https://fontawesome.com) are licensed by MIT License. 
            >
              <path
                className='line'
                d="M91.4299 6C82.355 6.34119 81.4388 19.1217 89.5337 22.0321C90.7576 22.4722 92.0827 22.5 93.3833 22.5H105.555C107.135 22.5 108.732 22.5706 110.246 23.0208C112.249 23.616 113.628 24.5693 114.697 26.6391C115.788 28.7537 115.93 31.2055 115.93 33.5851V92.0507C115.93 93.6802 115.848 95.3276 115.358 96.8819C114.712 98.9347 113.777 100.251 112.322 101.245C109.979 102.846 106.984 103 104.147 103H93.2579C91.7087 103 90.1135 103.033 88.7157 103.7C83.4034 106.238 82.2374 113.877 87.657 117.541C89.635 118.878 92.1394 119 94.5269 119H106.319C109.044 119 111.775 118.634 114.322 117.665C122.703 114.476 126.844 110.483 130.215 102.849C131.464 100.02 131.93 96.9195 131.93 93.8273V31.0303C131.93 29.0164 131.729 26.9968 131.194 25.0554C128.196 14.187 123.443 9.72692 112.391 6.73489C110.437 6.20598 108.408 6 106.384 6H91.4299Z"
                fill="white"
                stroke="white"
              />
              <path
                className='arrow'
                d="M7 53.5438V70.5438C8.13112 74.9016 9.69021 76.5193 14 78.0438H47.5V94.5438C48.1472 101.433 50.6772 103.058 57 101.044L94 66.0438C96.5706 62.5241 95.9352 60.8703 94 58.0438L56 22.5438C51.3066 21.3493 49.1457 21.756 47.5 27.5438V46.0438H15C10.6278 47.0037 8.48837 48.034 7 53.5438Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </button>
        </form>
      )}
    </Formik>
  );
}
