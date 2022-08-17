/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <Header>
        <CloseButton onClick={onDismiss}><Icon id="close" /></CloseButton>
        </Header>
        <Navigation>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Navigation>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background:  rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  height: 100vh;
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  padding: 32px;
`;

const Header = styled.div`
  flex: 1;
`;

const Navigation = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-weight: 600;

  &:visited {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 16px;
  flex-direction: column;
  justify-content: flex-end;
`;

export default MobileMenu;
