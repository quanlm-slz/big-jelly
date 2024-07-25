export const SignUpRequest = async (form: FormData) => {
  const body = {
    email: form.get("email"),
    passowrd: form.get("password"),
    profile_attributes: {
      firstname: form.get("firstname"),
      lastname: form.get("lastname"),
      gender: form.get("gender"),
      birthday: form.get("birthday")
    }
  }

  await fetch("/api/user/sign_up", {
    method: "post",
    body: JSON.stringify(body)
  })
}
