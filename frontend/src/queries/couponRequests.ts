export const getCoupon = async (code: string) => {
  if (code==="") return
  await fetch(`/api/coupon/${code}`, {
    method: "GET",
  });
}
