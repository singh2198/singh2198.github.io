import React from 'react'
import { AiFillCaretRight,AiFillCaretLeft } from 'react-icons/ai'

function Corosal(props) {
    
    console.log(props)

    const handleleftClick =()=>{
        // window.scrollBy(100,0)
        let value = document.getElementById('slider')
        value.scrollLeft=value.scrollLeft-1
        // console.log(value.scrollBy(35,0))
       


    }


  return (
    <>

        <AiFillCaretLeft size={40} style={{top:"150px" ,position:"relative" ,cursor:"pointer"}}  onClick={handleleftClick}></AiFillCaretLeft>
        <div style={{border:"1px solid red"
        ,height:"300px"
         ,display:"flex"
         ,flexDirection:"row"
         ,flexWrap:"wrap"
         ,overflow:"hidden"


         ,}}
        
         >


            {props.projects.map((el)=> (

            <>
            

           
            <div style={{border:"1px solid orange",width:"40%",height:"300px"}} >
                {/* Description....... */}
                <p id='slider'>{el.title}</p>




            </div>



            <div style={{border:"1px solid red"}} >
                {/* image...... */}
                <img src={el.src} alt={el.title}  style={{width:"700px"}} id="slider"/>




            </div>

            </>
            ))}
        </div>
        <AiFillCaretRight size={40} style={{top:"-90px" ,position:"relative", left:"90%" ,cursor:"pointer"}}></AiFillCaretRight>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Corosal