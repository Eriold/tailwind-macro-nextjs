import { Layout } from 'antd'

const { Footer } = Layout
const FooterUI = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: '#1e293b',
        color: 'white',
        bottom: '0px',
        position: 'absolute',
        width: '100%'
      }}
    >
      @Daniel Montoya
    </Footer>
  )
}

export default FooterUI
