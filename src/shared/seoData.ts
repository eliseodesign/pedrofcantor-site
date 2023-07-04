import { RoutesConstants, inmutableConstants, routesContstants } from "./constants";

interface SEO {
    title: string;
    description: string;
    keywords: string[];
}

type RouteKey = keyof RoutesConstants;

// Definición de las rutas y sus metadatos de SEO
const seoByRoute: Record<RouteKey, SEO> = {
    INICIO: {
      title: `${inmutableConstants.NOMBRE} web site`,
      description: `Complejo Educativo Pedro F. Cantor - oficial website - informate de nuestras publicaciones, eventos y material educativo`,
      keywords: [
        "Pedro Felix Cantor",
        "PFC",
        "Pedro F. Cantor",
        "Cantor",
        "Izalco",
        "Bachillerato Izalco"
      ],
    },
    SOBRE_NOSOTROS: {
      title: `${inmutableConstants.NOMBRE} | ${routesContstants.SOBRE_NOSOTROS[0][1]}`,
      description: `Calidad Ciencia y Cultura, nuestra misión, visión e ideales`,
      keywords: [
        "Principios Cantor", "Visión", "Misión", "Calidad"
      ]
    },
    
    HISTORIA:{
      title: `${inmutableConstants.NOMBRE} | ${routesContstants.HISTORIA[0][1]}`,
      description: `Recopilación de la huellas en el tiempo de nuestra institución`,
      keywords: [
        "Historia Cantor", "Antecedentes", "Directores"
      ]
    },
    EDU:{
      title: `Inicio - ${inmutableConstants.NOMBRE} | ${routesContstants.EDU[0][1]}`,
      description: `Sección para el reconocimiento a la excelencia nuestros estudiantes`,
      keywords: [
        "juegos"
      ]
    },
    CONTACTO: {
      title: `${inmutableConstants.NOMBRE}| ${routesContstants.CONTACTO[0][1]}`,
      description: `Contactanos a traves de este formulario`,
      keywords: [
        "Contacto", "Ubicación", "Facebook", "Formulario"
      ]
    }
    
};

// Función para obtener los metadatos de SEO de una ruta específica
export function getSEO(route: RouteKey): SEO | undefined {
    return seoByRoute[route];
}