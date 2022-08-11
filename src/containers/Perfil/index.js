import React from "react";
import { useHistory } from "react-router-dom";
import Logo1 from "../../assets/logo1.svg";
import Rosto from "../../assets/rosto.svg";
import Groupddd from "../../assets/lapis.svg";
import Logo2 from "../../assets/logo2.svg";
import Facebook from "../../assets/facebook_logo.svg";
import Twitter from "../../assets/twitter_logo.svg"
import Instagram from "../../assets/instagram_logo.svg"
import Linkedin from "../../assets/linkedin_logo.svg"
import Icones2 from "../../assets/group6.svg";


import {
  Container,
  Image,
  Sobre,
  Contact,
  LabelSaid,
  Header,
  Container2,
  Image1,
  ButtonAlt,
  TextDados,
  ContainerItens, 
  LabelNome,
  InputNome,
  LabelEmail,
  InputEmail, 
  Groupdx,
  InputGenero,
  InputData,
  InputEstadoCivil,
  InputCpf,
  AddressTwo, 
  LabelCep,
  InputCep,
  LabelRua,
  InputRua,
  Comp,
  InputComp,
  Bairro,
  InputBairro,
  Numero,
  InputNumber,
  Region,
  InputRegion,
  City,
  InputCity,
  ButtonSave,
  Cancel,
  ContainerFooter,
  TarkussLogo,
  Face, 
  Twtt, 
  Insta, 
  Linkd,
  Inc,
  P,
  P1,
  Contato,
  Icons2,
  EmailTarkuss,
  TelefoneFixo,
  Celular,
  Cidade,
  Endereço,
  Cidade2,
  Lançamento,
} from "./styles";



function Perfil() {
  const history = useHistory([]); 

  function goBackPage(){
    history.push("/")
  }
  return (
    <Container>
      <Image alt="logo-imagem" src={Logo1} />
      <Sobre>Sobre</Sobre>
      <Contact>Contato</Contact>
      <LabelSaid onClick={goBackPage}>Sair</LabelSaid>
      <Header>Olá, termine de preencher seu perfil</Header>
      <Container2>
          <Image1 alt="rosto" src={Rosto}/>
          <ButtonAlt type="button">Alterar foto</ButtonAlt>
          <TextDados>Seus dados pessoais</TextDados>
      </Container2>

      <ContainerItens>

        <LabelNome>Nome</LabelNome>
        <InputNome type="name" id="name"placeholder="Digite seu nome"/>

        <LabelEmail>Email</LabelEmail>
        <InputEmail type="email" placeholder="Digite seu email"/>

        <Groupdx alt="lapis-imagem" src={Groupddd}/>

        <InputGenero type="text" placeholder="Genero"/>

        <InputData type="date" placeholder="Data de Nascimento"/>

        <InputEstadoCivil type="text" placeholder="Estado civil"/>

        <InputCpf type="text" id="cpf" placeholder="CPF" maxLength="11"/>

        <AddressTwo>Endereço</AddressTwo> 

        <LabelCep>CEP</LabelCep>
        <InputCep type="tel" placeholder="62345-678" maxLength="9"/>

        <LabelRua type="text">Endereço</LabelRua>
        <InputRua type="text" placeholder="Rua Z"></InputRua>

        <Comp>Complemento</Comp>
        <InputComp type="text" placeholder="Apartamento 32"></InputComp>

        <Bairro type="text">Bairro</Bairro>
        <InputBairro type="text" placeholder="Dona Pedra"/>

        <Numero>Nº</Numero>
        <InputNumber type="text" placeholder="127"/>

        <Region>UF</Region>
        <InputRegion type="text" placeholder="AM"/>

        <City>Cidade</City>
        <InputCity type="text" placeholder="Manaus"/>

        <Cancel type="button">Cancelar</Cancel>
        <ButtonSave type="button">
          <b>Salvar</b>
        </ButtonSave>

      </ContainerItens>

      <ContainerFooter>
        <TarkussLogo alt="logo-image2" src={Logo2} />
        <Face alt="icone-facebook" src={Facebook} />
        <Twtt alt="icone-twitter" src={Twitter}/>
        <Insta alt="icone-instagram" src={Instagram}/>
        <Linkd alt="icone-linkedin" src={Linkedin}/>
        <Inc>Tarkuss Inc All rights reserved</Inc>

        <P>
          <b>A EMPRESA</b>
        </P>
        <P1>Quem somos?</P1>

        <Contato>
          <b>ENTRE EM CONTATO CONOSCO</b>
        </Contato>

        <Icons2 alt="icones-images2" src={Icones2}/>
        <EmailTarkuss>comercial@tarkuss.com.br</EmailTarkuss>
        <TelefoneFixo>(92) 3342-3738</TelefoneFixo>
        <Celular>(92) 99123-6045</Celular>

        <Cidade>MANAUS</Cidade>
        <Endereço>Av. A, 9 - Adrianópolis, Manaus-AM, 69057-004</Endereço>

        <Cidade2>GOIANIA</Cidade2>
        <Lançamento>Em breve</Lançamento>
      </ContainerFooter>
    </Container>
  );
}
export default Perfil;


