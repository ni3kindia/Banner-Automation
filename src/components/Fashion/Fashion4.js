import styled from "styled-components";
import modelImage from "../../assets/boy11.jpg";
const Fashion4 = () => {
  const BaseImg = styled.div`
  height: 500px;
  width: 1200px;
  position: center;
  display:block;
  position: relative;
  margin-top:3%;
  margin-right:auto;
  margin-left:1%;
    background-color: #fff16b;
  `;
  const ModelImg = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${modelImage});
    margin-right: 80%;
    margin-top:0.2px;
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
    margin-left: 65%;
    color:#535b5c;
    font-family: Alata;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 50px;
    opecity: 1px;
  `;
  const MainHead = styled.div`
    height: 30%;
    width: 90%;
    position: absolute;
    display: block;
    text-align: none;
    margin-top: 6%;
    margin-bottom: 2%;
    margin-left: 72%;
    color:#c53c3cf0;
    font-family: Alata;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 50px;
    opecity: 1px;
  `;
  const Offer = styled.div`
    height: 15%;
    width: 30%;
    position: absolute;
    background-color: #31cbbc;
    line-height: 1.5;
    text-align: center;
    margin-top: 15%;
    margin-bottom: 2%;
    margin-left: 63%;
    color: black;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 40px;
    border-radius: 15px;
    font-family: Abril Fatface;
    font-style: Bold;
  `;
  const CoupanCode = styled.h1`
    height: 7%;
    width: 16%;
    position: absolute;
    background-color: #ef5e5e;
    margin-top: 24%;
    margin-bottom: 1%;
    margin-left: 71%;
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
  const SaleName = styled.h3`
    height: 180%;
    width: 150%;
    position: absolute;
    background-color: #ffffff;
    display: block;
    text-align: center;
    margin-top: 18%;
    margin-bottom: 5%;
    margin-left: -22%;
    color: black;
    text-shadow: black;
    font-size: 20px;
    font-family: Roboto;
    font-style: Bold;
    border-radius: 25px;
`;
const Time = styled.h3`
height: 40%;
width: 50%;
position: absolute;
text-align: center;
margin-top: 5%;
margin-bottom: 2%;
margin-left: 19%;
color: #a13434;
letter-spacing: 1px;
text-shadow: black;
font-size: 19px;
font-family: Abril Fatface;
    font-style: Bold;
border-radius: 25px;
`;
  const Terms = styled.p`
    height: 10%;
    width: 150%;
    font-size: 14px;
    font-family: "Arimo";
    color: black;
    opacity: 0.45;
    margin-top: 140px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    line-height: 1px;
    position: absolute;
  `;
  return (
    <BaseImg>
      <ModelImg> </ModelImg> <Heading1> Fashion </Heading1> <MainHead> Lovers </MainHead>
      <Offer>
       FLAT  50 % OFF *
      </Offer>{" "}
      <span />
      <CoupanCode>
        <br />
        <span />
        <Code>   COUPAN:  MSLSFB </Code>{" "}
        <SaleName>Sales Start Early<Time>11 AM TO 6 PM </Time> </SaleName>
        <Terms><p> *Valid on Select Products</p> <br />
        GST Applicable on discounted prices | TC apply </Terms>{" "}
      </CoupanCode>
    </BaseImg>
  );
};
export default Fashion4;