import { create } from "zustand";
import { UniversityImages } from "../data/constants";

export const initialStore=create((set)=>({
    showCard:false,
    showOverlay:false,
    selectUniversity:null,
    openCard:()=>{
        set({showCard:true})
    },
    closeCard:()=>{
        set({showCard:false})
    },
    openHoverLay:()=>{
        set({showOverlay:true})
    },
    closeHoverLay:()=>{
        set({showOverlay:false})
    },
    showUniversity:(id)=>{
        const selectOneUniversity=UniversityImages.find((university)=>university.id===id);
        set({selectUniversity:selectOneUniversity})
        set({showCard:true})
    }
}));