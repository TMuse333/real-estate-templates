import React, { useState,useEffect } from "react";
import './navbar3.css';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const SubMenu = ({isHovered,mouseEnter,mouseLeave,
    resourceIndex}) => {

        const [itemHovered, setItemHovered] = useState(null)

        const handleMouseEnter = (index) => {
            setItemHovered(index)
        }

        const handleMouseLeave = () => {
            setItemHovered(null)
        }

    const serviceMenuData = [
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

    const resourcesMenuData = [
        {
            name:'Focus Tactics',
            description:`We live in a world where the ability the focus is becoming 
            more valuable at the same time where it is becoming more rare.
            Learn how to hone your focus to surpass the competition and
            become a winner.`
        },
        {
            name:'The Quantum Realm',
            description:`The Quantum Realm is a place where every possibility exists.
            You can experience anything you want in the Quantum Realm
            before making it a reality. Learn how to use this power to its
            fullest ability to live the life you dream.
            `
        },
        {
            name:'The Way of the Samurai',
            description:`With so many distractions and impurity in todays
            it is essential that you don't fall off the path
            mastering your craft. Learn the ways of the Samurai to become your strongest
            self and obtain self-mastery.`
        },
        {
            name:'Health Tactics',
            description:`The journey of mastery is long and challenging,
            It is essential you have high energy and maintain strong 
            physical health to sustain years and years of hard work everyday.
            Learn these health tactics to improve every area of your life.
            `
        }
    ]

    const resourcesList = [
        serviceMenuData,
        resourcesMenuData

    ]

    const style = ()=>{

        return 
        opacity: isHovered ? 1 : 0
    }



    return (
        <section 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={style}
         className="submenu-container">

            {/* {resourceIndex !== null && (

 <> */}
           {resourcesList[resourceIndex ?? 1].map((item,index) => (
            <div className="submenu-box"
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            key={index}>
                <h2>
                    {item.name}
                </h2>
                <div className="submenu-line">

                </div>
                <p>{item.description}</p>
            </div>
           ))}

{/* </>

           )} */}
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





  const handleListEnter = (index) => {
    setListHovered(index)
    handleSubEnter()
    console.log('mouse entered on the list')
    console.log('index',index)
  }

  const handleListLeave = () => {
    // setListHovered(null)
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
    setResourceIndex(index)
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


  const [listEntered, setListEntered] = useState(false)

  const [resourceIndex, setResourceIndex] = useState(null)

  const handleListEntry = (index) => {

    
    console.log('list entered!',index)
    console.log('the current index of resource is',resourceIndex)
    setListEntered(true)
    setSubHovered(true)
  }

  useEffect(()=> {
    if (resourceIndex !== null){
        console.log('1current resource index',resourceIndex)
    }
  },[resourceIndex])
  

  const handleSubEnter = (index) => {
   if(listEntered){
console.log('resource display is',resourceIndex)
 setResourceIndex(index)
 console.log(resourceIndex)
    setSubHovered(true)
}



console.log(activeMenuItem)

}

const handleSubLeave = () => {
    console.log('sub exiting')
    // setResourceIndex(null)
    setListEntered(false)
    setSubHovered(false)
  }


  useEffect(()=> {
    if(!listEntered || !subHovered){
        setResourceIndex(null)
    }
  },[listEntered,subHovered])


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
            onMouseEnter={()=>handleListEntry(0)}
            onMouseLeave={()=>handleSubLeave()}

            // onMouseLeave={()=>handleSubLeave()}
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
                onMouseEnter={()=>handleListEntry(1)}
                onMouseLeave={()=>handleSubLeave()}
                >
                    Resources
                </li>

                <li>
                    Contact
                </li>

                </ul>


                </div>
                <SubMenu
                mouseEnter={()=>handleSubEnter(resourceIndex)}
                isHovered={subHovered}
                mouseLeave={()=>handleSubLeave()}
                resourceIndex={resourceIndex}
                />
           
           
  
           
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
