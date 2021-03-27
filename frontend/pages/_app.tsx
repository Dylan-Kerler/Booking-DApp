import Head from 'next/head';
import { NavBar } from '../components/layout/NavBar';
import { View } from '../components/layout/View';
import { EthersProvider } from '../context/EthersContext';
import { Theme } from '../context/ThemeContext';
import '../styles/globals.css';

import { RecoilRoot } from 'recoil';
import { Notifications } from '../components/layout/Notifications';

function App({ Component, pageProps }) {
    return (
        <main>
            <RecoilRoot>
                <Theme>
                    <EthersProvider>
                        <Head>
                            <link rel="preconnect" href="https://fonts.gstatic.com"/>
                            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
                        </Head>

                        <View>
                            <NavBar/>
                            <Component {...pageProps} />
                            <Notifications/>
                        </View>
                    </EthersProvider>
                </Theme>
            </RecoilRoot>
        </main>
    );
}

export default App;
