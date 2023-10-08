import '../styles/global.css'

import MainContainer from '@/components/layout/MainContainer'

function MyApp({ Component, pageProps }: any) {
    return (
        <MainContainer>
            <Component {...pageProps} />
        </MainContainer>
    )
    
}

export default MyApp