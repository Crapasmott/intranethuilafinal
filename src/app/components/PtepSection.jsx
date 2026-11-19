"use client";

import { useState, useEffect, useRef } from "react";

// Datos de módulos de capacitación - 3 MÓDULOS COMPLETOS
const modules = [
  { 
    id: 1, icon: "⚖️", color: "#1e3a8a", accent: "#f59e0b", 
    title: "¿Qué es el PTEP?", 
    subtitle: "Fundamentos y base legal", 
    description: "Instrumento institucional que articula políticas, controles y estrategias para fortalecer la transparencia, prevenir corrupción y promover una cultura organizacional basada en ética y legalidad.", 
    duration: "10 min", level: "Básico",
    contenido: {
      introduccion: "El Programa de Transparencia y Ética Pública (PTEP) es una herramienta fundamental que permite a las entidades públicas colombianas fortalecer sus mecanismos de prevención contra la corrupción y promover una cultura de integridad institucional.",
      objetivos: [
        "Fortalecer la transparencia en todos los procesos institucionales",
        "Prevenir actos de corrupción mediante controles efectivos",
        "Gestionar riesgos asociados a la integridad institucional",
        "Promover una cultura organizacional basada en principios éticos",
        "Garantizar el acceso a la información pública",
        "Implementar mecanismos preventivos, correctivos y de seguimiento"
      ],
      marcoLegal: [
        "Ley 2195 de 2022 - Artículo 31: Origen y fundamento legal del PTEP",
        "Decreto 1122 de 2024: Reglamentación y Anexo Técnico",
        "Ley 1474 de 2011: Estatuto Anticorrupción",
        "Ley 1712 de 2014: Ley de Transparencia y Acceso a la Información"
      ],
      alcance: "El PTEP aplica a todos los servidores públicos, contratistas, proveedores y demás partes interesadas que tengan relación directa o indirecta con la Entidad. Su implementación abarca todos los niveles jerárquicos y procesos institucionales.",
      beneficios: [
        "Mayor confianza ciudadana en la gestión pública",
        "Reducción de riesgos de corrupción y fraude",
        "Mejora en la eficiencia administrativa",
        "Fortalecimiento de la cultura organizacional",
        "Cumplimiento normativo y legal"
      ]
    }
  },
  { 
    id: 2, icon: "🔍", color: "#1e40af", accent: "#38bdf8", 
    title: "Gestión de Riesgos", 
    subtitle: "Identificación y prevención", 
    description: "Actividades orientadas a identificar, analizar, valorar y monitorear situaciones que puedan propiciar el uso indebido del poder, funciones o recursos institucionales.", 
    duration: "15 min", level: "Intermedio",
    contenido: {
      introduccion: "La Gestión de Riesgos de Corrupción es un proceso sistemático que permite identificar, analizar, evaluar y controlar aquellas situaciones que pueden facilitar la ocurrencia de actos de corrupción al interior de la Entidad.",
      tiposRiesgos: [
        { nombre: "Corrupción", descripcion: "Uso indebido del poder para obtener beneficios particulares, afectando los intereses institucionales" },
        { nombre: "Fraude", descripcion: "Engaño o manipulación intencional para obtener ventajas ilícitas, perjudicando a la Entidad o a terceros." },
        { nombre: "Soborno", descripcion: "Ofrecimiento o aceptación de dádivas para influir en decisiones institucionales." },
        { nombre: "Conflicto de Interés", descripcion: "Situación donde intereses personales interfieren con el ejercicio imparcial de las funciones públicas." },
        { nombre: "Tráfico de Influencias", descripcion: "Uso indebido de la posición o cargo para favorecer intereses particulares." }
      ],
      metodologia: [
        "Paso 1: Identificación de riesgos - Reconocer situaciones que puedan generar corrupción",
        "Paso 2: Análisis de riesgos - Evaluar probabilidad e impacto de cada riesgo identificado",
        "Paso 3: Valoración de riesgos - Determinar el nivel de exposición al riesgo",
        "Paso 4: Establecimiento de controles - Definir medidas preventivas y correctivas",
        "Paso 5: Monitoreo y seguimiento - Verificar la efectividad de los controles implementados"
      ],
      controles: [
        "Matriz de riesgos actualizada periódicamente",
        "Auditorías internas y externas regulares",
        "Canales de denuncia confidenciales",
        "Capacitación continua al personal"
      ]
    }
  },
  { 
    id: 3, icon: "🛡️", color: "#1e3a8a", accent: "#34d399", 
    title: "Ética e Integridad", 
    subtitle: "Código de conducta – Acuerdo 08 del 28 de febrero de 2025", 
    description: "Principios, valores y directrices que guían el modelo de comportamiento de los grupos de interés vinculados a ElectroHuila, con cero tolerancia a conductas no éticas.", 
    duration: "12 min", level: "Básico",
    contenido: {
      introduccion: "Para ElectroHuila, el Código de Ética integra los valores, directrices, normas y principios que guían el modelo de comportamiento de los grupos de interés vinculados a la empresa. Su cumplimiento constituye un propósito institucional y un compromiso individual que contribuye a la consolidación de una imagen reputacional basada en altos estándares de ética y transparencia.\n\n\"Soy Aliado Energ-Ético: porque tengo la capacidad de ejercer mi rol en la empresa transmitiendo comportamientos éticos y genero efectos que impactan de forma positiva la imagen Reputacional de ElectroHuila.\"",

      // ==================== NUESTROS VALORES (Capítulo 2 del PDF) ====================
      principios: [
        { 
          nombre: "Transparencia", 
          descripcion: "Es la capacidad de actuar de forma objetiva, clara, comprensible y confiable. Un aliado transparente cumple las tareas y obligaciones conforme a la normativa, principios y directrices aplicables para evitar comprometer los intereses de la organización." 
        },
        { 
          nombre: "Respeto", 
          descripcion: "Es la facultad de tratar a los demás como le gustaría ser tratado. La interacción entre los grupos de interés reconocerá y aceptará principios que protejan los derechos humanos, fundamentales y sociales, evitando cualquier forma de discriminación y acoso laboral. Así mismo, propenderá por actuaciones cordiales, respetando el buen nombre del otro, y evitando afectar la imagen de ElectroHuila." 
        },
        { 
          nombre: "Integridad", 
          descripcion: "Es la cualidad que refleja a una persona como honesta, leal, que tiene respeto por sí mismo y los demás, responsable, disciplinado, y con firmeza en sus acciones. Su actuación está enmarcada en cero tolerancias de actos no éticos." 
        },
        { 
          nombre: "Responsabilidad", 
          descripcion: "Es el deber ético de desarrollar las actividades y metas institucionales de manera oportuna y eficiente, asumiendo las consecuencias de sus decisiones y acciones. En virtud de este valor, se deben realizar acciones de autocuidado acogiendo las reglas de HSEQ, como instrumento de defensa personal y del entorno." 
        }
      ],

      // ==================== NUESTROS PRINCIPIOS (Capítulo 3 del PDF) ====================
      valoresInstitucionales: [
        "Legalidad y Cumplimiento: Para ElectroHuila y sus grupos de interés la aplicabilidad de las Leyes, normas y regulaciones hacen parte integral del valor de la transparencia, por lo tanto, el desarrollo de los negocios y actividades se realizará bajo el más estricto cumplimiento de estas, incluyendo todo lo relacionado con confidencialidad de datos personales, respeto por el medio ambiente, solidaridad en el desarrollo social y satisfacción del cliente en la prestación del servicio.",
        "Protección de los Derechos Humanos y el Medio Ambiente: La empresa ratifica su postura de respeto y compromiso en la POLÍTICA DE DERECHOS HUMANOS como garante de la protección de los derechos humanos. El relacionamiento se basa en: Ambiente Laboral Cordial basado en relaciones de respeto, confianza y tolerancia; Desaprobación de cualquier comportamiento de acoso físico, sexual, moral o psicológico; Reconocimiento al otro sin distinción de sexo, orientación, raza, origen, lengua, religión u opinión política.",
        "Uso Eficiente de los Activos: Las actuaciones de los grupos de interés estarán enmarcadas en: conservar, cuidar y utilizar de manera eficiente los recursos asignados exclusivamente para el desarrollo de las funciones contratadas; evitar la divulgación indebida de información; valorar y proteger la seguridad de la información estratégica de carácter confidencial.",
        "Sentido de Pertenencia Institucional: Es deber de los destinatarios de este código hacer el mejor esfuerzo para conseguir los objetivos empresariales. Conozco y me acojo a las disposiciones de la Constitución Política, las Leyes aplicables, la reglamentación interna, adoptando el sistema de riesgos de Control Interno, SG-SST, y demás recomendaciones de los entes reguladores externos. Asumo las consecuencias de las decisiones que se adoptan."
      ],

      // ==================== COMPORTAMIENTOS NO ÉTICOS (Capítulo 4 del PDF) ====================
      compromisos: [
        "Suministrar información confidencial que se encuentre bajo responsabilidad del colaborador, contratista o proveedor a terceros no autorizados.",
        "Utilizar o compartir información privilegiada para obtener provecho para sí o para un tercero.",
        "Incumplir las políticas de privacidad de la información, facilitando o compartiendo códigos de usuario o contraseñas.",
        "Utilizar para propósitos diferentes al cumplimiento de las funciones los manuales, políticas, procedimientos o lineamientos elaborados por ElectroHuila.",
        "Hacer uso indebido de las bases de datos de los clientes y usuarios con fines de beneficio lucrativo propio o de terceros.",
        "Hacer uso indebido de la imagen corporativa de ElectroHuila para beneficio propio o de terceros.",
        "Ocultar la existencia de un Conflicto de Interés. Denunciarlo es una responsabilidad, no es optativo.",
        "Participar en actividades políticas en nombre de ElectroHuila, así como realizar pagos, donaciones u ofrecer dádivas en nombre de la Empresa.",
        "Realizar actos que entorpezcan o incidan negativamente en el normal desarrollo de las actividades de ElectroHuila.",
        "Aceptar o solicitar dádivas o beneficios de clientes y/o proveedores a cambio de favorecimientos o tratamientos especiales.",
        "Utilizar influencias que favorezcan indebidamente a familiares, amigos o personas vinculadas a un colaborador.",
        "Incumplir las políticas o marco regulatorio en asuntos de libre competencia.",
        "Hacer cobros no pactados o no informados previamente a los clientes.",
        "Celebrar negocios con colaboradores o proveedores incluidos en listas restrictivas por conductas de LA/FT/PADAM, Fraude, Soborno o Corrupción.",
        "Realizar pagos por servicios de cabildeo, o cualquier acto de corrupción, soborno o suministro de atenciones que afecten los valores de ElectroHuila."
      ]
    }
  }
];

