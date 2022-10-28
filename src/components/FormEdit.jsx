import React from 'react'

function FormEdit({
    inputBandera,
    onChageInputBandera,
    inputName,
    onChageInputName,
    inputDate,
    onChageInputDate,
}) {
    return (
        <div>
            <h3>form</h3>
            <form>
                <div>
                    <input
                        type="number"
                        onChange={onChageInputBandera}
                        value={inputBandera}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={onChageInputName}
                        value={inputName}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        onChange={onChageInputDate}
                        value={inputDate}
                    />
                </div>
            </form>
        </div>
    )
}

export default FormEdit
