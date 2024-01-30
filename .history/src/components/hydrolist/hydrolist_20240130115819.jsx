import React,{useState, useEffect} from "react";



const HydroList = () => {

    const [expandedIndices, setExpandedIndices] = useState([]);

    const handleContentClick = (index) => {
        setExpandedIndices((prevIndices) =>
          prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
        );
      };

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
            <div className="hydro-list">
               {data.map((data,index) => (
                <div className="hydro-element"
                onClick={()}>
                        <h2>
                            {data.name}
                        </h2>
                    </div>
               ))}

            </div>
        </div>
    )
}