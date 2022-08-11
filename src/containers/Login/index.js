import React from "react";
import { useHistory } from "react-router-dom";
import Logo1 from "../../assets/logo1.svg";
import Group from "../../assets/group.svg";
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
  Ofertas,
  Container2,
  Image1,
  ContainerItens,
  H1,
  LabelEmail,
  LabelSenha,
  InputEmail,
  InputSenha,
  InputLabelCheck,
  InputCheckBox,
  Conect,
  ButtonEntrar,
  SignLabel,
  Line,
  AccountLabel,
  ButtonCadastro,
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

function App() {
  const history = useHistory();

  function goUpPage(){
    history.push("/cadastro")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Logo1} />
      <Sobre>Sobre</Sobre>
      <Contact>Contato</Contact>
      <Ofertas>Ofertas</Ofertas>
      <Container2>
        <Image1 alt="grupo-imagem" src={Group} />
      </Container2>

      <ContainerItens>
        <H1>Login</H1>

       
        <LabelEmail for="email">Email</LabelEmail>
        <InputEmail type="email" id="email"placeholder="Digite seu email" />

        

        <LabelSenha for="senha">Senha</LabelSenha>
        <InputSenha type="password" id="senha" placeholder="Digite sua senha" />
        

      
        <InputLabelCheck>
          <InputCheckBox type="checkbox" />
          <Conect>Matenha-me conectado</Conect>
        </InputLabelCheck>

        <ButtonEntrar>
          <b>Entrar</b>
        </ButtonEntrar>

        <SignLabel>Esqueceu sua senha?</SignLabel>

        <Line />

        <Image />

        <AccountLabel>Ainda não possui uma conta?</AccountLabel>

        <ButtonCadastro onClick={goUpPage}>
          <b>Cadastre-se grátis!</b>
        </ButtonCadastro>
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

export default App;
