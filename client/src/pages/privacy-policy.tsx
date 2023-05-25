import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

export default function policyPoliticsPage() {
  return (
    <DefaultLayout title="Política de privacidad">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="block text-xl md:text-3xl font-semibold capitalize lg:text-4xl text-gray-900">
            Política de privacidad
          </h2>

          <div className="mt-2">
            <span className="inline-block w-44 h-1 rounded-full bg-blue-500"></span>
          </div>
        </div>
        <p>
          Fecha de entrada en vigor: <b>26/05/2023</b>
        </p>
        <br />
        <p>
          En <strong>LearnCodePath</strong>, nos comprometemos a proteger la
          privacidad y seguridad de su información personal. Esta Política de
          Privacidad describe los tipos de información que recopilamos, cómo la
          utilizamos y protegemos, y sus derechos con respecto a sus datos
          personales. Al utilizar nuestro sitio web o nuestros servicios, usted
          acepta las prácticas descritas en esta política.
        </p>
        <br />
        <p>
          1. Información que recopilamos Podemos recopilar varios tipos de
          información de usted, incluyendo:
          <br /> 1.1 Información personal: Esto puede incluir su nombre,
          dirección de correo electrónico, número de teléfono, dirección postal
          y otra información que proporcione al ponerse en contacto con
          nosotros, crear una cuenta o realizar una compra.
          <br /> 1.2 Datos de registro: Cuando visita nuestro sitio web,
          nuestros servidores recopilan automáticamente cierta información, como
          su dirección IP, tipo de navegador, páginas de referencia/salida y
          sistema operativo. También podemos recopilar datos sobre su actividad
          de navegación en nuestro sitio web.
          <br /> 1.3 Cookies y tecnologías similares: Utilizamos cookies y
          tecnologías similares para mejorar su experiencia de navegación y
          recopilar información sobre cómo utiliza nuestro sitio web. Puede
          gestionar sus preferencias de cookies a través de la configuración de
          su navegador.
        </p>
        <br />
        <p>
          2. Cómo utilizamos su información Utilizamos la información que
          recopilamos para los siguientes fines:
          <br /> 2.1 Prestación de servicios: Para procesar sus pedidos,
          comunicarnos con usted y entregarle los productos o servicios que
          solicitó.
          <br /> 2.2 Personalización: Para personalizar su experiencia en
          nuestro sitio web, adaptar el contenido y las recomendaciones en
          función de sus preferencias y mejorar nuestros servicios.
          <br /> 2.3 Análisis e investigación: Para analizar tendencias,
          rastrear la actividad del usuario y recopilar información demográfica
          para mejorar nuestro sitio web y nuestros esfuerzos de marketing.
          <br /> 2.4 Comunicaciones de marketing: Con su consentimiento, podemos
          enviarle correos electrónicos promocionales sobre nuestros productos,
          servicios y ofertas especiales. Puede optar por no recibir estas
          comunicaciones en cualquier momento.
        </p>
        <br />
        <p>
          3. No vendemos, comercializamos ni alquilamos su información personal
          a terceros. Sin embargo, podemos compartir su información en las
          siguientes circunstancias:
          <br /> 3.1 Proveedores de servicios: Podemos contratar a proveedores
          de servicios externos de confianza para que nos ayuden a operar
          nuestro sitio web o a llevar a cabo nuestro negocio. Estos proveedores
          tienen acceso a su información con el único fin de prestar sus
          servicios en nuestro nombre.
          <br /> 3.2 Cumplimiento legal: Podemos revelar su información para
          cumplir con las leyes, reglamentos, procesos legales o solicitudes
          gubernamentales aplicables.
        </p>
        <br />
        <p>
          4. Seguridad de los datos Aplicamos medidas de seguridad razonables
          para proteger sus datos personales contra el acceso, la alteración, la
          divulgación o la destrucción no autorizados. Sin embargo, ningún
          método de transmisión por Internet o de almacenamiento electrónico es
          seguro al 100%.
        </p>
        <br />
        <p>
          5. Sus derechos y opciones Usted tiene derecho a:
          <br /> 5.1 Acceso y Rectificación: Solicitar acceso a su información
          personal y actualizar o corregir cualquier inexactitud.
          <br /> 5.2 Portabilidad de datos: Solicitar una copia de la
          información personal que tenemos sobre usted en un formato
          estructurado y legible por máquina.
          <br /> 5.3 Exclusión voluntaria: Deje de recibir nuestras
          comunicaciones comerciales siguiendo las instrucciones para darse de
          baja que figuran en el correo electrónico.
        </p>
        <br />
        <p>
          6. Nuestro sitio web no está dirigido a menores de 16 años. No
          recopilamos conscientemente información personal de niños. Si nos
          damos cuenta de que hemos recogido inadvertidamente información
          personal de un menor de 16 años, tomaremos medidas para eliminarla.
        </p>
        <br />{" "}
        <p>
          7. Cambios en esta Política de Privacidad Podemos actualizar esta
          Política de Privacidad de vez en cuando. Le notificaremos cualquier
          cambio sustancial política actualizada en nuestro sitio web. Le
          recomendamos que revise esta política periódicamente por si hubiera
          actualizaciones.
        </p>
        <br />{" "}
        <p>
          8. Póngase en contacto con nosotros Si tiene alguna pregunta, duda o
          solicitud en relación con esta Política de Privacidad, póngase en
          contacto con nosotros en{" "}
          <strong>soporte.tecnico@learncodepath.com</strong>. Al utilizar
          nuestro sitio web o nuestros servicios, usted reconoce haber leído y
          comprendido esta Política de Privacidad y acepta la recogida, uso y
          divulgación de su información personal tal y como se describe en la
          misma.
        </p>
      </div>
    </DefaultLayout>
  );
}
