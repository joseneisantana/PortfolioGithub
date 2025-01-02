import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`

*{
  margin:0;
  padding:0;

}

`
export default EstiloGlobal

export const Container = styled.div`
max-width:1024px;
width:100%
margin:0 auto;
width:100%
grid-template-columns: 128px auto;

img{
max-width:100%;
}

 `
