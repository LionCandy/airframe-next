import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';

import avatarImg from '../../../images/avatars/avatar-1.jpg';

const SidebarTopA = () => (
    <React.Fragment>
        { /* START Sidebar TOP: A */ }
        <Sidebar.Section>
            { /* START Logo */ }
            <Tools.DefaultOnly>
                <div className="mb-4">
                    <Link to="/" className="h4 fw-600 text-primary">
                        react.bs4
                    </Link>
                </div>
            </Tools.DefaultOnly>
            { /* END Logo */ }
            { /* START Avatar */ }
            <Link to="/">
                <Tools.SlimProps
                    slimProps={{ size: 'md' }}
                >
                    <Avatar.Image
                        size="lg"
                        src={ avatarImg }
                        addOns={[
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="success"
                                key="avatar-icon-fg"
                            />
                        ]}
                    />
                </Tools.SlimProps>
            </Link>
            { /* END Avatar */ }
            <br />
            { /* User Info (non-slim only) */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0">
                        { faker.name.firstName() } { faker.name.lastName() }
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem header>
                        { faker.name.firstName() } { faker.name.lastName() }
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/apps/profile-details">
                        My Profile
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/settings-edit">
                        Settings
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/billing-edit">
                        Billings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/pages/login">
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        Sign Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <br />
                <span className="small">
                    { faker.name.jobTitle() }
                </span>
            </Tools.DefaultOnly>
        </Sidebar.Section>
        { /* END Sidebar TOP: A */ }
    </React.Fragment>
)

export { SidebarTopA };