const conceptosDetallados = [
  {
    id: 1, icon: "⚖️", accent: "#f59e0b",
    title: "Programa de Transparencia y Ética Pública – PTEP",
    short: "Instrumento institucional que articula políticas, controles y estrategias para fortalecer la transparencia.",
    full: "El Programa de Transparencia y Ética Pública – PTEP constituye el instrumento institucional mediante el cual la Entidad articula políticas, lineamientos, controles y estrategias orientadas a fortalecer la transparencia, prevenir actos de corrupción, gestionar riesgos asociados a la integridad institucional y promover una cultura organizacional basada en principios éticos y de legalidad.\n\nEl PTEP no se limita únicamente a la formulación de actividades de cumplimiento, sino que integra mecanismos preventivos, correctivos y de seguimiento dirigidos a fortalecer el control institucional, mejorar la gestión pública, garantizar el acceso a la información y promover comportamientos íntegros en todos los niveles de la organización."
  },
  {
    id: 2, icon: "🤝", accent: "#f59e0b",
    title: "Ética Pública",
    short: "Principios y valores que orientan el actuar de los servidores públicos.",
    full: "La ética pública corresponde al conjunto de principios, valores, comportamientos y buenas prácticas que orientan el actuar de los servidores públicos, trabajadores y contratistas en el ejercicio de sus funciones, garantizando actuaciones transparentes, íntegras, responsables y orientadas al interés general.\n\nLa ética pública implica actuar con honestidad, imparcialidad, respeto, responsabilidad y compromiso institucional, promoviendo decisiones objetivas y ajustadas a la legalidad y a los principios de la función administrativa.\n\nEl fortalecimiento de la ética pública contribuye a prevenir actos de corrupción, mejorar la confianza institucional y consolidar una cultura organizacional basada en la integridad y el respeto por lo público."
  },
  {
    id: 3, icon: "⚠️", accent: "#38bdf8",
    title: "Conflicto de Interés",
    short: "Cuando intereses personales afectan la objetividad en la toma de decisiones.",
    full: "El conflicto de interés se presenta cuando los intereses personales, familiares, económicos o particulares de un servidor, trabajador o contratista pueden influir o afectar la objetividad, imparcialidad o transparencia en el ejercicio de sus funciones o en la toma de decisiones institucionales.\n\nLa identificación y declaración oportuna de posibles conflictos de interés permite fortalecer la transparencia institucional y prevenir riesgos asociados a favorecimientos indebidos o decisiones contrarias al interés general."
  },
  {
    id: 4, icon: "🔎", accent: "#34d399",
    title: "Debida Diligencia",
    short: "Procedimientos para verificar y evaluar las condiciones de terceros.",
    full: "La debida diligencia corresponde al conjunto de procedimientos, validaciones y mecanismos implementados por la Entidad con el propósito de conocer, verificar y evaluar las condiciones de terceros, proveedores, contratistas, aliados estratégicos y demás contrapartes con las cuales se establecen relaciones institucionales, contractuales, comerciales o administrativas.\n\nA través de la debida diligencia se busca identificar posibles riesgos asociados a corrupción, fraude, lavado de activos, financiación del terrorismo y demás situaciones que puedan afectar la integridad institucional, la legalidad de las operaciones o la reputación de la Entidad.\n\nLa debida diligencia constituye un mecanismo preventivo fundamental para fortalecer la transparencia institucional y garantizar relaciones seguras y confiables con terceros."
  },
  {
    id: 5, icon: "🛡️", accent: "#f59e0b",
    title: "Gestión de Riesgos de Corrupción",
    short: "Identificación, análisis y monitoreo de situaciones de riesgo institucional.",
    full: "La gestión de riesgos de corrupción comprende el conjunto de actividades orientadas a identificar, analizar, valorar, controlar y monitorear situaciones que puedan propiciar el uso indebido del poder, de las funciones o de los recursos institucionales para la obtención de beneficios particulares o indebidos.\n\nLa Entidad implementa mecanismos de prevención y control encaminados a reducir la probabilidad de ocurrencia de actos asociados a corrupción, soborno, tráfico de influencias, favorecimiento indebido, conflictos de interés, manipulación de información, abuso de autoridad y demás conductas que afecten los principios de transparencia y ética pública."
  },
  {
    id: 6, icon: "🏦", accent: "#a78bfa",
    title: "LA/FT/PADAM",
    short: "Prevención de lavado de activos, financiación del terrorismo y armas.",
    full: "El Lavado de Activos – LA corresponde al proceso mediante el cual recursos provenientes de actividades ilícitas son incorporados o utilizados dentro de la economía legal con el propósito de ocultar su origen ilegal y dar apariencia de legalidad a dichos recursos.\n\nLa Financiación del Terrorismo – FT comprende cualquier mecanismo orientado a obtener, administrar, aportar o canalizar recursos destinados a financiar actividades terroristas o grupos al margen de la ley, independientemente del origen lícito o ilícito de los recursos.\n\nPor su parte, la Proliferación de Armas de Destrucción Masiva – PADAM hace referencia a actividades relacionadas con el financiamiento, apoyo o facilitación de programas asociados a la fabricación, desarrollo o circulación de armas prohibidas internacionalmente.\n\nLa gestión de riesgos LA/FT/PADAM busca prevenir que la Entidad sea utilizada directa o indirectamente para el desarrollo de operaciones ilícitas, mediante la implementación de controles de debida diligencia, verificación de terceros, monitoreo de operaciones y fortalecimiento de controles internos."
  },
  {
    id: 7, icon: "📋", accent: "#fb7185",
    title: "Listas Restrictivas y Vinculantes",
    short: "Bases de datos con personas asociadas a actividades ilícitas o sanciones.",
    full: "Las listas restrictivas y vinculantes corresponden a bases de datos nacionales e internacionales que contienen información relacionada con personas naturales, jurídicas, organizaciones o países asociados a actividades ilícitas, sanciones internacionales, corrupción, lavado de activos, financiación del terrorismo u otras conductas consideradas de alto riesgo.\n\nLa consulta de estas listas constituye una herramienta preventiva utilizada en los procesos de debida diligencia y conocimiento de terceros, permitiendo identificar posibles alertas o restricciones que puedan representar riesgos legales, reputacionales, financieros o de integridad para la Entidad.\n\nLa verificación periódica de terceros en listas restrictivas fortalece la gestión del riesgo y contribuye al cumplimiento de los lineamientos establecidos en materia de transparencia y prevención de riesgos LA/FT/PADAM."
  },
  {
    id: 8, icon: "🏛️", accent: "#f97316",
    title: "Personas Expuestas Políticamente – PEP",
    short: "Personas con mayor exposición a riesgos por cargos públicos que desempeñan.",
    full: "Las Personas Expuestas Políticamente – PEP son aquellas personas naturales que, en razón de los cargos públicos que desempeñan o han desempeñado, así como por el nivel de influencia o reconocimiento que poseen, pueden presentar una mayor exposición a riesgos asociados a corrupción, soborno, tráfico de influencias o lavado de activos.\n\nLa identificación de Personas Expuestas Políticamente constituye un mecanismo preventivo implementado dentro de los procesos de debida diligencia, permitiendo aplicar controles reforzados y realizar un seguimiento más riguroso frente a relaciones o transacciones que puedan representar riesgos para la Entidad.\n\nLa condición de PEP no implica la existencia de irregularidades o conductas ilícitas; sin embargo, requiere la aplicación de medidas adicionales de validación y control orientadas a proteger la transparencia y la integridad institucional."
  },
  {
    id: 9, icon: "📢", accent: "#38bdf8",
    title: "Canales de Denuncia",
    short: "Mecanismos para reportar irregularidades de forma segura y confidencial.",
    full: "Los canales de denuncia son mecanismos institucionales establecidos por la Entidad para facilitar el reporte de posibles actos de corrupción, fraude, irregularidades administrativas, conflictos de interés, incumplimientos normativos o cualquier conducta contraria a los principios éticos y de transparencia institucional.\n\nEstos canales permiten que colaboradores, contratistas, proveedores, usuarios y demás grupos de interés puedan comunicar situaciones irregulares de manera segura, confidencial y oportuna, contribuyendo al fortalecimiento del control institucional y la cultura de legalidad.\n\nLa Entidad promueve el uso responsable de los canales de denuncia y garantiza el tratamiento adecuado de la información suministrada, bajo principios de confidencialidad, reserva y protección al denunciante."
  }
];

