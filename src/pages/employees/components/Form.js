import { useState } from "react"

function Form({ onAdd }) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name.trim() && price.trim()) {
            onAdd({ name, price })
            setName("")
            setPrice("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Добавить новый заказ</h3>
            <input
                type="text"
                placeholder="Название ресторана"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Средний чек (например: 500 ₽)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" className="btn-primary">
                Добавить
            </button>
        </form>
    )
}

export default Form