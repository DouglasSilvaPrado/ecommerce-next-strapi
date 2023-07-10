export interface Payment {
  items : Items[]
  shipments: Shipments
}

export type Items = {
  title: string,
  unit_price: number,
  quantity: number
  picture_url: string
}

export type Shipments = {
  cost: number
}