const normatividad = [
  { icon: "📜", color: "#f59e0b", ley: "Ley 2195 de 2022", desc: "Medidas en materia de transparencia, prevención y lucha contra la corrupción. Artículo 31: origen del PTEP.", url: "/documentos/ley-2195-2022.pdf" },
  { icon: "⚖️", color: "#38bdf8", ley: "Decreto 1122 de 2024", desc: "Reglamenta el Programa de Transparencia y Ética Pública – PTEP y establece el Anexo Técnico.", url: "/documentos/decreto-1122-2024.pdf" },
  { icon: "🛡️", color: "#34d399", ley: "Ley 1474 de 2011", desc: "Estatuto Anticorrupción. Medidas judiciales, administrativas y disciplinarias para combatir la corrupción.", url: "/documentos/ley-1474-2011.pdf" },
  { icon: "🔍", color: "#a78bfa", ley: "Ley 1712 de 2014", desc: "Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional.", url: "/documentos/ley-1712-2014.pdf" },
  { icon: "📜", color: "#f59e0b", ley: "Código de Ética", desc: "Principios éticos institucionales que orientan el actuar de los servidores públicos.", url: "/gestion juridica/normatividad interna/Acuerdo 08 del 28 de febrero de 2025 (Código de Ética).pdf" },
  { icon: "🏛️", color: "#a78bfa", ley: "Buen Gobierno", desc: "Código de buen gobierno corporativo que establece las políticas y prácticas de gestión.", url: "/documentos/buen-gobierno.pdf" },
  { icon: "📋", color: "#fb7185", ley: "Acuerdo del PTEP", desc: "Acuerdo institucional de adopción del Programa de Transparencia y Ética Pública.", url: "/gestion juridica/normatividad interna/Acuerdo 09 del 28 de febrero de 2025 (Programa de Transparencia y Ética Pública - PTEP).pdf" }
];

const riesgos = [
  { label: "Corrupción", value: 92, color: "#f59e0b" },
  { label: "Fraude", value: 78, color: "#38bdf8" },
  { label: "Soborno", value: 65, color: "#34d399" },
  { label: "Conflicto de interés", value: 84, color: "#a78bfa" },
  { label: "Lavado de activos", value: 55, color: "#fb7185" },
  { label: "LA/FT/PADAM", value: 47, color: "#f97316" }
];

