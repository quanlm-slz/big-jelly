export const postEmail = async (body: FormData) => {
  await fetch("/api/email", {
    method: "POST",
    body: body,
  });
}
