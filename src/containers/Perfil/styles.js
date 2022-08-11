import styled from "styled-components";
import Background from '../../assets/background1.svg'
import Footer from '../../assets/background2.svg'


export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    height: 79px;
    width: 1445px;
`;

export const Image = styled.img`
    position: absolute;
    width: 152px;
    left: 137px;
    top: 13.63px;
`;

export const Sobre = styled.p`
    position: absolute;
    width: 40px;
    height: 20px;
    left: 1151px;
    top: 27px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

`;

export const Contact = styled.p`
    position: absolute;
    width: 54px;
    height: 20px;
    left: 1244px;
    top: 27px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`;

export const LabelSaid = styled.p`
    position: absolute;
    width: 27px;
    height: 20px;
    left: 1350px;
    top: 27px;


    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: #FFFFFF;
    cursor: pointer;
    `;

export const Header = styled.h1`
    position: absolute;
    width: 461px;
    height: 30px;
    left: 135px;
    top: 149px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 1px;

    color: #182436;
`;


export const Container2 = styled.div`
position: absolute;
width: 719px;
height: 900px;
left: 353px;
top: 229px;
border-radius: 15px;
background: #F4F4F4;
`;

export const Image1 = styled.img`
    position: absolute;
    width: 110px;
    height: 110px;
    left: 55px;
    top: 45px;
`;

export const ButtonAlt = styled.button`
    height: 30px;
    width: 150px;
    left: 0px;
    margin-left: 35px;
    top: 0px;
    margin-top: 170px;
    border-radius: 22px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #2ADB86;
    border-radius: 22px;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const TextDados = styled.h2`
    height: 23px;
    width: 190px;
    left: 586px;
    margin-left: 230px;
    margin-top: 50px;
    top: 270px;
    border-radius: nullpx;

    font-size: 20px;
    line-height: 23px;    
    color: #27282A;
`;

export const ContainerItens = styled.div`
`;

export const H1 = styled.h1`
    position: absolute;
    width: 113px;
    height: 30px;
    left: 881px;
    top: 264px;

    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 1px;
    color: #182436;
`;

export const LabelNome = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 586px;
    top: 319px;


    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;


    color: #27282A;


`; 

export const InputNome = styled.input`
    position: absolute;
    width: 390px;
    height: 19px;
    left: 586px;
    top: 345px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;
    background: #F4F4F4;
`;

export const LabelEmail = styled.p`
position: absolute;
width: 390px;
height: 14px;
left: 586px;
top: 353px;
margin-top: 40px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;

color: #27282A;
`;

export const InputEmail = styled.input`
    position: absolute;
    width: 390px;
    height: 19px;
    left: 586px;
    top: 420px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;
`;

export const Groupdx = styled.img`
    height: 34.02778244018555px;
    width: 34.02778244018555px;
    left: 1.45849609375px;
    margin-left: 950px;
    margin-top: 410px;
    top: 0px;
    border-radius: 0px;

    position: absolute;
    left: 4.17%;
    right: -1.39%;
    top: 0%;
    bottom: 2.78%;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`;

export const InputGenero = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 141px;
    height: 19px;
    left: 586px;
    top: 470px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const InputData = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 141px;
    height: 19px;
    left: 586px;
    top: 510px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const InputEstadoCivil = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 144px;
    height: 19px;
    left: 786px;
    top: 470px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const InputCpf = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 144px;
    height: 19px;
    left: 786px;
    top: 510px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const AddressTwo = styled.h2`
    position: absolute;
    width: 84px;
    height: 23px;
    left: 586px;
    top: 600px;

    font-style: normal;
    font-size: 20px;
    line-height: 23px;

    color: #27282A;
`;

export const LabelCep = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 586px;
    top: 345px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputCep = styled.input`
    position: absolute;
    width: 353px;
    height: 19px;
    left: 586px;
    top: 665px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;
    background: #F4F4F4;
`;

export const LabelRua = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 586px;
    top: 405px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputRua = styled.input`
    position: absolute;
    width: 460px;
    height: 19px;
    left: 586px;
    top: 725px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;
    background: #F4F4F4;
`;

export const Comp = styled.p`
    position: absolute;
    width: 398px;
    height: 14px;
    left: 586px;
    top: 465px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputComp = styled.input`
    position: absolute;
    width: 390px;
    height: 19px;
    left: 586px;
    top: 790px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;
    background: #F4F4F4;
`;

export const Bairro = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 586px;
    top: 530px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputBairro = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 161px;
    height: 19px;
    left: 586px;
    top: 830px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const Numero = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 780px;
    top: 530px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputNumber = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 161px;
    height: 19px;
    left: 780px;
    top: 830px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const Region = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 586px;
    top: 595px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputRegion = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 161px;
    height: 19px;
    left: 586px;
    top: 895px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const City = styled.p`
    position: absolute;
    width: 390px;
    height: 14px;
    left: 780px;
    top: 595px;
    margin-top: 300px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #27282A;
`;

export const InputCity = styled.input`
    position: absolute;
    margin-top: 20px;
    width: 161px;
    height: 19px;
    left: 780px;
    top: 895px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    background: #F4F4F4;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #27282A;

`;

export const Cancel = styled.button`
    position: absolute;
    width: 161px;
    height: 19px;
    left: 595px;
    top: 680px;
    margin-top: 300px;
    border: none;
    cursor: pointer;
    

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;

    color: #FB4B4B;
`;


export const ButtonSave = styled.button`
    position: absolute;
    width: 150px;
    height: 30px;
    left: 790px;
    top: 975px;
    border: none;
    border-radius: 22px;
    background-color: #2ADB86;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const Button = styled.button`
    position: absolute;
    width: 400px;
    height: 40px;
    left: 877px;
    top: 740px;
    border: 1px solid #2ADB86;
    border-radius: 22px;
    background-color: #2ADB86;
    cursor: pointer;
    

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;




