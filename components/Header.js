import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { Navigation, LanguageSwitcher } from 'components'

const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => (
  <Fragment>
    <header className="site-header">
      <NextLink href={isMyMainLanguage ? '/' : `/${currentLang}`} passHref prefetch>
        <a><div className="logo">Welcome</div></a>
      </NextLink>
      <nav>
        <ul>  
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} />
        </ul>
      </nav>
    </header>
  </Fragment>
);

export default Header;