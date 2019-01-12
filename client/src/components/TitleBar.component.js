/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Valentina Scott</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Chase Boatwright
                </span>
                <div className="wedding-date">5<sup>th</sup> OCTOBER, 2019</div>
            </header>
        );
    }
}

export default TitleBar;
