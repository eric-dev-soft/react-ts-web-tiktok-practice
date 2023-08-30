import styled from 'styled-components'

type GlobalStylesProps = {
  children: React.ReactNode
}

const GlobalStylesWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap');

  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`

const GlobalStyles = ({ children }: GlobalStylesProps) => {
  return <GlobalStylesWrapper>{children}</GlobalStylesWrapper>
}

export default GlobalStyles
