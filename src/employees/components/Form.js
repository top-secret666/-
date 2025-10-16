
function Form(props) {

return (
    <div>
    <h2>{props.title}</h2>
    <form>
        <div>
        <label>Имя:</label>
        <input type="text" placeholder="Введите имя" />
        </div>

        <div>
        <label>Должность:</label>
        <input type="text" placeholder="Введите должность" />
        </div>

        {props.showSalary && (
        <div>
            <label>Зарплата:</label>
            <input type="number" placeholder="Введите зарплату" />
        </div>
        )}

        <button type="submit">{props.buttonText}</button>
    </form>
    </div>
)
}

export default Form
