/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */

import Head from './Head';
import Style from './Style';

const Layout = ({ children, title, description, url, image, pagSeguro }) => (
    <div>
        <Head
            title={title}
            description={description}
            url={url}
            ogImage={image}
            pagSeguro={pagSeguro}></Head>
        <Style />
        <div className="body">
            {children}
        </div>
        <footer>
            <div className="flex flex-center">
                <small>
                    &copy; By Cacuassa - Beleza & Saúde
                </small>
            </div>
        </footer>
    </div>
);

export default Layout;