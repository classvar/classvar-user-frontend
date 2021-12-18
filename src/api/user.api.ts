import api from './index';

interface LoginApiProps {
  loginEmail: string;
  loginPassword: string;
}

interface LoginApiReturnValues {
  success: boolean;
  error: unknown;
}

export async function callLoginApi(
  props: LoginApiProps,
): Promise<LoginApiReturnValues> {
  const { loginEmail, loginPassword } = props;
  try {
    await api.post(`/login`, { loginEmail, loginPassword });
    return { success: true, error: undefined };
  } catch (error) {
    return { success: false, error };
  }
}

interface SignUpProps {
  department: string;
  email: string;
  name: string;
  password: string;
}

interface SignupApiReturnValues {
  success: boolean;
  error: unknown;
}

export async function callSignupApi(
  props: SignUpProps,
): Promise<SignupApiReturnValues> {
  const { department, email, name, password } = props;
  try {
    await api.post(`/signup`, { department, email, name, password });
    return { success: true, error: undefined };
  } catch (error) {
    return { success: false, error };
  }
}
