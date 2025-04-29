export function validate(data) {
  const {email, password} = data;

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  
  if(!emailRegex.test(email)) {
    throw new Error("email id not valid")
  }

  else if(!passwordRegex.test(password)) {
    throw new Error("password is not valid")
  }

  return null;
}