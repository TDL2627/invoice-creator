import {create} from 'zustand';


export const useStore = create()((set, get) => ({
  active: false,
  invoiceData:{},
  setInvoiceData: async (payload) => {
    try {
      set({invoiceData: payload});
      const {invoiceData}=get();
      console.log(invoiceData,"aye");
    } catch (error) {
      console.error(error);
    }
  },
}));
