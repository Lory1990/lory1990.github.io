import React, { useState } from "react";

export interface IPodcastContextType{
    state?: StateEnum,
    open?: boolean,
    playingSong?:number,
    play?: (index : number) => void;
    pause?: () => void;
    stop?: () => void;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum StateEnum{
    PLAY,
    STOP,
    PAUSE
}

export const PodcastContext = React.createContext<IPodcastContextType>({});


const PodcastProvider : React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) =>{

    const [ state, setState ] = useState<StateEnum>(StateEnum.STOP);
    const [ open, setOpen ] = useState<boolean>(false);
    const [ playingSong, setPlayingSong] = useState<number>(0); 

    const play = (index : number) =>{
        setPlayingSong(index)
        setState(StateEnum.PLAY)
        setOpen(true)
    }

    const pause = () =>{
        setState(StateEnum.STOP)
        setOpen(true)
    }

    const stop = () =>{
        setPlayingSong(-1)
        setState(StateEnum.STOP)
        setOpen(false)
    }

    const value = {
        state,
        play,
        pause,
        stop,
        open, setOpen,
        playingSong
    }

    return <PodcastContext.Provider value={value}>
        {children}
    </PodcastContext.Provider>
}

export default PodcastProvider;