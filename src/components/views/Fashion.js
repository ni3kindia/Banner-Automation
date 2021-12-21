import styled from "styled-components";
import modelImage from "../../assets/Model1.png";

const Fashion = () => {
  const BaseImg = styled.div`
    height: 524px;
    width: 1280px;
    background-color: #cb3240f7;
    position: center;
    display: wrapper;
    position: relative;
  `;

  const ModelImg = styled.div`
    height: 90%;
    width: 50%;
    background-image: url(${modelImage});
    margin-right: 80%;
    margin-top: 50px;
    position: absolute;
    img-fit: cover;
  `;
  const HeadDiv = styled.div`
    height: 30%;
    width: 90%;
    position: absolute;

    display: block;
    text-align: none;
    margin-top: 5%;

    margin-bottom: 2%;
    margin-left: 60%;
    color: white;
    font-family: Alata;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: black;
    font-size: 65px;
    opecity: 1px;
  `;

  const Offer = styled.div`
    height: 35%;
    width: 27%;
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

  const CoupanCode = styled.h1`
    height: 8%;
    width: 19%;
    position: absolute;
    background-color: #ffffff;
    margin-top: 30%;
    margin-bottom: 1%;
    margin-left: 60%;
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
    font-size: 20px;
    text-align: left;
    margin-top: -15px;
    margin-bottom: auto;
    margin-left: 40%;
    margin-right: auto;

    line-height: 15px;
    position: absolute;
    justify-content: center;
    font-family: Abril Fatface;
  `;

  const Terms = styled.p`
    height: 2%;
    width: 140%;
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
      <ModelImg> </ModelImg> <HeadDiv> FASHION </HeadDiv>
      <Offer>
        BUY 3 @ 42 % OFF *
        <br />
        <br />
        BUY 3 @ 40 % OFF *
      </Offer>{" "}
      <span />
      <CoupanCode>
        <br />
        <span />
        COUPAN: <Code> MSLB3 </Code>{" "}
        <Terms> * GST Applicable on discounted prices | TC apply </Terms>{" "}
      </CoupanCode>
    </BaseImg>
  );
};
export default Fashion;
