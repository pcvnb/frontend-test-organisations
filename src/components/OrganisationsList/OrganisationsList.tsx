import React from 'react';
import {Organisation} from "../MainPage/MainPage";
import OrganisationsItem from "../OrganisationsItem/OrganisationsItem";
import cls from './OrganisationsList.module.css'

interface IProps {
    orgs: Organisation[]
}
const OrganisationsList = ({orgs}: IProps) => {
    return (
            <ul className={cls.list}>
                {orgs.map(org => <OrganisationsItem org={org} key={org.company_id}/> )}
            </ul>
    );
};

export default OrganisationsList;
