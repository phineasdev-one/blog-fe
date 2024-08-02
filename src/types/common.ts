export type ChildProps = {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
};

export type ApiMeta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export type ApiPaging = {
  limit: number;
  page: number;
};

export type Photo = {
  id: string;
  url: string;
};
