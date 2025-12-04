import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createBlendy } from "blendy";

// Import all certificate images
import cert1 from "@/assets/certificados/FT Movistar y SENCE - Diploma 40h.jpg";
import cert2 from "@/assets/certificados/Talento Futuro.png";
import cert3 from "@/assets/certificados/aprobacion-final-analisis-estadistico-con-python-g61-11661.png";
import cert4 from "@/assets/certificados/aprobacion-final-proyecto-final-g33-11661.png";
import cert5 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-analisis-estadistico-con-python-g61-11661.png";
import cert6 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-backend-con-node-y-express-g33-11661.png";
import cert7 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-css-avanzado-g33-11661.png";
import cert8 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-introduccion-al-desarrollo-web-g33-11661.png";
import cert9 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g33-11661 (1).png";
import cert10 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-programacion-con-python-para-el-analisis-de-datos-g61-11661.png";
import cert11 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-react-i-g33-11661.png";
import cert12 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-sql-g33-11661.png";
import cert13 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-sql-para-el-analisis-de-datos-g61-11661 (1).png";
import cert14 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-sql-para-el-analisis-de-datos-g61-11661.png";
import cert15 from "@/assets/certificados/aprobacion-modulos-cursos-b-learning-visualizacion-y-comunicacion-de-insights-g61-11661 (1).png";
import cert16 from "@/assets/certificados/certificacion-aprobacion-de-carrera-nuevo-modelos-avanzados-y-redes-neuronales-g71-11661(3).png";
import cert17 from "@/assets/certificados/certificado-aprobacion-curso-curso-devops-senior-globant-11661(3).png";
import cert18 from "@/assets/certificados/certificado-aprobacion-de-modulo-nuevo-machine-learning-g71-11661(3).png";
import cert19 from "@/assets/certificados/certificado-aprobacion-de-modulo-nuevo-modelos-avanzados-y-redes-neuronales-g71-11661(3).png";
import cert20 from "@/assets/certificados/dc570247381cb710aa7ec38e406d3001c1dbd799.jpg";
import cert21 from "@/assets/certificados/react-ii-g33-11661.png";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    link: string;
}

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const blendyRef = useRef<any>(null);

    useEffect(() => {
        blendyRef.current = createBlendy({ animation: 'dynamic' });
    }, []);

    useLayoutEffect(() => {
        if (selectedCert) {
            blendyRef.current.toggle(selectedCert.id);
        }
    }, [selectedCert]);

    const handleCertClick = (cert: Certificate) => {
        setSelectedCert(cert);
    };

    const handleClose = () => {
        if (selectedCert) {
            blendyRef.current.untoggle(selectedCert.id, () => {
                setSelectedCert(null);
            });
        }
    };

    const certificates: Certificate[] = [
        {
            id: "cert-1",
            title: "DevOps Senior",
            issuer: "Globant",
            date: "2024",
            description: "Certificación avanzada en prácticas DevOps, CI/CD, automatización y gestión de infraestructura cloud.",
            image: cert17,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-2",
            title: "Machine Learning",
            issuer: "Desafío Latam",
            date: "2024",
            description: "Fundamentos de Machine Learning, algoritmos supervisados y no supervisados, y aplicaciones prácticas.",
            image: cert18,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-3",
            title: "Modelos Avanzados y Redes Neuronales",
            issuer: "Desafío Latam",
            date: "2024",
            description: "Deep Learning, redes neuronales convolucionales, recurrentes y arquitecturas avanzadas.",
            image: cert19,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-4",
            title: "Carrera Data Science",
            issuer: "Desafío Latam",
            date: "2024",
            description: "Programa completo de Data Science incluyendo análisis estadístico, machine learning y visualización.",
            image: cert16,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-5",
            title: "Análisis Estadístico con Python",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Análisis estadístico avanzado utilizando Python, Pandas, NumPy y bibliotecas de visualización.",
            image: cert3,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-6",
            title: "Programación con Python para Análisis de Datos",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Fundamentos de Python aplicados al análisis de datos y procesamiento de información.",
            image: cert10,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-7",
            title: "SQL para Análisis de Datos",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Consultas SQL avanzadas, optimización de queries y análisis de bases de datos relacionales.",
            image: cert13,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-8",
            title: "Visualización y Comunicación de Insights",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Técnicas de visualización de datos y comunicación efectiva de resultados analíticos.",
            image: cert15,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-9",
            title: "Proyecto Final Fullstack",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Desarrollo completo de aplicación fullstack integrando frontend, backend y base de datos.",
            image: cert4,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-10",
            title: "Backend con Node y Express",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Desarrollo de APIs RESTful con Node.js y Express, autenticación y manejo de bases de datos.",
            image: cert6,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-11",
            title: "React I",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Fundamentos de React: componentes, hooks, estado y ciclo de vida de aplicaciones.",
            image: cert11,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-12",
            title: "React II",
            issuer: "Desafío Latam",
            date: "2023",
            description: "React avanzado: Context API, optimización, patrones de diseño y mejores prácticas.",
            image: cert21,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-13",
            title: "JavaScript para la Web",
            issuer: "Desafío Latam",
            date: "2023",
            description: "JavaScript moderno, manipulación del DOM, eventos y programación asíncrona.",
            image: cert9,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-14",
            title: "CSS Avanzado",
            issuer: "Desafío Latam",
            date: "2023",
            description: "CSS3 avanzado, Flexbox, Grid, animaciones y diseño responsive.",
            image: cert7,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-15",
            title: "Introducción al Desarrollo Web",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Fundamentos de desarrollo web: HTML, CSS, y principios de diseño web.",
            image: cert8,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-16",
            title: "SQL",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Fundamentos de SQL, diseño de bases de datos relacionales y consultas básicas.",
            image: cert12,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-17",
            title: "Talento Futuro",
            issuer: "Movistar & SENCE",
            date: "2023",
            description: "Programa de formación en tecnologías digitales y desarrollo de habilidades técnicas.",
            image: cert2,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-18",
            title: "Diploma 40 horas",
            issuer: "Movistar & SENCE",
            date: "2023",
            description: "Formación técnica intensiva en desarrollo de software y tecnologías web.",
            image: cert1,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-19",
            title: "Certificación Profesional",
            issuer: "Institución Certificadora",
            date: "2023",
            description: "Certificación profesional en desarrollo de software y mejores prácticas de la industria.",
            image: cert20,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-20",
            title: "Análisis Estadístico con Python - Módulos",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Módulos complementarios de análisis estadístico y procesamiento de datos.",
            image: cert5,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        },
        {
            id: "cert-21",
            title: "SQL para Análisis de Datos - Avanzado",
            issuer: "Desafío Latam",
            date: "2023",
            description: "Técnicas avanzadas de SQL para análisis de datos complejos y optimización.",
            image: cert14,
            link: "https://www.linkedin.com/in/luisomarsanchezdiaz/details/certifications/"
        }
    ];

    return (
        <section className="min-h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-secondary/30 dark:bg-secondary/10 relative">
            <BackgroundParticles />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12 md:mb-20 animate-fade-in-up text-center md:text-left">
                    <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                        Certificaciones
                    </h2>
                    <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8 mx-auto md:mx-0"></div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                        Logros y Certificaciones
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-foreground/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col animate-fade-in-up cursor-pointer"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => handleCertClick(cert)}
                        >
                            {/* Certificate Image - Source for Blendy */}
                            <div
                                className="relative overflow-hidden aspect-[4/3] bg-white dark:bg-gray-100"
                                data-blendy-from={cert.id}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-3">
                                    <h4 className="text-lg md:text-xl font-display font-bold mb-1 text-foreground line-clamp-2">
                                        {cert.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <p className="text-xs text-muted-foreground mb-1">
                                    {cert.date}
                                </p>

                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expanded Certificate Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleClose}>
                    <div
                        className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl mt-20 md:mt-0"
                        onClick={(e) => e.stopPropagation()}
                        data-blendy-to={selectedCert.id}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 left-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors pointer-events-auto"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                            <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="max-w-full max-h-[70vh] object-contain shadow-lg"
                                />
                            </div>

                            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-background">
                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                                    {selectedCert.title}
                                </h3>
                                <p className="text-lg text-primary font-medium mb-6">
                                    {selectedCert.issuer}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Fecha</h4>
                                        <p>{selectedCert.date}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Descripción</h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedCert.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        className="w-full"
                                        onClick={() => window.open(selectedCert.link, '_blank')}
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Ver en LinkedIn
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
