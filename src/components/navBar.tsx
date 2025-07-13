import Link from "next/link";
import styles from '@/styles/navbar.module.css';
import React, { RefObject } from "react";
import { urls } from "@/constants/urls";

interface NavBarProps {
  homeRef: RefObject<HTMLDivElement | null>;
  sobreRef: RefObject<HTMLDivElement | null>;
  proyectosRef: RefObject<HTMLDivElement | null>;
  contactoRef: RefObject<HTMLDivElement | null>;
}

export default function NavBar({ homeRef, sobreRef, proyectosRef, contactoRef }: NavBarProps) {
    return(
    <nav className={`row ${styles.navbar} position-fixed`}>
        <div className="d-flex gap-3 col-4">
            <h2 className="text-primary fw-bold">DEV</h2>
            <h2 className="fw-bold text-white">Alex</h2>
        </div>
        <div className={`col-4 d-flex gap-3 justify-content-center ${styles.indexs}`}>
            <span onClick={(e) => {
              homeRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>Inicio</span>
            <span onClick={(e) => {
              sobreRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>Sobre Mi</span>
            <span onClick={(e) => {
              proyectosRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>Proyectos</span>
            <span  onClick={(e) => {
              contactoRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>Contacto</span>
        </div>
        <div className="col-4 d-flex justify-content-end gap-3">
            <Link href={urls.linkedin} target="_blank"><i className="bi bi-linkedin"></i></Link>
            <Link href={urls.github} target="_blank"><i className="bi bi-github"></i></Link>
            <Link href={urls.whatsapp} target="_blank"><i className="bi bi-whatsapp"></i></Link>
        </div>
    </nav>)
}