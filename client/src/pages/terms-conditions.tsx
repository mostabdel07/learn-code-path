import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function TermsConditionsPage() {
  return (
    <DefaultLayout title="Política de privacidad">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="block text-xl md:text-3xl font-semibold capitalize lg:text-4xl text-gray-900">
            Términos y Condiciones de Uso
          </h2>

          <div className="mt-2">
            <span className="inline-block w-44 h-1 rounded-full bg-blue-500"></span>
          </div>
        </div>
        <p>
          Última actualización: <b>26/05/2023</b>
        </p>
        <br />
        <h3 className="text-lg font-medium">
          Aceptación de los Términos y Condiciones
        </h3>
        <p>
          Al acceder y utilizar este servicio <strong>LearnCodePath</strong>,
          usted acepta quedar legalmente vinculado por los siguientes términos y
          condiciones de uso. Si no está de acuerdo con alguno de estos
          términos, le rogamos que no utilice este servicio.
        </p>
        <br />
        <h3 className="text-lg font-medium">Uso del Servicio</h3>
        <p>
          a) Usted se compromete a utilizar este servicio únicamente con fines
          legítimos y de acuerdo con la ley aplicable. <br />
          b) Queda prohibido el uso de este servicio para cualquier actividad
          ilícita, fraudulenta o que infrinja los derechos de terceros. <br />
          c) Usted acepta no enviar, publicar o transmitir cualquier contenido
          que sea difamatorio, obsceno, ofensivo, o que viole los derechos de
          propiedad intelectual de terceros.
        </p>
        <br />
        <h3 className="text-lg font-medium">Propiedad Intelectual</h3>
        <p>
          a) Todo el contenido presente en este servicio, incluyendo pero no
          limitado a texto, gráficos, logotipos, imágenes y software, está
          protegido por derechos de propiedad intelectual y es propiedad
          exclusiva del titular del servicio. <br />
          b) Usted acepta no copiar, distribuir, transmitir, mostrar, modificar
          o crear trabajos derivados de este contenido sin el consentimiento
          expreso por escrito del titular del servicio.
        </p>
        <br />
        <h3 className="text-lg font-medium">Limitación de Responsabilidad</h3>
        <p>
          a) Este servicio se proporciona &quot;tal cual&quot; y el titular del
          servicio no otorga ninguna garantía en cuanto a su disponibilidad,
          fiabilidad o idoneidad para un propósito particular. <br /> b) En
          ningún caso el titular del servicio será responsable por daños
          directos, indirectos, incidentales, especiales o consecuentes que
          surjan del uso o la imposibilidad de uso de este servicio.
        </p>
        <br />
        <h3 className="text-lg font-medium">Ley Aplicable y Jurisdicción</h3>
        <p>
          Estos términos y condiciones se regirán e interpretarán de acuerdo con
          las leyes de España. Cualquier disputa que surja en relación con este
          servicio estará sujeta a la jurisdicción exclusiva de los tribunales
          de Barcelona, Cataluña, España.
        </p>
      </div>
    </DefaultLayout>
  );
}
