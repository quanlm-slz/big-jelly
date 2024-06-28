import { DealLinkInterface, MissionLinkInterface } from "@/utils/types";
import { bread, drink, fries, snack } from "./svg";

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

export const hotDeals: DealLinkInterface[] = [
  {
    id: '1',
    image: '/',
    price: '15.000đ',
    title: 'Bánh Mì Lườn Ngỗng Bắc Kinh'
  }
]
