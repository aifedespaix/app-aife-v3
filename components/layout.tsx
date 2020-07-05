import Link from 'next/link';
import Head from 'next/head';
import Header from './header';

export default function Layout(
  {
    children,
    title = 'This is the default title',
  }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Header/>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
}
