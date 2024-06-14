import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Row, Col } from "antd";
import SalesDesign from '../SalesDesign/SalesDesign';
const Description = () => {

    React.useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div className="py-5 px-lg-5 px-md-5 px-sm-0">
            <Row>
                <Col xs={24} sm={24} md={8} lg={4} className="toc-container px-3 my-3 h-32">
                <h1 className="text-xl pb-5">Description</h1>
                    <Link activeClass="active" to="section1" spy={true} smooth={true} duration={50}>
                        Overview
                    </Link>
                    <br />
                    <br />
                    <Link activeClass="active" to="section2" spy={true} smooth={true} duration={50}>
                    Key features
                    </Link>
                    <br />
                    <br />
                    <Link activeClass="active" to="section3" spy={true} smooth={true} duration={50}>
                    Token utility
                    </Link>
                    <br />
                    <br />
                    <Link activeClass="active" to="section4" spy={true} smooth={true} duration={50}>
                    Team
                    </Link>
                    <br />
                    <br />
                    <Link activeClass="active" to="section5" spy={true} smooth={true} duration={50}>
                    Overview
                    </Link>
                    <br />
                    <br />
                    <Link activeClass="active" to="section6" spy={true} smooth={true} duration={50}>
                    Key features
                    </Link>
                </Col>
                <Col xs={24} sm={24} md={16} lg={11} className="content px-3 my-3">
                    <Element name="section1" className="element ">
                    <h1 className="text-xl pb-10"> Overview</h1>
                    <ul className='pl-4 list-disc'>
                        <li className='text-base text-[#A1A1A1]'>$COOKIE, powered by the Cookie DAO, is the utility token within the Cookie3 ecosystem.</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>Cookie3 is the first MarketingFi protocol capturing the $650B digital marketing value.</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>The Cookie3 Analytics platform has been live for 10+ months, is used by 170+ dapps, and is already generating revenue.</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>Over 600M wallets processed.</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>Cookie3 is a multichain solution on 16 chains, including Ethereum, Polygon, Arbitrum, Avax, BNB Chain, and Base.</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>12,5% of $COOKIE at TGE, 1 month cliff</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>$COOKIE price is set at $0.028.</li>
                    </ul>
                    </Element>
                    <Element name="section2" className="element pt-16">
                    <h1 className="text-xl pb-10"> Key features</h1>
                    <ul className='pl-4 list-disc'>
                        <li className='text-base text-[#A1A1A1]'>$COOKIE, powered by the Cookie DAO, is the utility token within the Cookie3 ecosystem.</li>
                        <br />
                        <li className='text-base text-[#A1A1A1]'>Cookie3 is the first MarketingFi protocol capturing the $650B digital marketing value.</li>
                       
                    </ul>
                    </Element>
                </Col>
                <Col xs={24} sm={24} md={16} lg={9} className="img-container px-3 my-3">
                    <div className="">
                        <h1 className="text-xl pb-10">Sales Design</h1>
                        <SalesDesign />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Description