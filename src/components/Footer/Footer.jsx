import {
    FooterContainer,
    FooterContent,
    FooterLink,
    FooterSocialMedia,
    FooterText,
    I,
} from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterSocialMedia>
            <FooterLink>
              <I className="bx bxl-github"></I>
            </FooterLink>
            <FooterLink>
              <I className="bx bxl-linkedin-square"></I>
            </FooterLink>
          </FooterSocialMedia>
          <FooterText>&copy; 2025 Galeria de Fotos. Todos os direitos reservados</FooterText>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
