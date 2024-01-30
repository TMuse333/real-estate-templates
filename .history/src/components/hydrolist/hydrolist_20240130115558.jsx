import React,{useState, useEffect} from "react";



const HydroList = () => {

    const data = [
        {
            name:'Name',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aut ex sint dicta provident optio, mollitia facilis? Alias, optio cupiditate?'
        },
        {
            name:'Name',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aut ex sint dicta provident optio, mollitia facilis? Alias, optio cupiditate?'
        },
        {
            name:'Name',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aut ex sint dicta provident optio, mollitia facilis? Alias, optio cupiditate?'
        },
        {
            name:'Name',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aut ex sint dicta provident optio, mollitia facilis? Alias, optio cupiditate?'
        },
        {
            name:'Name',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aut ex sint dicta provident optio, mollitia facilis? Alias, optio cupiditate?'
        },

    ]


    return (
        <div className="hydrolist-container">
            <ul className="hydro-list">
               {data.map((data,index) => (
                
               ))}

            </ul>
        </div>
    )
}