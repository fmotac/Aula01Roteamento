import Link from "next/link";
import style from '../styles/Nav.module.css'

export default function Navbar() {
  return (
    <div className={style.fundo}>
    

      <Link href="/">Home |</Link>
      <Link href="/sobre">Sobre |</Link>
      <Link href="/servicos"> Serviços| </Link>
      <Link href="/contato">Contato</Link>
      
    </div>
  );
}
