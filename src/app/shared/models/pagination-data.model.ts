export interface Pagination {
  limit: number;
  page: number;
  order: { [s: string]: string };
}

export interface PaginationData<T> {
  pagination: Pagination;
  data: T[];
}

export interface RequestFilters {
  pagination: Pagination;
  filter: string;
}
