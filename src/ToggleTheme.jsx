import { useEffect, useState } from "react";
import Luna from "./svgComps/Luna";
import Sol from "./svgComps/Sol";

const ToggleTheme = (params) => {

    const [dark, setDark] = useState(false);

    useEffect( ()=>{
        if(dark){
            document.documentElement.classList.add('dark')
        } else{
            document.documentElement.classList.remove('dark')
        }
    })
    const handelTheme = () =>{
        setDark(!dark);
    }
    return (
        <div>
            <div className='flex justify-between items-center md:w-[500px] md:mx-auto dark:bg-dark'>
                <p className='text-white text-2xl tracking-[10px] font-medium mt-14 '>TODO</p>
                <button className="mt-14 border-0 bg-inherit" onClick={handelTheme}>
                    {dark ? <Sol/>:<Luna/>}
                </button>
            </div>
        </div>
    )

}


export default ToggleTheme;