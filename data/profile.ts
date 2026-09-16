import type { Profile } from "@/types/profile";

export const profile: Profile = {
  personal: {
    name: "Edyson Leal",
    role: "Full-Stack & Tech Leader",
    location: "Cúcuta - Medellin, Colombia",
    tagline:
      "Desarrollador de Software y Lider técnico con más de 7 años de expriencia desarrollando aplicaciones web, moviles y servicios Rest API contruyendo software de calidad, escalables y profesional interfaces web, APIs backend y apps móviles de punta a punta, con foco en código mantenible y buena experiencia de uso.",
    shortBio: "Desarrollador Fullstack y Lider técnico con experiencia en frontend, backend y desarrollo móvil.",
    availability: "available",
    yearsOfExperience: 7,
  },

  story: {
    heading: "Sobre mí",
    paragraphs: [
      "Ingeniero de sistemas con más de 7 años de experiencia en desarrollo de software backend y full stack.", 
      "Experiencia práctica en Java, Spring Boot, Oracle PL/SQL, Angular y Kotlin, con desarrollo de microservicios.",
      " Experiencia en despliegue sobre AWS, GCP y Azure, uso de Docker, Kubernetes y metodologías ágiles (Scrum).",
      "Destacado por liderar equipos técnicos, desarrollar APIs RESTful, y aplicar buenas prácticas de desarrollo con Arquitectura Hexagonal, ",
      "Clean Architecture, Scaffold y Clean Code, uso de control de versiones con Git, SonarQube y pruebas automatizadas.",
    ],
    focusAreas: [
      { label: "Frontend", detail: "Interfaces con Angular, React, Material, Javascript" },
      { label: "Backend", detail: "APIs y servicios con Java, Spring boot, Node usando Arquitectura hexagonal y Clean Architecture" },
      { label: "Mobile", detail: "Apps nativas e híbridas con Kotlin e Ionic" },
      { label: "Cloud", detail: "Servicios con AWS, Azure y GCP" },
      { label: "Herramientas", detail: "Git, GitHub, Bitbucket, Docker, Kubernetes, Postman, SonarQube, Apache Kafka, JUnit, Mockito, JSON, Gradle, Maven" },
      { label: "Metodologías", detail: "Scrum, DevOps" },
    ],
  },

  workingStyle: [
    {
      id: "end-to-end",
      icon: "rocket",
      title: "De la idea al producto",
      description:
        "Puedo llevar un proyecto de punta a punta: interfaz, lógica de backend y, si hace falta, la app móvil que lo acompaña.",
    },
    {
      id: "maintainable",
      icon: "wrench",
      title: "Código para mantener",
      description:
        "Escribo pensando en quien va a leer el código después: nombres claros, pruebas donde importan, decisiones documentadas.",
    },
    {
      id: "teamwork",
      icon: "handshake",
      title: "Trabajo en equipo",
      description:
        "Me adapto a metodologías ágiles, comunico bloqueos a tiempo y prefiero preguntar antes que asumir.",
    },
    {
      id: "learning",
      icon: "book-open",
      title: "Aprendizaje continuo",
      description:
        "Cuando una tecnología es nueva para mí, investigo, pruebo y la integro al proyecto de forma responsable.",
    },
  ],

  experience: [
    {
      id: "freelance",
      company: "Freelance",
      role: "Líder Técnico y Desarrollador Full Stack",
      type: "Freelance",
      startDate: "2026-06",
      endDate: null,
      achievements: [
        "Lidero la arquitectura de cada proyecto de punta a punta con Java, Spring Boot y Angular, priorizando mantenibilidad para clientes de retail y gestión comercial.",
        "Despliego infraestructura como código en AWS (CloudFormation, EC2, S3, API Gateway) con Docker, garantizando disponibilidad continua en producción.",
        "Aplico Clean Architecture, Arquitectura Hexagonal y SOLID para reducir el acoplamiento entre servicios y extender funcionalidades sin reescribir el backend.",
        "Documento APIs con OpenAPI/Swagger y Spring Security, logrando que los equipos consumidores las integren sin soporte adicional.",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "AWS", "Docker", "Ionic", "Arquitectura Hexagonal", "Clean Architecture", "Flyway"],
    },
    {
      id: "amaris",
      company: "Amaris",
      role: "Desarrollador Backend (Consultor)",
      type: "Consultoría",
      startDate: "2026-02",
      endDate: "2026-06",
      achievements: [
        "Lideré la migración de un sistema monolítico a microservicios con Arquitectura Hexagonal (Java/Spring Boot), sin un solo incidente reportado durante toda la transición.",
        "Implementé Google Cloud Secret Manager, alineando las decisiones de seguridad con las políticas del cliente.",
        "Coordiné el ritmo de entregas del equipo mediante revisiones de código (Pull Requests) y despliegues sobre GCP.",
      ],
      technologies: ["Java", "Spring Boot", "GCP", "Arquitectura Hexagonal"],
    },
    {
      id: "gft",
      company: "GFT Technologies",
      role: "Desarrollador Backend Java",
      type: "Tiempo completo",
      startDate: "2024-10",
      endDate: "2025-12",
      achievements: [
        "Desarrollé servicios RESTful con Spring Boot y Arquitectura Hexagonal para un sistema de medios de pago de alta transaccionalidad (cliente Pexto Cobre).",
        "Reduje el riesgo operativo en el procesamiento de pagos con pruebas unitarias e integración (JUnit, Mockito) y monitoreo de errores por transacción.",
        "Participé en la selección técnica de nuevos desarrolladores para Bancolombia (módulos SVE y Bolsillos), evaluando Java, Spring Boot, SQL y arquitecturas Clean/Hexagonal.",
        "Mejoré la escalabilidad de sistemas distribuidos con Spring WebFlux y arquitectura reactiva, reduciendo el tiempo de diagnóstico de errores.",
      ],
      technologies: ["Java", "Spring Boot", "Spring WebFlux", "JUnit", "Mockito", "Arquitectura Hexagonal", "Scaffold"],
    },
    {
      id: "linktic",
      company: "Linktic S.A.S",
      role: "Líder de Proyecto / Desarrollador Full Stack",
      type: "Tiempo completo",
      startDate: "2023-09",
      endDate: "2024-10",
      achievements: [
        "Lideré la migración de la plataforma de certificados de la Superintendencia Financiera de Colombia (SFC) con Kotlin, Spring WebFlux y Angular, entregando con éxito el proyecto y su fase 2 (Posesiones).",
        "Eliminé los errores de despliegue por desalineación de esquema con versionamiento de base de datos (Flyway sobre PostgreSQL).",
        "Entregué a la Fiscalía una app móvil nativa con lector RFID para control de activos, integrada con APIs REST validadas en Postman.",
      ],
      technologies: ["Kotlin", "Spring WebFlux", "Angular", "PostgreSQL", "Flyway"],
    },
    {
      id: "periferia",
      company: "Periferia IT Group",
      role: "Desarrollador Backend / Frontend",
      type: "Tiempo completo",
      startDate: "2022-06",
      endDate: "2023-06",
      achievements: [
        "Construí un sistema distribuido orientado a eventos de alta disponibilidad con Apache Kafka sobre servicios Java/Spring Boot (cliente Scotiabank Colpatria), procesando alto volumen sin degradación.",
        "Acorté los tiempos de diagnóstico de incidentes del equipo con logging, monitoreo y documentación técnica en Confluence.",
      ],
      technologies: ["Java", "Spring Boot", "Apache Kafka", "Gradle"],
    },
    {
      id: "consultec",
      company: "Consultec TI",
      role: "Desarrollador Backend / Frontend — Java / Angular",
      type: "Tiempo completo",
      startDate: "2021-06",
      endDate: "2022-06",
      achievements: [
        "Diseñé flujos de procesamiento reactivo con RxJava y optimicé la capa de persistencia de una plataforma bancaria panameña sobre Liferay.",
        "Cubrí la lógica crítica con pruebas unitarias (JUnit, Mockito).",
      ],
      technologies: ["Java", "Spring", "RxJava", "Liferay"],
    },
    {
      id: "tur",
      company: "TUR Colombia Limited S.A.S",
      role: "Líder Técnico y Desarrollador Full Stack",
      type: "Tiempo completo",
      startDate: "2020-12",
      endDate: "2021-05",
      achievements: [
        "Definí la arquitectura y lideré el desarrollo de una plataforma web y móvil de gestión operativa (backend en Kotlin/Spring Boot), adoptada por el equipo de campo.",
        "Desplegué la solución en AWS (EC2, API Gateway) con Docker y Git Flow para mayor escalabilidad y disponibilidad.",
      ],
      technologies: ["Kotlin", "Spring Boot", "AWS", "Docker"],
    },
    {
      id: "wposs",
      company: "WPOSS S.A.S",
      role: "Desarrollador Móvil y Web",
      type: "Tiempo completo",
      startDate: "2019-10",
      endDate: "2020-08",
      achievements: [
        "Construí APIs reactivas con Spring WebFlux para una plataforma financiera (BCP), con persistencia en PostgreSQL.",
      ],
      technologies: ["Spring WebFlux", "PostgreSQL"],
    },
    {
      id: "hi-tech",
      company: "HI-TECH",
      role: "Líder de Proyecto y Desarrollador Móvil",
      type: "Freelance",
      startDate: "2019-06",
      endDate: "2019-09",
      achievements: [
        "Definí la arquitectura y lideré una app de gestión de inventarios y comisiones con backend reactivo en Kotlin/Spring WebFlux, adoptada en el seguimiento diario de los vendedores.",
        "Desplegué la solución en AWS (EC2, S3) con Docker para una disponibilidad confiable.",
      ],
      technologies: ["Kotlin", "Spring WebFlux", "AWS", "Docker"],
    },
    {
      id: "wifix",
      company: "WIFIX",
      role: "Líder de Proyecto / Técnico y Desarrollador Web y Móvil",
      type: "Tiempo completo",
      startDate: "2017-01",
      endDate: "2019-05",
      achievements: [
        "Definí la arquitectura full stack y lideré el catálogo interactivo de productos, adoptado como canal principal de ventas online (frontend Bootstrap/JS, backend Kotlin/Spring Boot/WebFlux).",
        "Desplegué la solución sobre AWS con observabilidad end-to-end mediante logging y monitoreo.",
      ],
      technologies: ["Kotlin", "Spring Boot", "Bootstrap", "AWS"],
    },
  ],

  technologies: [
    { id: "angular", name: "Angular", category: "Frontend", icon: { source: "simple-icons", slug: "siAngular" } },
    { id: "react", name: "React", category: "Frontend", icon: { source: "simple-icons", slug: "siReact" } },
    { id: "javascript", name: "JavaScript", category: "Frontend", icon: { source: "simple-icons", slug: "siJavascript" } },

    { id: "java", name: "Java", category: "Backend", icon: { source: "local", src: "/tech/java.svg" } },
    { id: "kotlin", name: "Kotlin", category: "Backend", icon: { source: "simple-icons", slug: "siKotlin" } },
    { id: "springboot", name: "Spring Boot", category: "Backend", icon: { source: "simple-icons", slug: "siSpringboot" } },
    { id: "nodejs", name: "Node.js", category: "Backend", icon: { source: "simple-icons", slug: "siNodedotjs" } },
    { id: "python", name: "Python", category: "Backend", icon: { source: "simple-icons", slug: "siPython" } },
    { id: "django", name: "Django", category: "Backend", icon: { source: "simple-icons", slug: "siDjango" } },
    { id: "php", name: "PHP", category: "Backend", icon: { source: "simple-icons", slug: "siPhp" } },
    { id: "go", name: "Go", category: "Backend", icon: { source: "simple-icons", slug: "siGo" } },

    { id: "aws", name: "AWS", category: "Cloud", icon: { source: "local", src: "/tech/aws.svg" } },
    { id: "azure", name: "Azure", category: "Cloud", icon: { source: "local", src: "/tech/azure.svg" } },
    { id: "gcp", name: "Google Cloud", category: "Cloud", icon: { source: "simple-icons", slug: "siGooglecloud" } },

    { id: "android-studio", name: "Android Studio", category: "Mobile", icon: { source: "simple-icons", slug: "siAndroidstudio" } },
    { id: "ionic", name: "Ionic", category: "Mobile", icon: { source: "simple-icons", slug: "siIonic" } },
    { id: "kotlin-mobile", name: "Kotlin", category: "Mobile", icon: { source: "simple-icons", slug: "siKotlin" } },
    { id: "java-mobile", name: "Java", category: "Mobile", icon: { source: "local", src: "/tech/java.svg" } },

    { id: "mysql", name: "MySQL", category: "Bases de datos", icon: { source: "simple-icons", slug: "siMysql" } },
    { id: "postgresql", name: "PostgreSQL", category: "Bases de datos", icon: { source: "simple-icons", slug: "siPostgresql" } },
    { id: "oracle", name: "Oracle PL/SQL", category: "Bases de datos", icon: { source: "local", src: "/tech/oracle.svg" } },
    { id: "h2", name: "H2", category: "Bases de datos", icon: { source: "simple-icons", slug: "siH2database" } },

    { id: "junit", name: "JUnit", category: "Testing", icon: { source: "simple-icons", slug: "siJunit5" } },
    { id: "postman", name: "Postman", category: "Testing", icon: { source: "simple-icons", slug: "siPostman" } },

    { id: "git", name: "Git", category: "Herramientas", icon: { source: "simple-icons", slug: "siGit" } },
    { id: "github", name: "GitHub", category: "Herramientas", icon: { source: "simple-icons", slug: "siGithub" } },
    { id: "bitbucket", name: "Bitbucket", category: "Herramientas", icon: { source: "simple-icons", slug: "siBitbucket" } },
    { id: "docker", name: "Docker", category: "Herramientas", icon: { source: "simple-icons", slug: "siDocker" } },
    { id: "kubernetes", name: "Kubernetes", category: "Herramientas", icon: { source: "simple-icons", slug: "siKubernetes" } },
    { id: "kafka", name: "Apache Kafka", category: "Herramientas", icon: { source: "simple-icons", slug: "siApachekafka" } },
    { id: "gradle", name: "Gradle", category: "Herramientas", icon: { source: "simple-icons", slug: "siGradle" } },
    { id: "maven", name: "Maven", category: "Herramientas", icon: { source: "simple-icons", slug: "siApachemaven" } },
  ],

  projects: [
    {
      id: "proj-sfc",
      name: "Migración de plataforma — Superintendencia Financiera de Colombia",
      tagline: "Migración de una plataforma regulatoria de misión crítica (vía Linktic S.A.S)",
      objective:
        "Migrar la plataforma de certificados de la Superintendencia Financiera de Colombia (SFC) hacia una arquitectura moderna, sin interrumpir la operación de un organismo regulador.",
      features: [
        "Migración a Kotlin + Spring WebFlux",
        "Frontend en Angular",
        "Versionamiento de esquema con Flyway sobre PostgreSQL",
        "App móvil nativa con lector RFID para la Fiscalía",
      ],
      role: "Lideré el equipo de desarrollo y tomé las decisiones de arquitectura de la migración, incluyendo la entrega exitosa de la fase 2 (Posesiones).",
      stack: ["Kotlin", "Spring WebFlux", "Angular", "PostgreSQL", "Flyway"],
    },
    {
      id: "proj-payments",
      name: "Sistema de medios de pago de alta transaccionalidad",
      tagline: "Servicios backend para una plataforma de pagos (vía GFT Technologies, cliente Pexto Cobre)",
      objective:
        "Desarrollar e integrar funcionalidades en un sistema de pagos de alta transaccionalidad, minimizando el riesgo operativo en cada transacción.",
      features: [
        "Servicios RESTful con Spring Boot",
        "Arquitectura Hexagonal",
        "Cobertura de pruebas con JUnit y Mockito",
        "Logging y monitoreo de transacciones",
      ],
      role: "Desarrollé servicios RESTful con Spring Boot sobre Arquitectura Hexagonal y aseguré la trazabilidad de cada transacción.",
      stack: ["Java", "Spring Boot", "JUnit", "Mockito"],
    },
  ],

  achievements: [
    {
      id: "ach-1",
      icon: "shield",
      title: "Migración a microservicios sin incidentes",
      description:
        "En Amaris, lideré la migración de un sistema monolítico a microservicios con Arquitectura Hexagonal, cerrando la transición sin un solo incidente reportado.",
    },
    {
      id: "ach-2",
      icon: "arrow-up-right",
      title: "Plataforma de certificados de la SFC",
      description:
        "En Linktic, lideré la migración de la plataforma de certificados de la Superintendencia Financiera de Colombia, entregando el proyecto y su fase 2 con éxito.",
    },
    {
      id: "ach-3",
      icon: "code",
      title: "+7 años liderando arquitectura y equipos",
      description:
        "Ingeniero de sistemas con más de 7 años definiendo arquitectura, liderando equipos técnicos y entregando software para banca, retail y entidades gubernamentales.",
    },
  ],

  stats: [
    { id: "years", kind: "text", display: "7+", label: "Años de experiencia" },
    { id: "sectors", kind: "text", display: "Banca · Retail · Gobierno · POS", label: "Sectores donde trabajé" },
    { id: "approach", kind: "text", display: "Clean Architecture · Arquitectura Hexagonal", label: "Cómo diseño software" },
    { id: "status", kind: "text", display: "Disponible", label: "Para nuevos desafíos" },
  ],

  contact: {
    // Ofuscado con lib/obfuscation.ts a partir de edysonleal3@gmail.com
    emailEncoded: "cHJmMW9sZHBqQzZvZGhvcXJ2fGdo",
  },

  socials: [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/edyson-leal/", icon: "linkedin" },
    { id: "github", label: "GitHub", href: "https://github.com/edyson10", icon: "github" },
    { id: "cv", label: "Descargar CV", href: "/CV_Edyson_Leal.pdf", icon: "download" },
  ],
};
