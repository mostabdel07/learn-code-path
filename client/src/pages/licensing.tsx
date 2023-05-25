import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

export default function licensingPage() {
  return (
    <DefaultLayout title="Licencia de software">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="block text-xl md:text-3xl font-semibold capitalize lg:text-4xl text-gray-900">
            Licencia de Software
          </h2>

          <div className="mt-2">
            <span className="inline-block w-44 h-1 rounded-full bg-blue-500"></span>
          </div>
        </div>
        <h3 className="text-lg font-medium">Acuerdo de Licencia de Software</h3>
        <p>
          Este Acuerdo de Licencia de Software ("Acuerdo") se celebra entre{" "}
          <strong>LearnCodePath</strong> ("Licenciante") y la persona o entidad
          que accede o utiliza el software ("Licenciatario"). Al acceder o
          utilizar el software, el Licenciatario acepta quedar vinculado por los
          términos y condiciones establecidos en este Acuerdo.
        </p>
        <br />
        <h3 className="text-lg font-medium">Concesión de Licencia</h3>
        <p>
          1.1 Licencia: Sujeto a los términos y condiciones de este Acuerdo, el
          Licenciante otorga al Licenciatario una licencia no exclusiva, no
          transferible para utilizar el software ("Software") únicamente para
          sus propósitos internos.
          <br /> 1.2 Restricciones: El Licenciatario no deberá, directa o
          indirectamente:
          <br /> a) Modificar, adaptar, traducir, descompilar, desensamblar o
          crear trabajos derivados basados en el Software;
          <br /> b) Alquilar, arrendar, prestar, vender, sublicenciar,
          distribuir o transferir el Software a cualquier tercero;
          <br /> c) Quitar, alterar u ocultar cualquier aviso o etiqueta de
          propiedad del Software;
          <br /> d) Utilizar el Software para cualquier propósito ilegal o no
          autorizado.
        </p>
        <br />
        <h3 className="text-lg font-medium">
          Derechos de Propiedad Intelectual
        </h3>
        <p>
          2.1 Propiedad: El Licenciatario reconoce y acepta que el Software y
          todos los derechos de propiedad intelectual relacionados, incluyendo
          pero no limitados a derechos de autor, marcas comerciales y secretos
          comerciales, son y seguirán siendo propiedad exclusiva del
          Licenciante. <br /> 2.2 Comentarios: El Licenciatario puede
          proporcionar sugerencias, comentarios u otros comentarios con respecto
          al Software al Licenciante. El Licenciatario otorga al Licenciante una
          licencia perpetua, irrevocable, mundial y libre de regalías para
          utilizar, modificar e incorporar dichos comentarios en el Software.
        </p>
        <br />
        <h3 className="text-lg font-medium">
          Garantía y Descargo de Responsabilidad
        </h3>
        <p>
          3.1 Garantía: El Licenciante declara y garantiza que tiene los
          derechos necesarios para otorgar la licencia bajo este Acuerdo. <br />{" "}
          3.2 Descargo de Responsabilidad: EL SOFTWARE SE PROPORCIONA &quot;TAL
          CUAL&quot; SIN NINGUNA GARANTÍA, YA SEA EXPRESA O IMPLÍCITA,
          INCLUYENDO PERO NO LIMITADA A LAS GARANTÍAS DE COMERCIABILIDAD,
          IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EL LICENCIANTE
          NO GARANTIZA QUE EL SOFTWARE SERÁ LIBRE DE ERRORES O INTERRUPCIONES.
        </p>
        <br />
        <h3 className="text-lg font-medium">Limitación de Responsabilidad</h3>
        <p>
          EN NINGÚN CASO EL LICENCIANTE SERÁ RESPONSABLE DE DAÑOS INDIRECTOS,
          INCIDENTALES, ESPECIALES, EJEMPLARES O CONSECUENTES, INCLUIDA PÉRDIDA
          DE BENEFICIOS, DATOS O INTERRUPCIÓN DEL NEGOCIO, DERIVADOS O
          RELACIONADOS CON EL SOFTWARE, INCLUSO SI EL LICENCIANTE HA SIDO
          ADVERTIDO DE LA POSIBILIDAD DE DICHOS DAÑOS.
        </p>
        <br />
        <h3 className="text-lg font-medium">Terminación</h3>
        <p>
          Este Acuerdo permanecerá en vigor hasta su terminación. El Licenciante
          puede dar por terminado este Acuerdo de inmediato mediante
          notificación si el Licenciatario incumple alguna disposición de este
          Acuerdo. Al finalizar, el Licenciatario deberá cesar todo uso del
          Software y destruir todas las copias en su posesión.
        </p>
        <br />
        <h3 className="text-lg font-medium">Ley Aplicable y Jurisdicción</h3>
        <p>
          Este Acuerdo se regirá e interpretará de acuerdo con las leyes de
          España. Cualquier disputa derivada de o relacionada con este Acuerdo
          estará sujeta a la jurisdicción exclusiva de los tribunales de España.
        </p>
      </div>
    </DefaultLayout>
  );
}
