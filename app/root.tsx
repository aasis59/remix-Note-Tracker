import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// eslint-disable-next-line import/no-unresolved
import main from '~/styles/main.css';
import MainNavigation from  "~/component/MainNavigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
      </head>
      <body>
        <MainNavigation/>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
export function links(){
  return[{rel:'stylesheet',href:main}]
}