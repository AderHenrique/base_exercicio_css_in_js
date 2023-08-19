import { FormEvent, useState } from 'react'
import FormVaga, { BtnForm, FormCampo } from './Styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVaga onSubmit={aoEnviarForm}>
      <FormCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnForm type="submit">Pesquisar</BtnForm>
    </FormVaga>
  )
}
export default FormVagas
