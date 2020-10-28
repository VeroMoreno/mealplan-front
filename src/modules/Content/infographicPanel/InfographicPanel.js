import React from 'react'
import { BottomPanel } from './infographicPanel.style';

const InfographicPanel = props => {
    return(
        <BottomPanel className="infographics">
            <div className="expandable">
                <div className="infographic">Infographic</div>
                <div className="infographic">Infographic</div>
            </div>
        </BottomPanel>
    );
}

export default InfographicPanel;