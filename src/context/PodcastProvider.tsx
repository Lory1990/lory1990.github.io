import React, { useState } from "react";

export interface IPodcastContextType{
    play?: boolean,
    open?: boolean,
    playingSong?:number,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setPlay?: React.Dispatch<React.SetStateAction<boolean>>;
    setPlayingSong?: React.Dispatch<React.SetStateAction<number>>;
}

export const PodcastContext = React.createContext<IPodcastContextType>({});


const PodcastProvider : React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) =>{

    const [ play, setPlay ] = useState<boolean>();
    const [ open, setOpen ] = useState<boolean>(true);
    const [ playingSong, setPlayingSong] = useState<number>(0); 

    const value = {
        play, setPlay,
        open, setOpen,
        playingSong, setPlayingSong
    }

    return <PodcastContext.Provider value={value}>
        {children}
    </PodcastContext.Provider>
}

export default PodcastProvider;