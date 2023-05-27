import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";

function AdminManualPage() {
  return (
    <DefaultLayout title="Manual de usuario">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="block text-xl md:text-3xl font-semibold capitalize lg:text-4xl text-gray-900">
            Manual de Administrador
          </h2>

          <div className="mt-2">
            <span className="inline-block w-44 h-1 rounded-full bg-blue-500"></span>
          </div>
        </div>
        <h3 className="text-lg font-medium">Tabla de Contenidos</h3>
        <ol className="list-decimal list-inside">
          <li>Introducción</li>
          <li>Primeros Pasos</li>
          <li>Funcionalidades</li>
          <li>Solución de Problemas</li>
          <li>Preguntas Frecuentes</li>
          <li>Información de Contacto</li>
        </ol>
        <br />
        <h3 className="text-lg font-medium">1. Introducción</h3>
        <p>
          ¡Gracias por elegir nuestro producto! Este manual de usuario te guiará
          a través de las características y el uso de nuestra aplicación. Por
          favor, lee este manual detenidamente para aprovechar al máximo tu
          experiencia.
        </p>
        <br />
        <h3 className="text-lg font-medium">2. Primeros Pasos</h3>
        <ul className="list-disc list-inside">
          <li>
            Requisitos del Sistema: Verifica los requisitos mínimos del sistema
            necesarios para ejecutar la aplicación.
          </li>
          <li>
            Instalación: Sigue las instrucciones paso a paso para instalar la
            aplicación en tu dispositivo.
          </li>
          <li>
            Creación de Cuenta: Aprende cómo crear una nueva cuenta de usuario o
            iniciar sesión con tus credenciales existentes.
          </li>
        </ul>
        <br />
        <h3 className="text-lg font-medium">3. Funcionalidades</h3>
        <h4 className="text-md font-medium">3.1 Funcionalidad 1</h4>
        <ul className="list-disc list-inside">
          <li>
            Descripción: Comprende qué ofrece la Funcionalidad 1 y cómo mejora
            tu experiencia.
          </li>
          <li>
            Uso: Aprende cómo acceder y utilizar la Funcionalidad 1 con
            instrucciones detalladas paso a paso.
          </li>
          <li>
            Consejos y Trucos: Descubre consejos útiles y atajos para optimizar
            tu flujo de trabajo con la Funcionalidad 1.
          </li>
        </ul>
        <br />
        <h4 className="text-md font-medium">3.2 Funcionalidad 2</h4>
        <ul className="list-disc list-inside">
          <li>
            Descripción: Explora los beneficios y funcionalidades de la
            Funcionalidad 2.
          </li>
          <li>
            Uso: Familiarízate con la Funcionalidad 2 siguiendo las
            instrucciones proporcionadas.
          </li>
          <li>
            Mejores Prácticas: Descubre prácticas y estrategias recomendadas
            para utilizar la Funcionalidad 2 de manera efectiva.
          </li>
        </ul>
        <br />
        <h3 className="text-lg font-medium">4. Solución de Problemas</h3>
        <p>
          ¿Te encuentras con problemas? Consulta la sección de Solución de
          Problemas para encontrar soluciones a problemas comunes. Aquí se
          tratan algunos temas:
        </p>
        <ul className="list-disc list-inside">
          <li>Mensajes de error frecuentes y los pasos para solucionarlos.</li>
          <li>Problemas comunes y sus resoluciones.</li>
          <li>
            Cómo contactar a nuestro equipo de soporte para obtener ayuda
            adicional.
          </li>
        </ul>
        <br />
        <h3 className="text-lg font-medium">5. Preguntas Frecuentes</h3>
        <p>
          Lee la sección de Preguntas Frecuentes para encontrar respuestas a
          preguntas comúnmente planteadas. Aquí se tratan algunos temas:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Consultas generales sobre la aplicación y sus funcionalidades.
          </li>
          <li>Gestión de cuentas y preguntas relacionadas con contraseñas.</li>
          <li>Consultas sobre facturación y suscripciones.</li>
        </ul>
        <br />
        <h3 className="text-lg font-medium">6. Información de Contacto</h3>
        <p>
          Si necesitas ayuda adicional o tienes alguna pregunta que no se haya
          tratado en este manual, comunícate con nuestro equipo de soporte. Aquí
          está la información de contacto:
        </p>
        <ul className="list-disc list-inside">
          <li>Email de Soporte: soporte.tecnico@learncodepath.com</li>
          <li>Teléfono de Soporte: +34 000000000 (No disponible)</li>
        </ul>
      </div>
    </DefaultLayout>
  );
}

export default withAuth(AdminManualPage);
