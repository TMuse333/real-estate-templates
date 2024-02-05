import React, { useState,useEffect } from "react";
import './navbar3.css';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const SubMenu = ({isHovered,mouseEnter}) => {

    const subMenuData = [
        {
            name:'Web dev',
            description:`We make banging websites 
            with the most fire animations
            you'll see while still having your content
            be the main focus`
        },
        {
            name:'Copywriting',
            description:`The way of the samurai is the true way
            We use the art of persuasion from an extensive
            background in english to get you more sales`
        },
        {
            name:'Graphic Design',
            description:`If you need some visual sauce we got you
            too, we have a visual prowess like the Uchiha clan`
        },
        {
            name:'Quantum endeavours',
            description:'We will go to the quantum realm and get it done.'
        }
    ]

    const style ={
        opacity: isHovered ? 1 : 0
    }

    return (
        <section 
        style={style}
         className="submenu-container">
           {subMenuData.map((item,index) => (
            <div className="submenu-box"
            key={index}>
                <h2>
                    {item.name}
                </h2>
                <div className="submenu-line">

                </div>
                <p>{item.description}</p>
            </div>
           ))}
        </section>
    )
}

const Navbar3 = () => {
  const [navButtonClicked, setNavButtonClicked] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  const [isHovered, setIsHovered] = useState(null);

  const [returnClicked, setReturnCLicked] = useState(false)

  const [listHovered, setListHovered] = useState(null);


  const [subHovered, setSubHovered] = useState(false)

  const handleSubEnter = () => {
    setSubHovered(true)
  }

  const handleSubLeave = () => {
    setSubHovered(false)
  }

  const handleListEnter = (index) => {
    setListHovered(index)
    console.log('mouse entered')
  }

  const handleListLeave = () => {
    setListHovered(null)
    console.log('mouse exited!?')
  }

  const subMenuReturn = () => {
    setReturnCLicked(true);
    setActiveMenuItem((prevActiveMenuItem) => {
      if (prevActiveMenuItem !== null) {
        return null;
      }
      return 9;
    });
    console.log('menu',activeMenuItem)
    console.log('set return', returnClicked);
  };
  



  const handleNavClick = () => {
    setNavButtonClicked(!navButtonClicked);
    setActiveMenuItem(null); // Reset active menu item when clicking on the main nav button
  };

  const handleMouseEnter = (index) => {
   isDesktop ? setIsHovered(index) : null
    console.log('mouse entered')
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  useEffect(()=> {
    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1000)
        if(isDesktop){
            setActiveMenuItem(null)
            setNavButtonClicked(false)
        }
    }

    window.addEventListener('resize',handleResize)

    return () => {
        window.removeEventListener('resize',handleResize)
    }
},[])

useEffect(() => {
    if (returnClicked) {
      setActiveMenuItem(null);
      setReturnCLicked(false);
      console.log('set return', returnClicked);
    }
  }, [returnClicked]);

  const handleMenuItemClick = (index) => {


    console.log('click')
    setActiveMenuItem(index);
    

 
   
  };


  

  const listStyle = (index) =>{
    const selected = index === listHovered

    return {
        color: selected ? 'rgb(185, 185, 185)' : 'white',
        // width:'min-content',
        // padding:'0',
        // backgroundColor:'red',
        // margin:'0'
    }
  }



  const navStyle = {
    right: navButtonClicked ? '0%' : '-200%',
    transition: 'right 0.8s ease-in',
    paddingTop: '4rem',
    paddingLeft: '2rem',
  };

  const secondaryNavStyle =  {
   
        right: 
         activeMenuItem !== null 
         ? '0' : '-150%',
        transition: 'right 0.3s ease-in',
        top:0

  }







 


  const subList = (
    <>
    <ul className="secondary-nav"
        style={secondaryNavStyle}>
    <button className="sub-button"
    onClick={()=>subMenuReturn()}
    >
        Back
        </button>

{activeMenuItem === 0 ? (
    <>
    <li>Web Dev</li>
    <li>Copywriting</li>
    <li>Quantum Realm</li>
    </>
) : activeMenuItem === 1 ? (
    <>
    <li>Our mission</li>
    <li>About us</li>
    <li>The Way of The samurai</li>
    </>
) : null
}

    


        </ul>
    </>
  )



  const mainNavStyle = {
    opacity: activeMenuItem !== null ? 0 : 1,
    transition: 'opacity 0.3s ease-in'
  }

  return (
    <nav className="nav3-container">


   
  
      
  
        {isDesktop ? (
          <>
          <div className="desktop-wrapper">

          <Link to='/'>
        <p className="company-name">Company name</p>
      </Link>




 
          <ul className="nav3-desktop-menu">

       
          
              <li 
              onMouseEnter={()=>handleMouseEnter(0)}
              onMouseLeave={()=>{handleMouseLeave()}}
              >
                Services 
                         
              </li>

              <li
               onMouseEnter={()=>handleMouseEnter(1)}
               onMouseLeave={()=>{handleMouseLeave()}}
              >
                About
              </li>

                <li
                 onMouseEnter={()=>handleMouseEnter(0)}
                 onMouseLeave={()=>{handleMouseLeave()}}
                >
                    Resources
                </li>

                <li>
                    Contact
                </li>

                </ul>


                </div>
                <SubMenu
                mouseEnter={handleSubEnter}
                isHovered={subHovered}/>
           
           
  
           
          </>
        ) : (
          <>

<Link to='/'>
        <p className="company-name">Company name</p>
      </Link>

      <div className="nav3-logo" onClick={() => handleNavClick()}>
        <div className="nav-line"/>
        <div className="nav-line"/>
        <div className="nav-line"/>
        </div>

<ul className="nav3-contents" style={!isDesktop ? navStyle : null}>
        <p className="x-button" onClick={() => handleNavClick()}>X</p>

   
    <div className="main-nav"
    style={mainNavStyle}>
      
            <ul>
                <li 
                    onMouseEnter={() => handleListEnter(0)}
                    onMouseLeave={() => handleListLeave()}
                    style={listStyle(0)}
                    onClick={() => handleMenuItemClick(0)}
                >
                    Services
                </li>
                <li 
                    onMouseEnter={() => handleListEnter(1)}
                    onMouseLeave={() => handleListLeave()}
                    style={listStyle(1)}
                    onClick={() => handleMenuItemClick(1)}
                >
                    About 
                </li>
                <li 
                    onMouseEnter={() => handleListEnter(2)}
                    onMouseLeave={() => handleListLeave()}
                    style={listStyle(2)}
                    onClick={() => handleMenuItemClick(2)}
                >
                    Contact
                </li>
            </ul>
        
    </div>

            {subList}
            </ul>

          </>
    
     
      )}
    </nav>
  );
  
};

export default Navbar3;
