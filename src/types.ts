export interface Project {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  beforeImg: string;
  afterImg: string;
  gallery: string[];
  specs: {
    luas: string;
    tipe: string;
    durasi: string;
    lokasi: string;
  };
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  bgImg: string;
  description: string;
  features: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  bgImg: string;
  author: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Layanan' | 'Biaya' | 'Waktu';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}
