import styled from "styled-components";
import modelImage from "../../assets/fashion2.jpg";



const Fashion2 = () => {
  const BaseImg = styled.div`
  height: 500px;
  width: 1200px;
  position: center;
  display:block;
  position: relative;
  margin-top:3%;
  margin-right:auto;
  margin-left:1%;
    background-color: #cb3240f7;
  `;
  const ModelImg = styled.div`
    height: 87%;
    width: 50%;
    background-image: url(${modelImage});
    margin-right: 80%;
    margin-top:3px;
    position: absolute;
    img-fit: cover;
  `;
  const Heading1 = styled.div`
    height: 30%;
    width: 90%;
    position: absolute;
    display: block;
    text-align: none;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 60%;
    color: #efe90ad4;
    font-family: Alata;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 50px;
    opecity: 1px;
  `;
  const Subhead = styled.div`
    height: 30%;
    width: 90%;
    position: absolute;
    display: block;
    text-align: none;
    margin-top: 7%;
    margin-bottom: 2%;
    margin-left: 60%;
    color: #efe90ad4;
    font-family: Alata;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 30px;
    opecity: 1px;
  `;
  const Offer = styled.div`
    height: 25%;
    width: 40%;
    position: absolute;
    background-color: #ffffff;
    display: block;
    line-height: 1.5;
    text-align: center;
    margin-top: 14%;
    margin-bottom: 2%;
    margin-left: 57%;
    color: black;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 30px;
    font-family: Roboto;
    font-style: Bold;
    border-radius: 25px;
  `;
  const Offer1 = styled.div`
position: absolute;
line-height: 1.5;
text-align: center;
margin-top: 9%;
margin-bottom: 4%;
margin-left: 6%;
color: black;
letter-spacing: 1px;
text-shadow: black;
font-family: Abril Fatface;
font-family: Roboto;
    font-style: normal
  font-style: normal;
font-size: 25px;
${'' /* font-family: Roboto;
font-style: Bold; */}
border-radius: 15px;
`;
const Offer2 = styled.div`
position: absolute;
line-height: 1.5;
text-align: center;
margin-top: -9%;
margin-bottom: 4%;
margin-left:55%;
color: black;
letter-spacing: 1px;
text-shadow: black;
font-size: 25px;
font-family: Abril Fatface;
  font-style: normal;
border-radius: 15px;
`;
const Offersubhead = styled.div`
position: absolute;
background-color: #ffffff;
line-height: 1.5;
text-align: center;
margin-top: -4%;
margin-bottom: 4%;
margin-left: 12%;
color: #9d1414;
letter-spacing: 1px;
text-shadow: black;
font-family: Abril Fatface;
font-family: Roboto;
    font-style: normal
  font-style: normal;
  font-weight:Bold;
font-size: 15px;
${'' /* font-family: Roboto;
font-style: Bold; */}
border-radius: 15px;
`;
  const CoupanCode = styled.h1`
    height: 7%;
    width: 16%;
    position: absolute;
    background-color: #ffffff;
    margin-top: 28%;
    margin-bottom: 1%;
    margin-left: 70%;
    margin-right: auto;
    justify-content: right;
    line-height: 15px;
    border-radius: 7px;
    color: #070707;
    font-family: Abril Fatface;
    letter-spacing: 0;
    text-shadow: black;
    font-size: 20px;
  `;
  const Code = styled.h1`
    font-weight: Bold;
    font-size: 17px;
    text-align: left;
    margin-top: -7px;
    margin-bottom: auto;
    margin-left: 18%;
    margin-right: auto;
    line-height: 15px;
    position: absolute;
    justify-content: center;
    font-family: Abril Fatface;
  `;
  const Terms = styled.p`
    height: 20%;
    width: 170%;
    font-size: 15px;
    font-family: "Arimo";
    color: black;
    opacity: 0.45;
    margin-top: 40px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    line-height: 1px;
    position: absolute;
  `;
  return (
    <BaseImg>
      <ModelImg> </ModelImg> <Heading1> SUPERHIT </Heading1> <Subhead> FASHION BRAND </Subhead>
      <Offer>
        <Offer1>FLAT  35 % OFF * <Offersubhead>For Club Members</Offersubhead></Offer1>
       <br /> {" | "}
       <Offer2> FLAT  40 % OFF * <Offersubhead>For All Members</Offersubhead></Offer2>
      </Offer>{" "}
      <span />
      <CoupanCode>
        <br />
        <span />
        <Code>   COUPAN:  MSLSFB </Code>{" "}
        <Terms><p> *Valid on Select Products</p>     <br />
        GST Applicable on discounted prices | TC apply </Terms>{" "}
      </CoupanCode>
    </BaseImg>
  );
};
export default Fashion2;