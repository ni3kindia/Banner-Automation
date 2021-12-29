import Component from '../views/Component';
import '../views/Componentstyle.css';
import data from '../views/Componentdata';

import Img1 from '../../assets/freeatthreebanner.png';
import Img2 from '../../assets/babyhugbanner.png';
import Img3 from '../../assets/Fashion1.png';
import Img4 from '../../assets/Fashion2banner.png';
import Img5 from '../../assets/Fashion3banner.png';
import Img6 from '../../assets/Fashion4banner.png';
import Img7 from '../../assets/Fashion1.png';
import Img8 from '../../assets/Fashion2banner.png';
import Img9 from '../../assets/Fashion3banner.png';
import Img10 from '../../assets/Fashion4banner.png';





import { useState } from 'react';



export default function Loadcomponent(){
 
    const[component,setcomponent]=useState("");

    return( 
        <div>
            <nav>
                <div className="image-container">
            <img class="imgs" src={Img1} onClick={()=>setcomponent("firstcomponent")} alt="" />

            <img  class="imgs" src={Img2} onClick={()=>setcomponent("secondcomponent")} alt="" />

            <img  class="imgs" src={Img3}  onClick={()=>setcomponent("thirdcomponent")} alt="" />

            <img  class="imgs" src={Img4}  onClick={()=>setcomponent("fourthcomponent")} alt=""/>

            <img  class="imgs" src={Img5}  onClick={()=>setcomponent("fifthcomponent")} alt="" />
            
            <img  class="imgs" src={Img6}  onClick={()=>setcomponent("sixthcomponent")} alt=""/>   
            
            <img  class="imgs" src={Img7}  onClick={()=>setcomponent("seventhcomponent")} alt=""/> 
            
            <img  class="imgs" src={Img8}  onClick={()=>setcomponent("eighthcomponent")} alt=""/> 
            
            <img  class="imgs" src={Img9}  onClick={()=>setcomponent("ninethcomponent")} alt=""/> 
            
            <img  class="imgs" src={Img10}  onClick={()=>setcomponent("tenthcomponent")} alt=""/> 
           
               </div>
</nav>
         


        <div className="component-container" >

           
                {component === "firstcomponent" && <Component data={data} index={0}/>}
                {component=== "secondcomponent" && <Component data={data} index={1}/>}
                {component === "thirdcomponent" && <Component data={data} index={2}/>}
                {component=== "fourthcomponent" && <Component data={data} index={3}/>}
                {component=== "fifthcomponent" && <Component data={data} index={4}/>}
                {component=== "sixthcomponent" && <Component data={data} index={5}/>}
                {component=== "seventhcomponent" && <Component data={data} index={6}/>}
                {component=== "eighthcomponent" && <Component data={data} index={7}/>}
                {component=== "ninethcomponent" && <Component data={data} index={8}/>}
                {component=== "tenthcomponent" && <Component data={data} index={9}/>}
                      

        </div>
            
</div>
                );

}