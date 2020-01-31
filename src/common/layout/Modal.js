import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import ReactDom from 'react-dom';
import Store from '../../store';
import styled from 'styled-components';

const ModalElement = styled.div`
    position: fixed;
    height: ${props => props.ModalStyles.height};
    top: ${props => props.ModalStyles.top};
    bottom: ${props => props.ModalStyles.bottom};
    left: ${props => props.ModalStyles.left};
    right: ${props => props.ModalStyles.right};
    width: ${props => props.ModalStyles.width};
    background-color: ${props => props.ModalStyles.overlay};
    display: flex;
    > div {
        margin: auto;
    }
`;
class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'modal';
        document.body.appendChild(this.modalTarget);
        this._render();
    };

    componentDidUpdate() {
        this._render();
    };

    componentWillUnmount() {
        ReactDom.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    };

    _render() {
        let {ModalStyles, ExternalClick} = this.props;
        ReactDom.render(
            <Provider store={Store}>
                <ModalElement ModalStyles={ModalStyles} onClick={() => ExternalClick()}>
                    <div onClick={e => e.stopPropagation()}>
                        {this.props.children}
                    </div>
                </ModalElement>
            </Provider>
            ,
            this.modalTarget)
    }

    render() {
        return <noscript/>
    }
}

Modal.propTypes = {
    ModalStyles: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;
