import React from 'react';

import {
    EmptyLayout,
    Link
} from './../../components';

import { HeaderAuth } from "../../features/Pages/HeaderAuth";
import { FooterAuth } from "../../features/Pages/FooterAuth";

const Danger = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="An Error has Occurred"
                icon="close"
                iconClassName="text-danger"
            />
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="text-center mb-5">
                <Link to="/">
                    <i className="fa fa-angle-left mr-2"></i>Correct Errors
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Danger;