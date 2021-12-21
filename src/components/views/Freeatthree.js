import styled from 'styled-components';
import modelImg from "../../assets/freeatthree.png"
const Freeatthree = ()=>{
    const BaseImg=styled.div 
`
background-color:#543276;
width: 1200px;
height:400px;
margin-top: 5%;
margin-bottom: 10%;
display: block;
text-align:right;
position: relative;
`;
const ModelImg=styled.div 
`
background-image:url(${modelImg});
height: 100%;
width: 45%;
position: absolute;
`;
const Heading=styled.h1 
`
margin-left: 120%;
margin-top: 10.10%;
 margin-left: 110%;
width:100%;
color:white;
`;
const Heading2=styled.h3
`
color:white;
width:100%;
margin-left: 80%;
`;
const Heading3=styled.h5
`
margin-left: 54%;
margin-top: 9.10%;
width:100%;
font-size: 4%;
color:#7c6c81;
`;
const Heading4=styled.h1
`
margin-left: 110%;
margin-top: -7.10%;
width:100%;
font-size: 4%;
color:#7c6c81;
`;
const Coupan=styled.div 
`
 color:white;
 margin-top: 25.10%;
 margin-left: 65%;
 display: block;
 position: absolute;
 width:20%;
 display: block;
 border: 1px solid rgb(229, 228, 235);
  padding: 2px;
  background-color: #31154a;
 text-align: center;
font-family: "Roboto";
 font-weight: bold;
 font-style: normal;
 text-decoration: "";
 font-size: 19;
`;
return (
  <BaseImg>
<ModelImg> 
<Heading>  <h1> FIRST 500 ORDERS FREE </h1>
</Heading>
<Heading2><h3> @ 3 PM Today </h3></Heading2>
<Heading3><h6>IF YOU MISS IT GET  </h6></Heading3>  
<Heading4><h1>FLAT 60 % OFF</h1></Heading4>
</ModelImg>
<Coupan>BUILD YOUR CART NOW</Coupan>
  </BaseImg>
);
};
export default Freeatthree;