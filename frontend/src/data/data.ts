import {
  ProductInterface,
  HotNewsInterface,
  MissionLinkInterface,
  DeliveryMethod,
  PaymentMethod,
} from "@/utils/types";
import { bread, drink, fries, money, snack } from "./svg";

export const intro = {
  title: "Giới thiệu",
  subtitle: "Big Belly - người bạn mới của người tiêu dùng Việt Nam",
  content:
    "Big Belly ra đời dựa trên tình yêu Ẩm thực Việt Nam của " +
    "những người sáng lập trẻ thông qua trải nghiệm tinh tế " +
    "về sự phối hợp hoàn hảo giữa giá trị truyền thống " +
    "trong màu sắc đương đại, tạo nên những món ăn đầy màu sắc, " +
    "thú vị & tiện lợi cho người Việt Nam trong cuộc sống hiện đại. ",
};

export const mission = {
  title: "Sứ mệnh",
  content:
    "Big Belly mong muốn làm người bạn đồng hành thân thiết, " +
    "mang đến bữa ăn ngon, tiện lợi cho người tiêu dùng Việt Name " +
    "với các sản phẩm Bánh Mì, Chà Bông, Pate, Cadé cùng nhiều sản phẩm " +
    "tươi ngon khác, đảm bảo vệ sinh an toàn thực phẩm.",
};

export const missionLinks: MissionLinkInterface[] = [
  {
    url: "/",
    icon: bread,
    label: "Bánh Mì",
  },
  {
    url: "/",
    icon: snack,
    label: "Ăn Kèm",
  },
  {
    url: "/",
    icon: fries,
    label: "Ăn Vặt",
  },
  {
    url: "/",
    icon: drink,
    label: "Thức Uống",
  },
];

export const hotDeals: ProductInterface[] = [
  {
    id: "1",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "2",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "3",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "4",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "5",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "6",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "7",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "8",
    image: "/products/product-1.webp",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
];

export const hotNews: HotNewsInterface[] = [
  {
    id: "1",
    title:
      "Sự trở lại của bánh mì lườn ngỗng Bắc Kinh - Trung Thu này đã có mĩ vị",
    author: "Trinh MKT",
    content:
      "Trung Thu này sẽ đặc biệt hơn bao giờ hết vì Bánh Mì ơi sẽ đưa nhân Lườn Ngỗng Bắc Kinh quay trở lại và lợi hại hơn xưa.",
    date: "07/09/2023",
    image: "/news/new-1.webp",
  },
  {
    id: "2",
    title:
      "Sự trở lại của bánh mì lườn ngỗng Bắc Kinh - Trung Thu này đã có mĩ vị",
    author: "Trinh MKT",
    content:
      "Trung Thu này sẽ đặc biệt hơn bao giờ hết vì Bánh Mì ơi sẽ đưa nhân Lườn Ngỗng Bắc Kinh quay trở lại và lợi hại hơn xưa.",
    date: "07/09/2023",
    image: "/news/new-1.webp",
  },
  {
    id: "3",
    title:
      "Sự trở lại của bánh mì lườn ngỗng Bắc Kinh - Trung Thu này đã có mĩ vị",
    author: "Trinh MKT",
    content:
      "Trung Thu này sẽ đặc biệt hơn bao giờ hết vì Bánh Mì ơi sẽ đưa nhân Lườn Ngỗng Bắc Kinh quay trở lại và lợi hại hơn xưa.",
    date: "07/09/2023",
    image: "/news/new-1.webp",
  },
];

export const products: ProductInterface[] = [
  {
    id: "1",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "2",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "3",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "4",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "5",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "6",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "7",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "8",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "9",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "10",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "11",
    image: "/products/product-1.webp",
    note: "Phần 1 ổ/Không thêm món",
    price: 15000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "12",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    promoted_price: 12000,
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
  {
    id: "13",
    image: "/products/product-1.webp",
    price: 15000,
    note: "Phần 1 ổ/Không thêm món",
    title: "Bánh Mì Lườn Ngỗng Bắc Kinh",
  },
];

export const cities = [
  {
    id: 1,
    label: "Hồ Chí Minh",
  },
  {
    id: 2,
    label: "Hà Nội",
  },
];

export const districts = [
  {
    id: 1,
    label: "Bình Thạnh",
  },
  {
    id: 2,
    label: "Tân Bình",
  },
  {
    id: 3,
    label: "Thủ Đức",
  },
];

export const communes = [
  {
    id: 1,
    label: "Hiệp Bình Chánh",
  },
  {
    id: 2,
    label: "Linh Trung",
  },
  {
    id: 3,
    label: "Linh Đông",
  },
];

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: 1,
    label: "Giao hàng tận nơi",
    price: 0,
  },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    label: "Thanh toán khi nhận hàng (COD)",
    icon: money,
    desc:
      "Big Belly giao hàng đến tất cả các quận/huyện TP.HCM " +
      "thông qua dịch vụ giao hàng GrabExpress. Thời gian đặt hàng " +
      "từ 6:30 - 21:00 với phí vận chuyển và thời gian " +
      "sẽ phụ thuộc vào ứng dụng giao hàng.",
    note:
      "(Quý khách vui lòng thanh toán phí vận chuyển cho shipper ngay khi nhận hàng)"
  },
  {
    id: 2,
    label: "Chuyển khoản qua ngân hàng",
    icon: money,
    desc:
      "Anh/chị ghi thông tin chuyển khoản là \"TÊN NGƯỜI ĐẶT - SĐT NGƯỜI ĐẶT\" " +
      "vả chuyển về STK:",
    note:
      "- Công ty TNHH Big Jelly\n" +
      "- STK: 123456789123\n" +
      "- Ngân hàng (BIDV) TMCP Đầu tư Và Phát triển Việt Nam | CN Thống Nhất"
  },
  {
    id: 3,
    label: "Ví MoMo",
    icon: money,
  }
];
