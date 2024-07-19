import { Moment } from "moment";

export interface MainButtonInterface {
  url: string;
  buttonStyle?: string;
}

export interface MissionLinkInterface {
  url: string;
  icon: string;
  label: string;
}

export interface ProductInterface {
  id: string;
  image: string;
  title: string;
  price: number;
  promoted_price?: number;
  note?: string;
}

export interface HotNewsInterface {
  id: string;
  date: string;
  title: string;
  image: string;
  author: string;
  content: string;
}

export interface CarouselInterface {
  carouselStyle: string;
}

export interface NavlinkInterface {
  url: string;
  title: string;
}

export interface FilterTabInterface {
  label: string;
  value: string;
}

export interface ProductFilterInterface {
  filter?: string;
  search?: string;
}

export interface CartEntry {
  product: ProductInterface;
  amount: number;
}

export interface LocalStorageEntry {
  value: any;
  expiration: Moment;
}

export interface selectOptions {
  id: number
  label: string;
}
