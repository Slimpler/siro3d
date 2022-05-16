import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormBtnWrap,
  FormRoute,
  A,
} from "./EntrarElements";

import SimpleModal from "./modalPassword";

const Entrar = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Alenma</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Alenma</FormH1>
              <FormLabel htmlFor="email">Correo</FormLabel>
              <FormInput type="email" id="email" placeholder="Ej: carlos@gmail.com" required />
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput type="password" id="password" placeholder ="Ej: 123456" required />
              <FormLabel style={{ textAlign:"center"}}>
                ¿Has olvidado tu Contraseña?  
                <SimpleModal />
              </FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
                <FormRoute to="/">Entrar</FormRoute>
              </FormBtnWrap>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>

            </Form>
        </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Entrar;
