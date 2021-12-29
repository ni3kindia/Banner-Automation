import styled from "styled-components";
import ProductImg from "../../assets/lotionbottle.jpg";
import LogoImg from "../../assets/logo.png";

const Babyhug = () => {
  
  const BaseImgdiv1 = styled.div`
    height: 500px;
    width: 1200px;
    position: center;
    display:block;
    position: relative;
    margin-top:3%;
    margin-right:auto;
    margin-left:1%;
    border-bottom:148px solid white;
    background-color:#1a9cd2;
    border-radius:15px;
  `;




  const Logo=styled.div`
  background-image: url(${LogoImg});
  height:100%;
  width:30%;
  background-repeat:no-repeat;
  margin-right: 100%;
  margin-left:4%;
  margin-top: 272px;
  position: absolute;
  `;

  const Logo2=styled.div`
    height: 15%;
    width: 10%;
    position: absolute;
    background-color:hsl(354deg 71% 56%);
    margin-top:40px;
    margin-bottom:auto;
    margin-left:20px;
    margin-right: auto;
    border-radius: 14px 1px 14px 1px;
    font-style:"Allura";
    font-size:28px;
    color:white;
    text-align:center;
    line-height:50px;
    font-weight:Bold;
    font-style:"Cursive";
    `;


    // const Logoa=styled.div(
    //   ({bg,height,width})=>
    //   `
    //   bacground:${props=>props.bg ?"red":"green"};
    //   height:${props=>props.height ? "200px":"2px"};
    //   width:${props=>props.width ? "300px":"2px"};
      
    //   `);
    
    
    const TagLine=styled.p`
    height:125px;
    width:240px;
    position: absolute;

    display: block;
    text-align:center;
    margin-top: 8%;

    margin-bottom: 2%;
    margin-left:0.2%;
    color:#033958;
    font-family: "Alata"s;
    font-style:cursive;
    font-weight:bold;
    letter-spacing:1px;
    text-shadow:#033958;
    font-size: 15px;
    
    
   
    `;

  const ProductImage = styled.div`
    height: 700px;
    width: 700px;
    background-image: url(${ProductImg});
    margin-right: 100%;
    margin-left:20%;
    margin-top: 110px;
    
    position: absolute;
    background-repeat:no-repeat;
    border-radius:70px 0px 0px 0px;
  `;
  const HeadDiv = styled.div`
    height:125px;
    width: 450px;
    position: absolute;

    display: block;
    text-align:center;
    margin-top: 3%;

    margin-bottom: 2%;
    margin-left:55%;
    color: white;
    font-family: "Alata"s;
    font-style:cursive;
    font-weight:bold;
    letter-spacing:1px;
    text-shadow: black;
    font-size: 40px;
    opecity: 1px;
    
  `;

  const Offer = styled.div`
    height: 30%;
    width: 35%;
    position: absolute;
    background-color: #ffffff;
    display: block;
    line-height: 1.5;
    text-align: center;
    margin-top: 14%;
    margin-bottom: 2%;
    margin-left: 55%;
    color: black;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 20px;
    font-family: "Roboto";
    font-style: Bold;
    border-radius: 20px 10px 10px 20px;
    opecity:2;
    
  `;

const Offer1div=styled.div`

height:100%;
width:48%;
position:absolute;
background-color:white;
border-right:2px solid grey;
border-radius: 10px 0px 0px 10px;
`
;
const Offer1=styled.h1`
font-size:25px;
 font-weight:bold;   
`;

const Offer2=styled.h1`
font-size:27px;
font-weight:bold;   
`;

const Offer2div=styled.div`
height:100%;
width:50%;
background-color:white;
position:absolute;

margin-left:50%;
border-radius: 0px 10px 10px 0px;

`
;

  const CoupanCode = styled.h1`
    height: 10%;
    width: 15.5%;
    position: absolute;
    background-color:hsl(354deg 71% 56%);
    margin-top:300px;
    margin-bottom:auto;
    margin-left:65%;
    margin-right: auto;
    text-align:left;
    line-height: 15px;
    border-radius: 7px;
    color:white;
    font-family: "Abril Fatface";
    letter-spacing: 0;
    text-shadow: black;
    font-size: 20px;
  `;
  const Code = styled.h1`
    font-weight: Bold;
    font-size: 20px;
    text-align: left;
    margin-top: -15px;
    margin-bottom: auto;
    margin-left: 45%;
    margin-right: auto;
    line-height: 15px;
    position: absolute;
    text-align:right;
    font-family: "Abril Fatface";
  `;

  const Terms = styled.p`
    height: 2%;
    width: 178%;
    font-size: 15px;
    font-family: "Arimo";
    color: black;
    opacity: 0.45;
    margin-top: 40px;
    margin-bottom: auto;
    margin-left:auto;
    margin-right: auto;
    line-height: 1px;
    position: absolute;
    
  `;

  return (
    <BaseImgdiv1>
   
      <ProductImage> </ProductImage> <HeadDiv> Goodness Of Milk For <br/>Healthy Baby Skin</HeadDiv>
      <Offer>
        <Offer1div>FLAT<br/> <Offer1>45% OFF*</Offer1>For Club members</Offer1div>
        <Offer2div>FLAT <br/><Offer2>40% OFF* </Offer2>For All members</Offer2div>
      </Offer>
      <span />  
      <CoupanCode>
        <br />
        <span />
        COUPAN: <Code> BHGSKN</Code>
        <Terms> * GST Applicable on discounted prices | TC apply </Terms>
      </CoupanCode>
      <Logo2>babyhug</Logo2><TagLine>India's largest baby brand Most trusted by Moms</TagLine>
      <Logo></Logo>
    </BaseImgdiv1>
  );
};
export default Babyhug;
