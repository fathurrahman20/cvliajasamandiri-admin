export type FooterDetailType = {
  id: string;
  description: string;
};

export type RegulationDetailType = {
  id: string;
  description: string;
};

export type RequirementWithDriverDetailType = {
  id: string;
  description: string;
};

export type RequirementNoteDetailType = {
  id: string;
  description: string;
};

export type CreateRequirementNoDriverDetailType = {
  title: string;
  description: string;
};

export type RequirementNoDriverDetailType = {
  id: number;
  title: string;
  description: string;
};

export type OurServiceDetailType = {
  id: number;
  title: string;
  description: string;
};

export type OurAdvantageDetailType = {
  id: number;
  title: string;
  description: string;
};

export type AboutCompanyDetailType = {
  id: number;
  description: string;
  // imageUrl?: string;
  vision: string;
  mission: string;
  address: string;
  phone: string;
  email: string;
  website: string;
};

export type HeroDetailType = {
  id: string;
  title: string;
  description: string;
};

export type ButtomDetailType = {
  id: string;
  title: string;
  description: string;
};

export type FaqDetailType = {
  id: number;
  question: string;
  answer: string;
};

export type BrandDetailType = {
  id: number;
  name: string;
};

export type CarDetailType = {
  id: number;
  name: string;
  // imageId: string;
  imageUrl: string;
  brandId: number;
  priceFullDay: number;
  priceHalfDay?: number;

  year: string; // Tahun mobil dibuat
  fuelType: string; // Bensin, Solar, Listrik, Hybrid, dll.
  transmission: string; // Manual atau Automatic
  maxPassengers: number; // Maksimal jumlah penumpang
};
