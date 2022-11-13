import { createRef, useState } from 'react'
import Coper from './Croper'
import Pdf from 'react-to-pdf'

import Figurite from './Figurite'
import FormEdit from './FormEdit'
const ref = createRef()
function AppFigurite() {
    const [inputBandera, setInputBandera] = useState(2005)
    const [inputName, setInputName] = useState('LEONEL MESSI')
    const [inputDate, setInputDate] = useState('')

    const onChageInputBandera = (e) => {
        console.log(e.target.value)
        setInputBandera(e.target.value)
    }
    const onChageInputName = (e) => {
        setInputName(e.target.value)
    }
    const onChageInputDate = (e) => {
        setInputDate(e.target.value)
    }
    return (
        <div className="wrapper_conteiner">
            <div className="wraper_desboardAndFigurite">
                <div className="edit__form">
                    <h1>Edit Figurite</h1>
                    <Coper />
                    <FormEdit
                        inputDate={inputDate}
                        onChageInputDate={onChageInputDate}
                        inputBandera={inputBandera}
                        onChageInputBandera={onChageInputBandera}
                        inputName={inputName}
                        onChageInputName={onChageInputName}
                    />
                </div>
                <div className="figurita">
                    <div ref={ref}>
                        <h1>figurite</h1>
                        <Figurite
                            inputBandera={inputBandera}
                            inputName={inputName}
                            inputDate={inputDate}
                        />
                    </div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => (
                            <button className="button_descarga" onClick={toPdf}>
                                Generate Pdf
                            </button>
                        )}
                    </Pdf>
                </div>
            </div>
        </div>
    )
}

export default AppFigurite