const documents = [
  { title: "Decreto 1122 de 2024", desc: "Marco normativo reglamentario", type: "PDF", size: "1.1 MB", icon: "⚖️", color: "#38bdf8", url: "/documentos/decreto-1122-2024.pdf" },
  { title: "Código de Integridad", desc: "Valores y principios del servidor", type: "PDF", size: "850 KB", icon: "🛡️", color: "#34d399", url: "/documentos/codigo-integridad.pdf" },
  { title: "Código de Ética", desc: "Principios éticos institucionales", type: "PDF", size: "1.2 MB", icon: "📜", color: "#f59e0b", url: "/gestion juridica/normatividad interna/Acuerdo 08 del 28 de febrero de 2025 (Código de Ética).pdf" },
  { title: "Buen Gobierno", desc: "Código de buen gobierno corporativo", type: "PDF", size: "2.1 MB", icon: "🏛️", color: "#a78bfa", url: "/documentos/buen-gobierno.pdf" },
  { title: "Acuerdo del PTEP", desc: "Acuerdo institucional de adopción", type: "PDF", size: "1.5 MB", icon: "📋", color: "#fb7185", url: "/gestion juridica/normatividad interna/Acuerdo 09 del 28 de febrero de 2025 (Programa de Transparencia y Ética Pública - PTEP).pdf" },
  { title: "Guía de Implementación", desc: "Paso a paso para entidades", type: "PDF", size: "560 KB", icon: "📊", color: "#f97316", url: "/documentos/guia-implementacion.pdf" },
  { title: "Ley 2195 de 2022", desc: "Ley anticorrupción de origen", type: "PDF", size: "1.8 MB", icon: "⚖️", color: "#38bdf8", url: "/gestion juridica/normatividad interna/Ley_2195_de_2022.pdf" },
  { title: "Manual de Riesgos", desc: "Metodología de identificación", type: "PDF", size: "3.2 MB", icon: "🔍", color: "#34d399", url: "/documentos/manual-riesgos.pdf" }
];

const videos = [
  { title: "Introducción al PTEP", duration: "8:32", thumbnail: "🎬", tag: "Módulo 1", color: "#1e3a8a" },
  { title: "Ética Pública en Práctica", duration: "12:15", thumbnail: "🎥", tag: "Módulo 3", color: "#1e40af" },
  { title: "Casos de Éxito Institucional", duration: "6:48", thumbnail: "📹", tag: "Avanzado", color: "#2563eb" }
];

const stats = [
  { label: "Módulos de aprendizaje", value: 3, suffix: "" },
  { label: "Conceptos clave", value: 9, suffix: "" },
  { label: "Tiempo total estimado", value: 37, suffix: " min" },
  { label: "Artículos normativos", value: 31, suffix: "+" }
];

const timelineEvents = [
  { year: "2011", label: "Ley 1474", desc: "Estatuto Anticorrupción", color: "#34d399" },
  { year: "2014", label: "Ley 1712", desc: "Transparencia y acceso a la información", color: "#38bdf8" },
  { year: "2022", label: "Ley 2195", desc: "Creación del PTEP – Artículo 31", color: "#f59e0b" },
  { year: "2024", label: "Decreto 1122", desc: "Reglamentación y Anexo Técnico", color: "#a78bfa" },
  { year: "2025", label: "PTEP Actualizado", desc: "Plan de ejecución 2025–2028", color: "#fb7185" }
];

// Galería de infografías - Línea de Transparencia
const galeriaTransparencia = [
  { id: 1, src: "./images/pop up control interno/1.png", titulo: "¿Cuándo debes utilizar la Línea de Transparencia?" },
  { id: 2, src: "./images/pop up control interno/2.png", titulo: "Tu denuncia es importante" },
  { id: 3, src: "./images/pop up control interno/3.png", titulo: "Denunciar es un acto de responsabilidad" },
  { id: 4, src: "./images/pop up control interno/4.png", titulo: "El anonimato también es una opción" },
  { id: 5, src: "./images/pop up control interno/5a.png", titulo: "Proteger al denunciante es fortalecer la confianza" },
  { id: 6, src: "./images/pop up control interno/6a.png", titulo: "Cero represalias: un compromiso con la integridad" },
  { id: 6, src: "./images/pop up control interno/7a.png", titulo: "Cero represalias: un compromiso con la integridad" },
];

// Hooks personalizados
function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let animationFrameId;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    animationFrameId = requestAnimationFrame(step);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, start]);
  return count;
}

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [ref]);
  return inView;
}

// Componentes
function StatCard({ label, value, suffix, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const count = useCountUp(value, 1400, inView);
  return (
    <div ref={ref} style={{ ...styles.statCard, animationDelay: `${delay}ms` }} className="fade-in-up">
      <div style={styles.statValue}>{count}{suffix}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function ModuleCard({ mod, index, onOpenModal }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1e40af" : "#ffffff",
        borderRadius: 16, padding: 28,
        display: "flex", flexDirection: "column",
        border: `1px solid ${hovered ? mod.accent : "#e2e8f0"}`,
        boxShadow: hovered ? `0 24px 48px rgba(0,0,0,0.14), 0 0 0 1px ${mod.accent}44` : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease", cursor: "pointer",
        animationDelay: `${index * 80}ms`, minHeight: 260,
      }}
      className="fade-in-up"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: mod.accent + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, border: `1px solid ${mod.accent}44`,
        }}>
          {mod.icon}
        </div>
        <span style={{
          fontSize: 11, fontWeight: 700, padding: "4px 12px",
          borderRadius: 20, letterSpacing: 0.5,
          background: mod.accent + "18", color: mod.accent,
          border: `1px solid ${mod.accent}44`,
        }}>
          {mod.level}
        </span>
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, marginTop: 18, marginBottom: 4, color: hovered ? "#ffffff" : "#1e3a8a", transition: "color 0.3s" }}>
        {mod.title}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: mod.accent, marginBottom: 12 }}>
        {mod.subtitle}
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.65, flex: 1, color: hovered ? "rgba(255,255,255,0.72)" : "#64748b", transition: "color 0.3s" }}>
        {mod.description}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "#f1f5f9"}` }}>
        <span style={{ fontSize: 12, color: hovered ? "rgba(255,255,255,0.5)" : "#94a3b8" }}>⏱ {mod.duration}</span>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(mod);
          }}
          style={{
            background: mod.accent, color: "#1e3a8a",
            fontWeight: 800, fontSize: 12, padding: "8px 18px",
            borderRadius: 8, border: "none", cursor: "pointer",
            fontFamily: "inherit", letterSpacing: 0.3,
          }}>
          Iniciar →
        </button>
      </div>
    </div>
  );
}

function ConceptoCard({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#ffffff",
        border: `2px solid ${open ? item.accent : "#e2e8f0"}`,
        borderRadius: 14, padding: 24,
        transition: "all 0.35s ease",
        animationDelay: `${index * 70}ms`,
        boxShadow: open ? `0 20px 40px rgba(0,0,0,0.15), 0 0 0 4px ${item.accent}22` : "0 2px 8px rgba(0,0,0,0.05)",
      }}
      className="fade-in-up"
    >
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12, flexShrink: 0,
          background: item.accent + "20",
          border: `1px solid ${item.accent}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
        }}>
          {item.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#1e3a8a", marginBottom: 4 }}>
            {item.title}
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.55, color: "#64748b", whiteSpace: "pre-line" }}>
            {open ? item.full : item.short}
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          marginTop: 14, background: item.accent + "15",
          border: `1px solid ${item.accent}55`,
          color: item.accent, borderRadius: 8,
          padding: "6px 16px", fontSize: 12,
          fontWeight: 700, cursor: "pointer",
          fontFamily: "inherit", letterSpacing: 0.3,
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => e.target.style.background = item.accent + "30"}
        onMouseLeave={(e) => e.target.style.background = item.accent + "15"}
      >
        {open ? "▲ Leer menos" : "▼ Ver definición completa"}
      </button>
    </div>
  );
}

function NormCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [downloading, setDownloading] = useState(false);
  
  const handleDownload = (e) => {
    e.stopPropagation();
    if (!item.url) {
      alert(`El documento "${item.ley}" estará disponible próximamente.`);
      return;
    }
    setDownloading(true);
    const link = document.createElement('a');
    link.href = item.url;
    link.download = `${item.ley}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 500);
  };
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1e40af" : "#ffffff",
        border: `1px solid ${hovered ? item.color + "66" : "#e2e8f0"}`,
        borderRadius: 14, padding: "22px 24px",
        display: "flex", gap: 18, alignItems: "flex-start",
        transition: "all 0.3s ease", cursor: "default",
        boxShadow: hovered ? `0 16px 36px rgba(0,0,0,0.12)` : "0 2px 8px rgba(0,0,0,0.05)",
        animationDelay: `${index * 80}ms`, position: "relative",
      }}
      className="fade-in-up"
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
        background: item.color + "20", border: `1px solid ${item.color}44`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
      }}>
        {item.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: hovered ? item.color : "#1e3a8a", marginBottom: 6, transition: "color 0.3s" }}>
          {item.ley}
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.6, color: hovered ? "rgba(255,255,255,0.65)" : "#64748b", transition: "color 0.3s", paddingRight: hovered ? 40 : 0 }}>
          {item.desc}
        </div>
      </div>
      <button 
        onClick={handleDownload}
        style={{
          position: "absolute", top: 16, right: 16,
          background: downloading ? item.color : (hovered ? item.color : "transparent"), 
          border: `2px solid ${item.color}`, borderRadius: 8, width: 34, height: 34,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontWeight: 800, fontSize: 16,
          color: downloading || hovered ? "#ffffff" : item.color, 
          fontFamily: "inherit", transition: "all 0.3s ease",
          transform: downloading ? "scale(0.95)" : "scale(1)",
          opacity: hovered ? 1 : 0, zIndex: 2,
        }}
        title={`Descargar ${item.ley}`}
      >
        {downloading ? "✓" : "↓"}
      </button>
    </div>
  );
}

function VideoCard({ video, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14, overflow: "hidden", background: "#ffffff",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.13)" : "0 2px 10px rgba(0,0,0,0.07)",
        border: "1px solid #e2e8f0", transition: "all 0.3s ease",
        animationDelay: `${index * 100}ms`,
      }}
      className="fade-in-up"
    >
      <div style={{
        height: 170,
        background: `linear-gradient(135deg, ${video.color} 0%, #3b82f6 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
      }}>
        <span style={{ fontSize: 46, opacity: hovered ? 0 : 1, transition: "opacity 0.3s" }}>{video.thumbnail}</span>
        <div style={{ position: "absolute", fontSize: 50, color: "white", opacity: hovered ? 1 : 0, transition: "opacity 0.3s", textShadow: "0 0 30px rgba(0,0,0,0.4)" }}>▶</div>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <span style={{ background: "#eff6ff", color: "#2563eb", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: 0.5 }}>{video.tag}</span>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#1e3a8a", margin: "10px 0 5px" }}>{video.title}</div>
        <div style={{ fontSize: 12, color: "#94a3b8" }}>⏱ {video.duration}</div>
      </div>
    </div>
  );
}

