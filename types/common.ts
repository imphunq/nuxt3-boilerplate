export interface IBreadcrumb {
  name: string
  href?: string
}

export interface ILabelValue {
  label: string
  value: string
}

export interface LinkDetail {
  title: string
  href?: string
}

export interface IPagination {
  current_page: number
  from: number
  last_page: number
  per_page: number
  to: number
  total: number
}
