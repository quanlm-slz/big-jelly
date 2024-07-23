import { getCoupon } from "@/queries/couponRequests";
import { FormEventHandler } from "react";

const handler: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  await getCoupon(formData.get("code") as string || "");
};

export default handler