function DocCard({ doc, index }) {
  const [hovered, setHovered] = useState(false);
  const [downloading, setDownloading] = useState(false);
  
  const handleDownload = (e) => {
    e.stopPropagation();
    if (!doc.url) {
      alert(`El documento "${doc.title}" estará disponible próximamente.`);
      return;
    }
    setDownloading(true);
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = `${doc.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 500);
  };
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1e40af" : "#ffffff",
        border: `1px solid ${hovered ? doc.color + "55" : "#e2e8f0"}`,
        borderRadius: 12, padding: "16px 20px",
        display: "flex", alignItems: "center", gap: 16,
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 12px 28px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.05)",
        animationDelay: `${index * 60}ms`,
      }}
      className="fade-in-up"
    >
      <div style={{ fontSize: 28, flexShrink: 0, color: doc.color }}>{doc.icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: hovered ? "#ffffff" : "#1e3a8a", transition: "color 0.3s", marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {doc.title}
        </div>
        <div style={{ fontSize: 12, color: hovered ? "rgba(255,255,255,0.5)" : "#94a3b8", transition: "color 0.3s" }}>
          {doc.desc}
        </div>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: hovered ? "#ffffff" : doc.color, letterSpacing: 0.5, background: hovered ? "rgba(255,255,255,0.15)" : doc.color + "15", padding: "2px 8px", borderRadius: 4, transition: "all 0.3s" }}>
          {doc.type}
        </div>
        <div style={{ fontSize: 11, color: hovered ? "rgba(255,255,255,0.4)" : "#94a3b8", marginTop: 4, transition: "color 0.3s" }}>
          {doc.size}
        </div>
      </div>
      <button 
        onClick={handleDownload}
        style={{
          background: downloading ? doc.color : (hovered ? doc.color : "transparent"), 
          border: `2px solid ${doc.color}`, borderRadius: 8, width: 40, height: 40,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontWeight: 800, fontSize: 18,
          color: downloading || hovered ? "#ffffff" : doc.color, 
          fontFamily: "inherit", flexShrink: 0, transition: "all 0.3s ease",
          transform: downloading ? "scale(0.95)" : "scale(1)",
        }}
        title={`Descargar ${doc.title}`}
      >
        {downloading ? "✓" : "↓"}
      </button>
    </div>
  );
}

function ProgressBar({ label, value, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(value), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, value]);
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{label}</span>
        <span style={{ color, fontWeight: 700, fontSize: 13 }}>{value}%</span>
      </div>
      <div style={styles.barTrack}>
        <div style={{ ...styles.barFill, width: `${width}%`, background: color, transition: "width 1s ease" }} />
      </div>
    </div>
  );
}

function TimelineItem({ event, index }) {
  return (
    <div style={{ ...styles.timelineItem, animationDelay: `${index * 150}ms` }} className="fade-in-up">
      <div style={{ ...styles.timelineDot, background: event.color, boxShadow: `0 0 0 5px ${event.color}30` }} />
      <div style={{ ...styles.timelineYear, color: event.color }}>{event.year}</div>
      <div style={styles.timelineLabel}>{event.label}</div>
      <div style={styles.timelineDesc}>{event.desc}</div>
    </div>
  );
}

// Tarjeta miniatura de la galería
function GalleryThumb({ img, index, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
      style={{
        ...styles.galleryThumb,
        animationDelay: `${index * 70}ms`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.35)" : "0 4px 14px rgba(0,0,0,0.2)",
      }}
      className="fade-in-up"
    >
      <img
        src={img.src}
        alt={img.titulo}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          display: "block", transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(15,23,42,0.88) 100%)",
        opacity: hovered ? 1 : 0.75, transition: "opacity 0.3s",
        display: "flex", alignItems: "flex-end", padding: 14,
      }}>
        <span style={{ color: "#ffffff", fontSize: 12.5, fontWeight: 700, lineHeight: 1.4 }}>
          {img.titulo}
        </span>
      </div>
      <div style={{
        position: "absolute", top: 10, right: 10,
        width: 30, height: 30, borderRadius: "50%",
        background: "rgba(255,255,255,0.92)", color: "#1e3a8a",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, opacity: hovered ? 1 : 0, transition: "opacity 0.25s",
      }}>
        ⤢
      </div>
    </div>
  );
}

// Lightbox de la galería
function GalleryLightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  if (index === null) return null;
  const img = images[index];

  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(6,10,25,0.92)", zIndex: 1100,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px", backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 20, right: 24,
          background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)",
          color: "#ffffff", width: 40, height: 40, borderRadius: "50%",
          fontSize: 18, cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: "inherit",
        }}
      >
        ✕
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{ ...styles.lightboxNav, left: 16 }}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 980, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={img.src}
          alt={img.titulo}
          style={{
            maxWidth: "100%", maxHeight: "72vh", borderRadius: 12,
            boxShadow: "0 30px 70px rgba(0,0,0,0.5)", objectFit: "contain",
          }}
        />
        <div style={{ marginTop: 18, textAlign: "center" }}>
          <div style={{ color: "#ffffff", fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
            {img.titulo}
          </div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}>
            {index + 1} / {images.length}
          </div>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{ ...styles.lightboxNav, right: 16 }}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}

// Componente Modal para los módulos
function ModuleModal({ module, onClose }) {
  if (!module) return null;
  
  const contenido = module.contenido;
  
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.75)", display: "flex",
      alignItems: "center", justifyContent: "center",
      zIndex: 1000, padding: "20px", backdropFilter: "blur(8px)",
    }} onClick={onClose}>
      <div style={{
        background: "#ffffff", borderRadius: 20,
        maxWidth: "800px", width: "100%", maxHeight: "85vh",
        overflow: "auto", boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
      }} onClick={(e) => e.stopPropagation()}>
        
        <div style={{
          background: `linear-gradient(135deg, ${module.color} 0%, #3b82f6 100%)`,
          padding: "32px 28px", borderRadius: "20px 20px 0 0", position: "relative",
        }}>
          <button onClick={onClose} style={{
            position: "absolute", top: 16, right: 16,
            background: "rgba(255,255,255,0.2)", border: "none",
            color: "#ffffff", width: 36, height: 36, borderRadius: "50%",
            fontSize: 18, cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", fontFamily: "inherit",
          }}>✕</button>
          
          <div style={{
            width: 60, height: 60, borderRadius: 16,
            background: "rgba(255,255,255,0.2)", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: 32, marginBottom: 16, border: "2px solid rgba(255,255,255,0.3)",
          }}>
            {module.icon}
          </div>
          
          <span style={{
            background: module.accent + "30", color: module.accent,
            padding: "4px 14px", borderRadius: 20, fontSize: 12,
            fontWeight: 700, letterSpacing: 0.5, border: `1px solid ${module.accent}44`,
          }}>
            {module.level} · {module.duration}
          </span>
          
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", margin: "12px 0 4px" }}>
            {module.title}
          </h2>
          
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", margin: 0 }}>
            {module.subtitle}
          </p>
        </div>
        
        <div style={{ padding: "28px" }}>
          
          {/* Introducción */}
          {contenido.introduccion && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Introducción
              </h3>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0, whiteSpace: "pre-line" }}>
                {contenido.introduccion}
              </p>
            </div>
          )}
          
          {/* Objetivos */}
          {contenido.objetivos && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Objetivos del Programa
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {contenido.objetivos.map((obj, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0" }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: module.accent + "20", color: module.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                    <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Tipos de Riesgos */}
          {contenido.tiposRiesgos && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Tipos de Riesgos Identificados
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {contenido.tiposRiesgos.map((riesgo, i) => (
                  <div key={i} style={{ padding: "16px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0", borderLeft: `4px solid ${module.accent}` }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#1e3a8a", marginBottom: 6 }}>{riesgo.nombre}</div>
                    <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{riesgo.descripcion}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Nuestros Valores (principios) */}
          {contenido.principios && contenido.principios.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Nuestros Valores
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                {contenido.principios.map((principio, i) => (
                  <div key={i} style={{ padding: "20px", background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0", borderTop: `4px solid ${module.accent}` }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: module.accent, marginBottom: 8 }}>{principio.nombre}</div>
                    <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{principio.descripcion}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Nuestros Principios (valoresInstitucionales) */}
          {contenido.valoresInstitucionales && contenido.valoresInstitucionales.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Nuestros Principios
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {contenido.valoresInstitucionales.map((principio, i) => (
                  <div key={i} style={{ padding: "16px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0", borderLeft: `4px solid ${module.accent}` }}>
                    <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{principio}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Marco Legal */}
          {contenido.marcoLegal && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Marco Legal
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {contenido.marcoLegal.map((ley, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", background: "#f8fafc", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: 18 }}>📜</span>
                    <span style={{ fontSize: 14, color: "#475569" }}>{ley}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Metodología */}
          {contenido.metodologia && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Metodología de Gestión
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {contenido.metodologia.map((paso, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0" }}>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: module.accent, color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{paso}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Controles */}
          {contenido.controles && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Controles Implementados
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {contenido.controles.map((control, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", background: "#f8fafc", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                    <span style={{ color: module.accent, fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#475569" }}>{control}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Alcance */}
          {contenido.alcance && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Alcance del Programa
              </h3>
              <div style={{ padding: "16px", background: module.accent + "10", borderRadius: 10, border: `1px solid ${module.accent}33`, borderLeft: `4px solid ${module.accent}` }}>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, margin: 0 }}>{contenido.alcance}</p>
              </div>
            </div>
          )}
          
          {/* Beneficios */}
          {contenido.beneficios && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Beneficios Clave
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {contenido.beneficios.map((beneficio, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                    <span style={{ color: module.accent, fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#475569" }}>{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Comportamientos No Éticos (compromisos) */}
          {contenido.compromisos && contenido.compromisos.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e3a8a", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 20, background: module.accent, borderRadius: 2, display: "inline-block" }}></span>
                Comportamientos No Éticos
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "300px", overflowY: "auto", paddingRight: "8px" }}>
                {contenido.compromisos.map((compromiso, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 16px", background: "#fef2f2", borderRadius: 8, border: "1px solid #fecaca" }}>
                    <span style={{ color: "#dc2626", fontSize: 16, flexShrink: 0 }}>⚠️</span>
                    <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.5 }}>{compromiso}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
        
        <div style={{ padding: "20px 28px", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>Tiempo estimado de lectura: {module.duration}</span>
          <button onClick={onClose} style={{
            background: module.accent, color: "#ffffff", fontWeight: 700,
            fontSize: 14, padding: "10px 24px", borderRadius: 8,
            border: "none", cursor: "pointer", fontFamily: "inherit",
          }}>Cerrar Módulo</button>
        </div>
      </div>
    </div>
  );
}

// Componente Principal
export default function PtepSection({ onBack }) {
  const [activeSection, setActiveSection] = useState("ptep-inicio");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedModule, setSelectedModule] = useState(null);
  const [progress, setProgress] = useState({});
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Cargar progreso guardado
  useEffect(() => {
    const saved = localStorage.getItem("ptep_progress");
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  // Guardar progreso
  const saveProgress = (moduleId, completed) => {
    const newProgress = { ...progress, [moduleId]: completed };
    setProgress(newProgress);
    localStorage.setItem("ptep_progress", JSON.stringify(newProgress));
  };

  const navItems = [
    { id: "ptep-inicio", label: "Inicio" },
    { id: "ptep-modulos", label: "Módulos" },
    { id: "ptep-conceptos", label: "Conceptos" },
    { id: "ptep-normatividad", label: "Normatividad" },
    { id: "ptep-canales", label: "Canales" },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredDocs = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galeriaTransparencia.length) % galeriaTransparencia.length));
  const nextLightbox = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galeriaTransparencia.length));

  return (
    <div id="ptep-root" style={styles.root}>
      <style>{css}</style>

      {/* Modal */}
      {selectedModule && (
        <ModuleModal module={selectedModule} onClose={() => setSelectedModule(null)} />
      )}

      {/* Lightbox de galería */}
      <GalleryLightbox
        images={galeriaTransparencia}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />

      {/* Hero */}
      <section id="ptep-inicio" style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.heroGrid} />
        <div style={styles.heroContent}>
          <div style={styles.heroTabs}>
            {onBack && (
              <button onClick={onBack} style={styles.backBtn}>← Volver</button>
            )}
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                style={{
                  ...styles.heroTab,
                  ...(activeSection === n.id ? styles.heroTabActive : {}),
                }}
              >
                {n.label}
              </button>
            ))}
          </div>

          <div style={styles.heroPill}>
            <span style={{ color: "#f59e0b" }}>●</span> Plataforma Educativa Institucional 2025
          </div>

          <h1 style={styles.heroTitle}>
            Programa de{" "}
            <span style={styles.heroAccent}>Transparencia</span>
            <br />y Ética Pública
          </h1>

          <p style={styles.heroDesc}>
            Capacítate en los fundamentos normativos, gestión de riesgos y cultura
            de integridad que rigen la actuación de nuestra entidad bajo el marco
            del PTEP y la Ley 2195 de 2022.
          </p>

          <div style={styles.heroCtas}>
            <button onClick={() => scrollTo("ptep-modulos")} style={styles.ctaPrimary}>
              Comenzar Aprendizaje →
            </button>
            <button onClick={() => scrollTo("ptep-conceptos")} style={styles.ctaSecondary}>
              Ver Conceptos Clave
            </button>
          </div>

          <div style={styles.heroStats}>
            {stats.map((s, i) => <StatCard key={i} {...s} delay={i * 150} />)}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="ptep-modulos" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionEyebrow}>Ruta de Aprendizaje</div>
          <h2 style={styles.sectionTitle}>Módulos de Formación</h2>
          <p style={styles.sectionDesc}>
            Tres módulos estructurados para desarrollar competencias en
            transparencia, ética y prevención de la corrupción.
          </p>
        </div>
        <div style={styles.modulesGrid}>
          {modules.map((mod, i) => (
            <ModuleCard key={mod.id} mod={mod} index={i} onOpenModal={setSelectedModule} />
          ))}
        </div>
      </section>

      {/* Conceptos Clave */}
      <section id="ptep-conceptos" style={{ ...styles.section, background: "#1e40af" }}>
        <div style={styles.sectionHeader}>
          <div style={{ ...styles.sectionEyebrow, color: "#f59e0b" }}>Glosario Institucional</div>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>Conceptos Clave del PTEP</h2>
          <p style={{ ...styles.sectionDesc, color: "rgba(255,255,255,0.6)" }}>
            Definiciones oficiales de los términos fundamentales del Programa de
            Transparencia y Ética Pública.
          </p>
        </div>
        <div style={styles.conceptosGrid}>
          {conceptosDetallados.map((item, i) => <ConceptoCard key={item.id} item={item} index={i} />)}
        </div>
      </section>

      {/* Normatividad */}
      <section id="ptep-normatividad" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionEyebrow}>Marco Legal</div>
          <h2 style={styles.sectionTitle}>Normatividad Aplicable</h2>
          <p style={styles.sectionDesc}>
            Leyes y decretos que fundamentan el Programa de Transparencia y Ética
            Pública en Colombia.
          </p>
        </div>
        <div style={styles.normGrid}>
          {normatividad.map((item, i) => <NormCard key={i} item={item} index={i} />)}
        </div>

        <div style={{ maxWidth: 1000, margin: "60px auto 0", textAlign: "center" }}>
          <div style={styles.sectionEyebrow}>Línea de Tiempo Normativa</div>
          <div style={styles.timeline}>
            {timelineEvents.map((ev, i) => <TimelineItem key={i} event={ev} index={i} />)}
          </div>
        </div>
      </section>

      {/* Canales de Denuncia */}
      <section id="ptep-canales" style={{ ...styles.section, background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)" }}>
        <div style={styles.sectionHeader}>
          <div style={{ ...styles.sectionEyebrow, color: "#fbbf24" }}>Reporta Irregularidades</div>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>Canales de Denuncia</h2>
          <p style={{ ...styles.sectionDesc, color: "rgba(255,255,255,0.8)" }}>
            La Entidad promueve el uso responsable de los canales de denuncia y garantiza 
            el tratamiento adecuado de la información suministrada, bajo principios de 
            confidencialidad, reserva y protección al denunciante.
          </p>
        </div>
        <div style={styles.denunciaGrid}>
          {[
            { icon: "📧", title: "Correo Electrónico", info: "lineaeticaelectrohuila@pwc.com", color: "#f59e0b" },
            { icon: "📞", title: "Línea de Transparencia", info: "018000189807", color: "#38bdf8" },
            { icon: "💻", title: "Portal Web", info: "Formulario Web", color: "#34d399", url: "https://www.lineadedenuncias.com/portal/E6B0BD6D-A34A-4D77-B916-9EE89F04880A/report-irregularity" },
          ].map((canal, i) => (
            <div
              key={i}
              onClick={() => canal.url && window.open(canal.url, "_blank")}
              style={{
                ...styles.denunciaCard,
                animationDelay: `${i * 100}ms`,
                borderTop: `3px solid ${canal.color}`,
                cursor: canal.url ? "pointer" : "default",
              }}
              className="fade-in-up"
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{canal.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#ffffff", marginBottom: 6 }}>{canal.title}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{canal.info}</div>
              {canal.url && (
                <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: canal.color, letterSpacing: 0.5 }}>
                  Ir al portal →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Galería de infografías */}
        <div style={{ maxWidth: 1200, margin: "60px auto 0" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ ...styles.sectionEyebrow, color: "#fbbf24" }}>Material Visual</div>
            <h3 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: "#ffffff", marginBottom: 10 }}>
              Galería · Línea de Transparencia
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
              Haz clic en cualquier infografía para verla en grande.
            </p>
          </div>
          <div style={styles.galleryGrid}>
            {galeriaTransparencia.map((img, i) => (
              <GalleryThumb key={img.id} img={img} index={i} onOpen={openLightbox} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Todos los reportes son tratados con absoluta confidencialidad. La Entidad garantiza 
            la protección del denunciante contra cualquier tipo de represalia.
          </p>
        </div>
      </section>

      {/* Videos */}
    {/*}  <section id="ptep-videos" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionEyebrow}>Contenido Multimedia</div>
          <h2 style={styles.sectionTitle}>Videos Educativos</h2>
          <p style={styles.sectionDesc}>
            Material audiovisual para reforzar los conceptos del PTEP.
          </p>
        </div>
        <div style={styles.videosGrid}>
          {videos.map((video, i) => <VideoCard key={i} video={video} index={i} />)}
        </div>
      </section>*/}

      {/* Documentos */}
    {/*  <section id="ptep-documentos" style={{ ...styles.section, background: "#f1f5f9" }}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionEyebrow}>Biblioteca Digital</div>
          <h2 style={styles.sectionTitle}>Documentos y Normativas</h2>
          <p style={styles.sectionDesc}>
            Accede a los documentos oficiales, normativas y guías del PTEP.
          </p>
        </div>
        <div style={styles.searchWrap}>
          <input
            type="text"
            placeholder="🔍 Buscar documentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <div style={styles.docsGrid}>
          {filteredDocs.map((doc, i) => <DocCard key={i} doc={doc} index={i} />)}
        </div>
      </section>*/}

      {/* Mi Progreso */}
      {/*<section id="ptep-progreso" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionEyebrow}>Seguimiento</div>
          <h2 style={styles.sectionTitle}>Mi Progreso</h2>
          <p style={styles.sectionDesc}>
            Lleva el control de tu aprendizaje y certificación.
          </p>
        </div>
        <div style={styles.progressGrid}>
          <div style={{ ...styles.progressCard, background: "#1e3a8a" }}>
            <div style={styles.progressTitle}>Riesgos de Corrupción</div>
            {riesgos.map((r, i) => <ProgressBar key={i} label={r.label} value={r.value} color={r.color} />)}
          </div>
          <div style={{ ...styles.progressCard, background: "#0f3b2c" }}>
            <div style={styles.progressTitle}>Avance General</div>
            <div style={styles.activityGrid}>
              <div style={{ ...styles.activityItem, background: "rgba(255,255,255,0.05)" }}>
                <div style={styles.activityValue}>3</div>
                <div style={styles.activityLabel}>Módulos completados</div>
              </div>
              <div style={{ ...styles.activityItem, background: "rgba(255,255,255,0.05)" }}>
                <div style={styles.activityValue}>85%</div>
                <div style={styles.activityLabel}>Tasa de finalización</div>
              </div>
            </div>
            <ProgressBar label="Progreso total" value={85} color="#34d399" />
            <button style={{ ...styles.ctaPrimary, width: "100%", marginTop: 24, background: "#fbbf24", color: "#1e3a8a" }}>Descargar Certificado</button>
          </div>
        </div>
      </section>*/}
    </div>
  );
}

// Estilos
const styles = {
  root: { fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f1f5f9", color: "#1e293b", minHeight: "100vh", overflowX: "hidden" },
  heroTabs: { display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 },
  heroTab: { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 600, cursor: "pointer", padding: "7px 16px", borderRadius: 20, transition: "all 0.2s", fontFamily: "inherit" },
  heroTabActive: { background: "#fbbf24", border: "1px solid #fbbf24", color: "#1e3a8a", fontWeight: 800 },
  hero: { minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "60px 24px 60px", overflow: "hidden" },
  heroBg: { position: "absolute", inset: 0, background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 45%, #0284c7 100%)", zIndex: 0 },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 },
  heroContent: { position: "relative", zIndex: 1, maxWidth: 900, width: "100%", margin: "0 auto", textAlign: "center" },
  backBtn: { background: "#3b82f6", border: "1px solid #3b82f6", color: "#ffffff", fontSize: 13, fontWeight: 600, padding: "7px 16px", borderRadius: 20, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.2s", marginBottom: 4 },
  heroPill: { display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", fontSize: 12, fontWeight: 700, letterSpacing: 2, padding: "6px 18px", borderRadius: 20, marginBottom: 24, textTransform: "uppercase", backdropFilter: "blur(6px)" },
  heroTitle: { fontSize: "clamp(32px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -1, margin: "0 0 24px", color: "#ffffff" },
  heroAccent: { color: "#fbbf24" },
  heroDesc: { fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.82)", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 },
  heroCtas: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 },
  ctaPrimary: { background: "#fbbf24", color: "#1e3a8a", fontWeight: 800, fontSize: 14, padding: "14px 28px", borderRadius: 8, border: "none", cursor: "pointer", letterSpacing: 0.5, fontFamily: "inherit", transition: "opacity 0.2s" },
  ctaSecondary: { background: "transparent", color: "#ffffff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 8, border: "2px solid rgba(255,255,255,0.4)", cursor: "pointer", letterSpacing: 0.5, fontFamily: "inherit" },
  heroStats: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 },
  statCard: { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "20px 16px", textAlign: "center", backdropFilter: "blur(6px)" },
  statValue: { fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: "#fbbf24", lineHeight: 1 },
  statLabel: { fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 6, letterSpacing: 0.3, lineHeight: 1.4 },
  section: { padding: "80px 24px", background: "#f8fafc" },
  sectionHeader: { maxWidth: 700, margin: "0 auto 56px", textAlign: "center" },
  sectionEyebrow: { fontSize: 11, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "#3b82f6", marginBottom: 12 },
  sectionTitle: { fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, color: "#1e3a8a", letterSpacing: -0.5, marginBottom: 16 },
  sectionDesc: { color: "#64748b", fontSize: 16, lineHeight: 1.7 },
  modulesGrid: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 },
  conceptosGrid: { maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 },
  normGrid: { maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 },
  denunciaGrid: { maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 },
  denunciaCard: { background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: 14, padding: 28, textAlign: "center", border: "1px solid rgba(255,255,255,0.15)", transition: "transform 0.3s, box-shadow 0.3s" },
  galleryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 18 },
  galleryThumb: { position: "relative", borderRadius: 14, overflow: "hidden", aspectRatio: "3 / 2", cursor: "pointer", border: "1px solid rgba(255,255,255,0.15)", transition: "transform 0.3s ease, box-shadow 0.3s ease", background: "#0f2a63" },
  lightboxNav: { position: "absolute", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "#ffffff", width: 46, height: 46, borderRadius: "50%", fontSize: 26, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit", zIndex: 1101 },
  timeline: { display: "flex", gap: 0, marginTop: 32, justifyContent: "center", flexWrap: "wrap" },
  timelineItem: { flex: "1 1 200px", padding: "0 20px 20px", position: "relative", textAlign: "center" },
  timelineDot: { width: 14, height: 14, borderRadius: "50%", background: "#3b82f6", margin: "0 auto 12px" },
  timelineYear: { fontSize: 22, fontWeight: 900 },
  timelineLabel: { fontSize: 14, fontWeight: 700, color: "#1e3a8a", margin: "4px 0" },
  timelineDesc: { fontSize: 12, color: "#64748b", lineHeight: 1.5 },
  videosGrid: { maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 },
  searchWrap: { maxWidth: 600, margin: "0 auto 36px" },
  searchInput: { width: "100%", background: "#ffffff", border: "2px solid #e2e8f0", color: "#1e293b", padding: "14px 20px", borderRadius: 10, fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" },
  docsGrid: { maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 },
  progressGrid: { maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 28 },
  progressCard: { borderRadius: 14, padding: 32 },
  progressTitle: { fontSize: 18, fontWeight: 800, marginBottom: 24, color: "#ffffff" },
  barTrack: { height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" },
  barFill: { height: "100%", borderRadius: 3 },
  activityGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 },
  activityItem: { borderRadius: 10, padding: "16px 14px" },
  activityValue: { fontSize: 22, fontWeight: 900, color: "#ffffff", marginBottom: 4 },
  activityLabel: { fontSize: 12, lineHeight: 1.4, color: "rgba(255,255,255,0.6)" },
  footer: { padding: "28px 24px", background: "#ffffff", borderTop: "1px solid #e2e8f0" },
  footerInner: { maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 },
};

const css = `
  #ptep-root * { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-in-up { animation: fadeInUp 0.5s ease both; }
  button:hover { opacity: 0.88; transform: scale(1.02); }
  input::placeholder { color: #94a3b8; }
  input:focus { border-color: #3b82f6 !important; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 3px; }
  
  @media (max-width: 768px) {
    .heroStats { grid-template-columns: repeat(2, 1fr) !important; }
    .progressGrid { grid-template-columns: 1fr !important; }
  }
  
  @media (max-width: 480px) {
    .heroStats { grid-template-columns: 1fr !important; }
    .heroTabs { gap: 6px !important; }
  }
`;