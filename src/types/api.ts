export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  gender?: null;
  dob?: null;
  email_verified_at: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
};

export type AuthResponse = {
  data: {
    user: User;
    access_token: string;
    refresh_token: string;
  };
};

export type Donor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  donations: Donations[];
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  createdAt: string;
  donations: Donations;
};
export type Currency = {
  id: string;
  code: string;
  symbol: string;
  name: string;
  createdAt: string;
  donations: Donations;
};
export type Donations = {
  id: string;
  donorId: number;
  donor: Donor;
  categoryId: number;
  category: Category;
  currencyId: number;
  currency: Currency;
  amount: number;
  reference: string;
  authorizationUrl: string;
  status: string;
  metadata: any;
  createdAt: string;
  updatedAt: string;
  transactions: PaymentTransaction;
};

export type PaymentTransaction = {
  id: string;
  donationId: number;
  donation: Donations;
  provider: string;
  providerRef: string;
  amount: number;
  status: string;
  rawResponse: JSON;
  createdAt: string;
};


