import { create } from "zustand";
import { UniversityImages } from "../data/constants";

export const initialStore=create((set)=>({
    showCard:false,
    showOverlay:false,
    showHeader:false,
    selectUniversity:null,
    openCard:()=>{
        set({showCard:true})
    },
    closeCard:():void=>{
        set({showCard:false})
    },
    openHoverLay:()=>{
        set({showOverlay:true})
    },
    closeHoverLay:()=>{
        set({showOverlay:false})
    },
    openShowHeader:()=>{
        set({showHeader:true})
    },
    closeShowHeader:()=>{
        set({showHeader:false})
    },
    showUniversity:(id:number)=>{
        const selectOneUniversity=UniversityImages.find((university)=>university.id===id);
        set({selectUniversity:selectOneUniversity})
        set({showCard:true})
    }
}));