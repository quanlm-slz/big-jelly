import { postEmail } from "@/queries/emailRequests";
import { FormEventHandler } from "react";

const handler: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  await postEmail(formData);
};

export default handler;
