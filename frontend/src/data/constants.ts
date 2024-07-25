import { FilterTabInterface, NavlinkInterface, selectOptions } from "@/utils/types";

export const navlinks: NavlinkInterface[] = [
  { url: "/", title: "Trang chủ" },
  { url: "/products", title: "Sản phẩm" },
  { url: "/promotion", title: "Thông tin ưu đãi" },
  { url: "/news", title: "Tin tức" },
  { url: "/locations", title: "Thông tin cửa hàng" },
  { url: "/contacts", title: "Thông tin liên hệ" },
]

export const filterTabs: FilterTabInterface[] = [
  {
    label: "Tất cả",
    value: "",
  },
  {
    label: "Ưu đãi",
    value: "promotion"
  },
  {
    label: "Bánh mì ơi",
    value: "special"
  },
  {
    label: "Thức uống",
    value: "drinks"
  }
]

export const genderOptions: selectOptions[] = [
  {
    id: 1,
    label: "Nữ",
  },
  {
    id: 2,
    label: "Nam"
  }
]
