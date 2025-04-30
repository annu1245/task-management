exports.validate = (data) => {
  const {email, password} = data;

  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
  // Must match 1 capital, 1 small, 1 number, 1 special character and minimum length 8
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  
  if(!isEmailValid) {
    throw new Error("Invalid email format")
  }

  else if(!isPasswordValid) {
    throw new Error("Invalid password format")
  }

  return null;
}

exports.validateTask = (data) => {
  const {title, description, status, date, userId} = data;
  if (title.length <= 0) {
    throw new Error("title is required")
  }

  else if(description && description.length <= 0) {
    throw new Error("description is required")
  }
}