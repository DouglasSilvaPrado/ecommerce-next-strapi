import { Client } from '@/@types/Client';
import { StateCreator } from 'zustand';

export interface ClientSlice {
  client: Client | null
  setClient: (newClient: Client) => void
}


export const createClientSlice:StateCreator<ClientSlice> = (set, get) => ({
  client: null,

  setClient: (newClient: Client) => {
    let client = get().client
    client = newClient
    set({ client })
  }
})