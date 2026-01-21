import { useEffect, useState } from "react";

export function Canvas({
    roomId,
    socket
}:{
    socket:WebSocket;
    roomId:string;
}){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [game,setGame] = useState<Game>();
    const [selectedTool,setSelectedTool] = useState<Tool>("circle")

    useEffect(()=>{
        game?.setTool(selectedTool);
    },[selectedTool,game]);

    
}