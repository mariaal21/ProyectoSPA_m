import { useState } from "react";
import { validateFormFind } from "../products/helpers/ValidateFormFiind";

export const useForm = (estadoInicial = '') => {
  
    const [formulario, setFormulario] = useState(estadoInicial);
    const [validate, setValidate] = useState({});

  
    const handlerSubmit = (ev, formType) => {

      ev.preventDefault();

      let validateOk;
   

      const data = (ev.target);

      if (data) {

        validateOk = validateFormFind(data, setValidate);
        if (!validateOk) return 
  
        findText(data.findText);
        // data.search
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