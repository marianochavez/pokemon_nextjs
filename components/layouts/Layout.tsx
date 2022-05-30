import { FC, ReactElement, ReactNode } from "react"
import Head from "next/head"
import React from 'react';
import { Navbar } from "../ui";

type LayoutProps = {
  children: ReactNode;
  title?: string;	
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Mariano Chavez"/>
            <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px',
        }}>
            {children}
        </main>
    </>
  )
}
