export interface MainButtonInterface {
  url: string;
  buttonStyle?: string;
}

export interface MissionLinkInterface {
  url: string;
  icon: string;
  label: string;
}

export interface DealLinkInterface {
  id: string;
  image: string;
  title: string;
  price: string;
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
