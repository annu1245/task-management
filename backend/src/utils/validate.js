export function validate(data) {
  const {email, password} = data;

  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  
  if(!isEmailValid) {
    throw new Error("Invalid credentials")
  }

  else if(!isPasswordValid) {
    throw new Error("Invalid credentials")
  }

  return null;
}