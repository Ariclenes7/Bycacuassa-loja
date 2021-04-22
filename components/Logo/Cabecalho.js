/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import Link from 'next/link';

const LogoCabecalho = () => (
    <div className="flex-2 flex flex-start">
        <Link href="/">
            <img src="/static/logo.png" className="logo" width="100%" />
        </Link>
    </div>
)

export default LogoCabecalho;