export const ContainerFooter = styled.div`
    background: url("${Footer}") ;
    background-size: cover;
    height: 186px;
    width: 1445px;
    left: 0px;
    top: 1083px;
    border-radius: 0px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 195.34%;
    bottom: 0%;


`;

export const TarkussLogo = styled.img`
    height: 35.81px;
    width: 141.42px;
    left: 155px;
    top: 1120.36px;
    border-radius: 0px;
    position: absolute;
    left: 10.76%;
    right: 100.42%;
    top: 20.29%;
    bottom: 8.89%;


`;

export const Face = styled.img`
    height: 23.172412872314453px;
    width: 23.172412872314453px;
    left: 161px;
    top: 1177.82763671875px;
    border-radius: 0px;

    position: absolute;
    left: 11.18%;
    right: 87.21%;
    top: 50.82%;
    bottom: 5.36%;
    cursor: pointer;

`;

export const Twtt = styled.img`
    height: 23.172412872314453px;
    width: 23.172412872314453px;
    left: 200.72412109375px;
    top: 1177.82763671875px;
    border-radius: 0px;

    position: absolute;
    left: 13.94%;
    right: 84.45%;
    top: 50.82%;
    bottom: 5.36%;
    cursor: pointer;
`;

export const Insta = styled.img`
    height: 23.172412872314453px;
    width: 23.172412872314453px;
    left: 240.44775390625px;
    top: 1177.82763671875px;
    border-radius: 0px;

    position: absolute;
    left: 16.7%;
    right: 81.69%;
    top: 50.82%;
    bottom: 5.36%;
    cursor: pointer;
`;

export const Linkd = styled.img`
    height: 23.172412872314453px;
    width: 23.172412872314453px;
    left: 280.1728515625px;
    top: 1177px;
    border-radius: 0px;

    
    position: absolute;
    left: 19.46%;
    right: 78.93%;
    top: 50.75%;
    bottom: 5.42%;
    cursor: pointer;
`;

export const Inc = styled.div`
    height: 19px;
    width: 214px;
    left: 161px;
    top: 1213px;
    border-radius: nullpx;

    position: absolute;
    left: 10.45%;
    right: 73.96%;
    top: 70.59%;
    bottom: 2.92%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;



`;

export const P = styled.p`
    height: 20px;
    width: 93px;
    left: 425.90625px;
    top: 1123px;
    border-radius: nullpx;

    position: absolute;
    left: 29.58%;
    right: 64.73%;
    top: 20.49%;
    bottom: 9.93%;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;

    color: #FFFFFF;

`;

export const P1 = styled.p`
    height: 20px;
    width: 113px;
    left: 426.90625px;
    top: 1149px;
    border-radius: nullpx;

    position: absolute;
    height: 20px;
    left: 29.65%;
    right: 62.51%;
    top: 35.49%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;

`;

export const Contato = styled.p`
    height: 20px;
    width: 253px;
    left: 629.90625px;
    top: 1123px;
    border-radius: nullpx;

    position: absolute;
    left: 43.74%;
    right: 41.4%;
    top: 20.49%;
    bottom: 10.17%;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;

color: #FFFFFF;

`;

export const Icons2 = styled.img`
    height: 73.048828125px;
    width: 18px;
    left: 629.90625px;
    top: 1153.951171875px;
    border-radius: 0px;

    position: absolute;
    left: 43.74%;
    right: 55.01%;
    top: 37.49%;
    bottom: 3.31%;

`;

export const EmailTarkuss = styled.p`
    height: 20px;
    width: 197px;
    left: 656.90625px;
    top: 1149px;
    border-radius: nullpx;
    
    position: absolute;
    left: 45.62%;
    right: 40.7%;
    top: 35.49%;
    bottom: 7.88%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;
`;

export const TelefoneFixo = styled.p`
    height: 20px;
    width: 197.74899291992188px;
    left: 657.3291015625px;
    top: 1178px;
    border-radius: nullpx;

    position: absolute;
    left: 45.65%;
    right: 40.62%;
    top: 50.49%;
    bottom: 5.59%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;
`;

export const Celular = styled.p`
    height: 20px;
    width: 197.74899291992188px;
    left: 657.3291015625px;
    top: 1207px;
    border-radius: nullpx;

    position: absolute;
    left: 45.65%;
    right: 40.62%;
    top: 66.49%;
    bottom: 3.31%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;

`;

export const Cidade = styled.p`
    height: 19px;
    width: 164px;
    left: 933.90625px;
    top: 1120px;
    border-radius: nullpx;

    position: absolute;
    left: 64.85%;
    right: 23.76%;
    top: 20.49%;
    bottom: 10.24%;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;

    color: #FFFFFF;
`;

export const Endereço = styled.p`
    height: 40px;
    width: 197px;
    left: 933.90625px;
    top: 1149px;
    border-radius: nullpx;

    position: absolute;
    left: 64.85%;
    right: 21.46%;
    top: 35.49%;
    bottom: 6.3%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;
`;

export const Cidade2 = styled.p`
    height: 19px;
    width: 65px;
    left: 1218.90625px;
    top: 1120px;
    border-radius: nullpx;

    position: absolute;
    left: 84.65%;
    right: 10.84%;
    top: 20.49%;
    bottom: 10.24%;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    text-transform: uppercase;

    color: #FFFFFF
`;

export const Lançamento = styled.p`
    height: 19px;
    width: 66px;
    left: 1218.90625px;
    top: 1149px;
    border-radius: nullpx;

    position: absolute;
    left: 84.65%;
    right: 10.77%;
    top: 35.49%;
    bottom: 7.96%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF
`;

