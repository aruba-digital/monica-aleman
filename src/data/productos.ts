/**
 * Catálogo reducido (3 ofertas de psicología). Valores referenciales; confirmar al coordinar.
 * Perfil externo (agenda con tarjeta): https://encuadrado.com/p/monica-aleman
 */
export const encuadradoPerfil = "https://encuadrado.com/p/monica-aleman";

export type TemaProducto = "primary" | "psico" | "nutri";

export type IconoDetallePrecio = "video" | "reloj" | "pin";

export type SegmentoDetallePrecio = {
	/** Si se omite, solo se muestra el texto (ej. segundo fragmento sin icono) */
	icono?: IconoDetallePrecio;
	texto: string;
};

export type ProductoEncuadrado = {
	id: string;
	nombre: string;
	precio: string;
	/** Dos fragmentos debajo del precio: [icono +] texto · [icono +] texto */
	detallesPrecio: [SegmentoDetallePrecio, SegmentoDetallePrecio];
	caracteristicas: string[];
	notaPie: string;
	tema: TemaProducto;
	urlEncuadrado: string;
	/** ID servicio Encuadrado (pestaña correspondiente), si aplica */
	encuadradoServiceId?: string;
	/** Muestra enlace a galería modal (fotos del box; assets resueltos en la página) */
	galeriaBox?: boolean;
};

export const productosEncuadrado: ProductoEncuadrado[] = [
	{
		id: "sesion-individual-online",
		nombre: "Sesión psicológica individual",
		precio: "$25.000",
		detallesPrecio: [
			{ icono: "video", texto: "Online" },
			{ icono: "reloj", texto: "60 min" }
		],
		caracteristicas: [
			"Una sesión individual por videollamada",
			"Enfoque integrativo y cercano",
			"Agenda y pago en línea o coordinación directa",
			"Adolescentes (+12) y adultos"
		],
		notaPie: "*Se emite boleta de honorarios para reembolso según tu isapre o seguro.*",
		tema: "psico",
		urlEncuadrado: encuadradoPerfil,
		encuadradoServiceId: "125764"
	},
	{
		id: "paquete-sesiones-online",
		nombre: "Paquete de 4 sesiones",
		precio: "$95.000",
		detallesPrecio: [
			{ icono: "video", texto: "Online" },
			{ icono: "reloj", texto: "60 min por sesión" }
		],
		caracteristicas: [
			"Cuatro sesiones psicológicas individuales",
			"Modalidad online",
			"Mejor continuidad en tu proceso",
			"Pago con débito o crédito u otras formas acordadas"
		],
		notaPie: "*Se emite boleta de honorarios para reembolso según tu isapre o seguro.*",
		tema: "psico",
		urlEncuadrado: encuadradoPerfil,
		encuadradoServiceId: "125765"
	},
	{
		id: "sesion-individual-presencial",
		nombre: "Sesión psicológica individual",
		precio: "$35.000",
		detallesPrecio: [{ icono: "pin", texto: "Presencial" }, { texto: "consulta en Providencia" }],
		caracteristicas: [
			"Una sesión individual en consulta",
			"Ubicación y horarios según disponibilidad",
			"Reserva y coordinación al solicitar",
			"Indicaciones de acceso al confirmar tu hora"
		],
		notaPie: "*Se emite boleta de honorarios para reembolso según tu isapre o seguro.*",
		tema: "psico",
		urlEncuadrado: encuadradoPerfil,
		galeriaBox: true
	}
];

/** Documentos digitales (imagen de referencia; solicitud vía sitio) */
export type ProductoDocumentacion = {
	id: string;
	nombre: string;
	precio: string;
	resumen: string;
	imagen: string;
	imagenAlt: string;
};

export const productosDocumentacion: ProductoDocumentacion[] = [
	{
		id: "informe-psicologico",
		nombre: "Informe psicológico",
		precio: "$5.000",
		resumen: "Documento clínico para trámites, estudios o instituciones. Coordinación previa del tipo de informe.",
		imagen:
			"https://encuadrado-user-uploads.s3.amazonaws.com/payment-btns/MjkwOTQ.NlzEJqriJxlwL765e03qqCTAuQ4/1.jpeg",
		imagenAlt: "Vista del informe psicológico"
	},
	{
		id: "certificado-atencion",
		nombre: "Certificado de atención psicológica",
		precio: "$3.000",
		resumen: "Certificado para trámites que requieran acreditar atención con psicóloga clínica.",
		imagen:
			"https://encuadrado-user-uploads.s3.amazonaws.com/payment-btns/NDYxMDI.80TSMPa7RBWM_3vAnLiDimqloDk/1.jpeg",
		imagenAlt: "Vista del certificado de atención psicológica"
	}
];
