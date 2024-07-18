export const renderPrice = (price: number): string => {
  let result = "";
  let strPrice = price.toString();
  let start = strPrice.length;

  while (start > 0) {
    let old = start
    start = start - 3 > 0 ? start - 3 : 0;

    let group = strPrice.slice(start, old);
    result = `${group}${result}`;

    if (start > 0) result = `.${result}`;
  }

  return `${result}đ`;
};
