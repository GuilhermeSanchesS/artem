import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="CookBook Logo" />
      </Link>
      <Button className="ButtonLink" to="/cadastro/video" as={Link}>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
