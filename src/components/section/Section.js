import React from 'react'

const Section = ({title, children, style}) => {
    return (
        
        <div className={style} >
            <h2>{title}</h2>
            {children}
            
        </div>
    );
}

export default Section;