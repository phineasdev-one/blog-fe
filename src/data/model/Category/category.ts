export type Category = {
  id: string;
  name: string;
  poster: string;
  description: string;
  postCount: number;
};

export type GetCategoriesResponse = Category[];
