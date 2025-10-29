import { useState } from "react"

function Cell({ value, onSave }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(value)

    const handleChange = (e) => {
    setEditValue(e.target.value)
    }

    const handleSave = () => {
    onSave(editValue)
    setIsEditing(false)
    }

    const handleCancel = () => {
    setEditValue(value)
    setIsEditing(false)
    }

    if (isEditing) {
    return (
        <td className="editable-cell editing">
        <input type="text" value={editValue} onChange={handleChange} className="cell-input" autoFocus />
        <button onClick={handleSave} className="btn-save">
            ✓
        </button>
        <button onClick={handleCancel} className="btn-cancel">
            ✗
        </button>
        </td>
    )
    }

    return (
    <td className="editable-cell" onClick={() => setIsEditing(true)}>
        {value}
    </td>
    )
}

export default Cell