import React from 'react'

export const Item = ({ nameItem, imgItem, priceItem, boton }) => {

    return (
        <div className='itemContainer'>
            <div className='bodyItem'>
                <img className='imgItem' src={imgItem} alt="imagen calzado nike" />
            </div>
            <div className='footerItem'>
                <p className='titleItem'>{nameItem} </p>
                <span className='priceItem'>${priceItem}</span>
                {boton}
            </div>
        </div>
    )
}
