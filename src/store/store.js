import { create } from "zustand";

export const initialStore=create((set)=>({
    showCard:false,
    openCard:()=>{
        set({showCard:true})
    },
    closeCard:()=>{
        set({showCard:false})
    }
}));