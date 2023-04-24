import { useForm } from "../../hooks/useForm";


export const Search = ({ getText }) => {

    const {
        handlerChange,
        handlerSubmit,
        validate } = useForm('');

    return (
        <section>
            <h2>Search</h2>

            <form onSubmit={(ev) => handlerSubmit(ev, 'find', null, null, getText)}>
                <label
                    htmlFor="findText"
                >haz tu busqueda
                </label>

                <input
                    type="text"
                    name="findText"
                    id="findText"
                    placeholder="texto"
                    onChange={handlerChange}
                />
                {
                    (validate.findText) &&
                    <p>{validate.findText}</p>
                }

                <input
                    type="submit"
                    value="Buscar"
                />

            </form>

        </section>
    )
}