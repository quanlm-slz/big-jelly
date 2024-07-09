import { FormEventHandler } from "react";

const handler: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  await fetch("/api/email", {
    method: "POST",
    body: formData,
  });
};

export default handler;
