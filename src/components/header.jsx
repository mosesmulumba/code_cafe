import { Link } from 'react-router-dom';
import { GiCoffeeCup } from "react-icons/gi";
import "../App.css";

export default function Header({region, title}) {
  return (
    <Link to='/' className="header">
      <GiCoffeeCup size="70px" className="icon--coffee" />
      <div className="headings">
        <h1 className="heading">{title}</h1>
        <h2 className="heading--1">{region}</h2>
      </div>
    </Link>
  );
}
