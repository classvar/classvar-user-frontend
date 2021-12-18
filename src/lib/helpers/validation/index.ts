const emailValidation = (email: string) => {
  const emailExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (email.length < 1) return '이메일을 입력해주세요';
  else if (!emailExp.test(email)) return '이메일 형식을 맞춰주세요';
  else return '';
};

const passwordValidation = (password: string) => {
  const passwordExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
  if (password.length < 1) return '비밀번호를 입력해주세요';
  else if (!passwordExp.test(password))
    return '숫자,소문자,대문자,특수문자를 최소 하나씩 포함하여 8자~20자여야 합니다';
  else return '';
};

const passwordConfirmValidation = (
  password: string,
  passwordConfirm: string,
) => {
  if (passwordConfirm.length < 1) return '비밀번호 확인을 입력해주세요';
  else if (password !== passwordConfirm) return '비밀번호와 일치하지 않습니다';
  else return '';
};

const nameValidation = (name: string) => {
  const nameExp = /^[가-힣]{2,}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,}$/;

  if (name.length < 1) return '이름을 입력해주세요';
  else if (!nameExp.test(name))
    return '한글은 2자이상, 영문은 firstname lastname 형식으로 입력해주세요';
  else return '';
};

const departmentValidation = (department: string) => {
  console.log('length', department.length);
  if (department.length < 1) return '학과를 입력해주세요';
  else return '';
};

export {
  emailValidation,
  passwordValidation,
  passwordConfirmValidation,
  nameValidation,
  departmentValidation,
};
