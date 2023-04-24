import { useState } from "react";
import { validateFormFind } from "../products/helpers/ValidateFormFiind";

export const useForm = (estadoInicial = '') => {
  
    const [formulario, setFormulario] = useState(estadoInicial);
    const [validate, setValidate] = useState({});

  
    const handlerSubmit = (ev, formType, getText) => {

      ev.preventDefault();

      let validateOk;

      const data = serializeForm(ev.target);

      if (formType == 'find') {

        validateOk = validateFormFind(data, setValidate);
        if (!validateOk) return
  
        getText(data.findText);
    } 
  }

  const handlerChange = ({ target }) => {

    setFormulario({
        ...formulario,
        [target.name]: target.value
    });

  };
    return{
        handlerChange,
        validate,
        handlerSubmit
    };


};