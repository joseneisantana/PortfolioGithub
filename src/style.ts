import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`

*{
  margin:0px;
  padding:0px;
  list-style:none;
  font-family: "Inter", serif;

 
}
body{
  padding-top: 80px;

    @midi (max-width: 768px) {
      padding-top: 16px;
  }
}
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @midi (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`
