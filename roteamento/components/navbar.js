import Link from "next/link";
import style from '../styles/Nav.module.css'

export default function Navbar() {
  return (
    <div className={style.fundo}>
      <h1>Página Inicial</h1>

      <Link href="/">Home |</Link>
      <Link href="/sobre">Sobre |</Link>
      <Link href="/servicos"> Serviços| </Link>
      <Link href="/contato">Contato</Link>
      
    </div>
  );
}
