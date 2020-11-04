import React, { useCallback } from 'react'
import { TopPanel } from './checksortpanel.style';
import Button from './../../../components/Button/Button';

const CheckSortPanel = props => {

    const showList = useCallback(
        () => {
            console.log('Mostrar la lista');
        },[], // Le dice a React que memorice independientemente de los argumentos.
    );

    const sortMenu = useCallback(
        () => {
            console.log('Ordenar el menu');
        },[],
    );

    return(
        <TopPanel className="sortcheckPanel">
            <Button
            disabled
                text="Check list"
                onClick={showList}
            />
            <Button
                text="Sort"
                onClick={sortMenu}
            />
        </TopPanel>
    );
}

export default CheckSortPanel;