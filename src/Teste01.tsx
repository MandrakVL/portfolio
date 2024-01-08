import styled from 'styled-components'

type BlocoProps = {
  corPrincipal?: string
}

const Bloco = styled.div<BlocoProps>`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: ${(props) => props.corPrincipal || 'green'};
`

function Teste01() {
  return (
    <>
      <Bloco corPrincipal="blue"></Bloco>
      <Bloco></Bloco>
      <Bloco corPrincipal="red"></Bloco>
    </>
  )
}

export default Teste01
