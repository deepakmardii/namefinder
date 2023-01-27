import React from 'react';
import './NameCard.css';

const nameCheapUrl =
    'https://in.godaddy.com/domainsearch/find?checkAvail=1&tmskey=1dom_03_buydomain&domainToCheck=';

const NameCard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${nameCheapUrl}${suggestedName}`}
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;