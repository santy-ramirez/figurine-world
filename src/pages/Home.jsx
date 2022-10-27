import { createRef, useState } from "react";
import Coper from "../components/Croper";
import Figurite from "../components/Figurite";
import Pdf from "react-to-pdf";
import FormEdit from "../components/FormEdit";
const ref = createRef();


export default function Home() {
  const [inputBandera, setInputBandera] = useState(2005);
  const [inputName, setInputName] = useState("LEONEL MESSI");
  const [inputDate, setInputDate] = useState("");

  const onChageInputBandera = (e) => {
    console.log(e.target.value);
    setInputBandera(e.target.value);
  };
  const onChageInputName = (e) => {
    setInputName(e.target.value);
  };
  const onChageInputDate = (e) => {
    setInputDate(e.target.value);
  };

  return (
    <div className="wraper_desboardAndFigurite">
      <div>
        <h1>Edit</h1>
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
      <div>
        <div ref={ref}>
          <h1>figurite</h1>
          <Figurite
            inputBandera={inputBandera}
            inputName={inputName}
            inputDate={inputDate}
          />
        </div>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button className="button_descarga" onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
      </div>
    </div>
  );
}
