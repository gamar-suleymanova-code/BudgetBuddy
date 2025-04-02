import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          navigate('/BudgetBuddy/dashboard');
        } else {
          navigate('/BudgetBuddy/greeting');
        }
        setSubmitting(false);
      }}
    >
      {formik => (
        <form
          className={`${isLogin ? 'login_form' : 'register_form'} d-flex flex-column gap_24px`}
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
              autoComplete={isLogin ? 'current-password' : 'new-password'}
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
            className="default_btn shadow_on_state bg_main c_light rounded_12px w-100 h6 flex_center gap_12px transition_default"
            disabled={formik.isSubmitting}
          >
            {`${isLogin ? 'Login' : 'Register'}`}
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        </form>
      )}
    </Formik>
  );
}
