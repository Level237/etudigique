import { create } from "zustand";
import { UniversityImages } from "../data/constants";

export const initialStore=create((set)=>({
    showCard:false,
    selectUniversity:null,
    openCard:()=>{
        set({showCard:true})
    },
    closeCard:()=>{
        set({showCard:false})
    },
    showUniversity:(id)=>{
        const selectOneUniversity=UniversityImages.find((university)=>university.id===id);
        set({selectUniversity:selectOneUniversity})
        set({showCard:true})
    }
}));