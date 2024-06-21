import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github(2).svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='aling-item-center'>
                    <MailchimpForm></MailchimpForm>
                    <Col size={12} sm={6}>
                       {/*LOGO*/}
                    </Col>
                    <Col  size={12} sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/nicolas-ruiz-037aa5222/' ><img src={navIcon1} alt=''></img></a>
                            <a href='https://github.com/IamNewInThis'><img src={navIcon2} alt=''></img></a>
                            <a href='https://www.instagram.com/_.takeeko/'><img src={navIcon3} alt=''></img></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer