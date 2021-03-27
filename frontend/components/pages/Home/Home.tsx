import Head from 'next/head';
import { BookingInput } from './BookingInput/BookingInput';

export const Home = () => {
    return (
        <div>
            <Head>
                <title>Bookio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <BookingInput/>
            </div>
        </div>
    );
}