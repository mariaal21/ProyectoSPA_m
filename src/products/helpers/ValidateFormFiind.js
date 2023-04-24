export const validateFormFind = (data, setValidate) => {

    let findText, rslt = true;

    if (data.findText == '') {
        rslt = false
        findText = 'Haz tu busqueda'
    }

    setValidate({ findText })

    return rslt;
};