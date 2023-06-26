import React from 'react'
import style from './Body.module.css';
import { ArrowDown } from 'react-feather';
function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    return (
        <div className={style.container}>
            <p className={style.heading}>Resume Builder</p>
            <div className={style.toolbar}>
                <div className={style.colors}>
                    {colors.map((item) => (
                        <span key={item}
                        style={{backgroundColor : item}}
                        className={style.color}/>
                    ))}
                </div>
                <button>Download<ArrowDown/></button>
            </div>
        </div>
    )
}

export default Body