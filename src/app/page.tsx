"use client"
import styles from "@/styles/page.module.css";
import NavBar from "@/components/navBar";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import LinksGlobal from "@/components/links";
import Link from "next/link";
import { urls } from "@/constants/urls";
import emailjs from '@emailjs/browser';

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const proyectosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const send_email=async(e:React.FormEvent)=>{
    e.preventDefault();
    if(!formRef.current?.reportValidity())return;
    emailjs.sendForm(
      'service_xp3vmd8',
      'template_rhp8p88',
      formRef.current,
      'CiPXWgAAtLRnGqq8D'
    ).then(()=>{
      alert('mensaje enviado');
      formRef.current?.reset();
    }).catch((error)=>{
      console.log('email error '+error);
      alert('error al enviar el email');
    })
  }

  useEffect(()=>{
    imgRef.current?.classList.add('show');
  },[]);

  return (
    <div className={`${styles.page} d-flex flex-column`}>
      <NavBar homeRef={homeRef} sobreRef={sobreRef} proyectosRef={proyectosRef} contactoRef={contactoRef}/>
      <div style={{ marginLeft: '15%', marginRight: '15%' }}>
        <section ref={homeRef} className={`HOME d-flex justify-content-center align-items-center gap-5`} style={{ height: '100vh' }}>
          <div className="d-flex flex-column gap-3">
            <h3 className="text-white">Hola, soy Alex</h3>
            <h1 className={`text-white ${styles.tittleDev}  tittle`}>DESARROLLADOR FULL STACK</h1>
            <p className="text-white">Apasionado por crear soluciones digitales y trabajar en equipo</p>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-info">DESCARGAR CV</button>
              <Link href={urls.whatsapp} target="_blank" className="btn btn-outline-info">CONTACTAME</Link>
            </div>
            <LinksGlobal/>
          </div>
          <div>
            <Image src={'/perfil.jpeg'} alt="" width={350} height={350} className="imagePerfil" ref={imgRef}/>
          </div>
        </section>
        <section ref={sobreRef} className="SobreMi d-flex justify-content-center flex-column" style={{ height: '100vh' }}>
          <h2 className="text-white">Sobre Mi</h2>
          <div className={`info d-flex gap-4 ${styles.info}`}>
            <div className="d-flex flex-column justify-content-start">
              <h3>Quien Soy?</h3>
              <p className="text-white flex-grow-1">Soy un desarrollador fullstack apasionado y motivado con conocimientos solidos</p>
            </div>
            <div className="d-flex flex-column justify-content-start">
              <h3>Mi Objetivo</h3>
              <p className="text-white flex-grow-1">Mi objetivo es apoyar a un equipo de desarrollo o similar, el cual poder trabajar dando todo mi esfuerzo</p>
            </div>
            <div className="d-flex flex-column justify-content-start">
              <h3>Mi Perfil</h3>
              <p className="text-white flex-grow-1">Me caracterizo por tener buen rendimiento y aprendizaje muy rapido si es necesario el cambio de tecnologias, ademas de tratar de ser muy responsable con las tareas designadas</p>
            </div>
          </div>
          <div className="habilidades">

          </div>
        </section>
        <section ref={proyectosRef} className="Proyectos d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
          <h2 className="text-white">PROYECTOS</h2>
          <div className={`d-flex gap-5 ${styles.proyectos}`}>
            <div>
              <Image src={'/fondoSimple.jpg'} width={50} height={50} alt="" />
              <section className="p-3">
                <h3>Pagina web para buscar empleos</h3>
                <p>Sistema web para buscar empleos, pasantias o servicios. Demoro 1 mes en ser desarrollado. Esta dividido en 3 partes: frontend, backend, BD. Cada uno alojado en un servidor diferente</p>
              </section>
            </div>
            <div>
              <Image src={'/fondoSimple.jpg'} alt="" width={50} height={50} />
              <section className="p-3">
                <h3>Pagina de Portafolio</h3>
                <p>Pagina para ver mi portafolio, y toda mi informacion de contacto y reclutamiento</p>
              </section>
            </div>
          </div>
        </section>
        <section ref={contactoRef} className={`Contacto d-flex align-items-center gap-5 ${styles.contacto}`} style={{ height: '100vh' }}>
          <div className="text-white">
            <h2>Trabajemos Juntos</h2>
            <p>Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. Dare todo mi esfuerzo en cada tarea. No dudes en contactarme</p>
            <LinksGlobal/>
          </div>
          <div className={styles.formContacto}>
            <form className="d-flex flex-column gap-3" ref={formRef}>
              <input className="form-control" type="text" name="name" placeholder="Tu Nombre" required maxLength={100} />
              <input className="form-control" type="email" name="email" placeholder="Tu Email" required maxLength={100} />
              <textarea className="form-control" name="message" id="Tu mensaje" placeholder="Tu Mensaje" required maxLength={5000} />
              <button className="btn btn-primary" type="button" onClick={(e)=>send_email(e)}>Enviar Mensaje</button>
            </form>
          </div>
        </section>
      </div>
      
      <footer className={styles.footer}>
            <div>
              <LinksGlobal/>
            </div>
            <div className={`${styles.spansLinks} d-flex gap-3`}>
              <span onClick={()=>homeRef.current?.scrollIntoView({behavior:'smooth'})}>Inicio</span>
              <span onClick={()=>sobreRef.current?.scrollIntoView({behavior:'smooth'})}>Sobre Mi</span>
              <span onClick={()=>proyectosRef.current?.scrollIntoView({behavior:'smooth'})}>Proyectos</span>
              <span onClick={()=>contactoRef.current?.scrollIntoView({behavior:'smooth'})}>Contacto</span>
            </div>
            <div>
              <p className="text-white">@2025 Alex Gonzales. Todos los derechos reservados</p>
            </div>
        </footer>
    </div>
  );
}
