"use client"

import { useState } from "react"

function Cell({ value, onSave }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(value)

const handleClick = () => {
    setIsEditing(true)
}

const handleBlur = () => {
    setIsEditing(false)
    if (editValue !== value) {
    onSave(editValue)
    }
}

const handleKeyDown = (e) => {
    if (e.key === "Enter") {
    handleBlur()
    }
    if (e.key === "Escape") {
    setEditValue(value)
    setIsEditing(false)
    }
}

if (isEditing) {
    return (
    <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        style={{ width: "100%", padding: "4px", boxSizing: "border-box" }}
    />
    )
}

return (
    <span onClick={handleClick} style={{ cursor: "pointer", display: "block", padding: "4px" }}>
    {value}
    </span>
    )
}

export default Cell
