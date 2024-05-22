import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';


import './main.css'
import './section1.css'
import './section2.css'
import './section3.css'
import './section4.css'



import { ThemeBtns } from '../themeBtns/themeBtns';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/theme/selectors';


export const Main = () => {

    const { theme } = useSelector(selectTheme)

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);


    const { ref: sect1, inView: insect1 } = useInView({
        threshold: 0.5,
    });
    const { ref: sect2, inView: insect2 } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (insect1) {
            setIsVisible(true);
        }
    }, [insect1]);

    useEffect(() => {
        if (insect2) {
            setIsVisible2(true);
        }
    }, [insect2]);



    const [animatedProps, set] = useSpring(() => ({
        opacity: 1,
        transform: 'translateX(0px)',
        from: { transform: 'translateX(-100%)', opacity: 0 },
        config: { duration: 1000 },
        delay: 1000
    }));
    const [animatedProps2, set2] = useSpring(() => ({
        // width: '100%',
        opacity: 1,
        transform: 'translateX(0px)',
        from: { transform: 'translateX(100%)', opacity: 0 },
        config: { duration: 1000 },
        delay: 1400
    }));
    const [animatedProps3, set3] = useSpring(() => ({
        opacity: 1,
        transform: 'translateX(0px)',
        from: { transform: 'translateX(-100%)', opacity: 0 },
        config: { duration: 1000 },
        delay: 1800
    }));

    const handleScroll = () => {
        const scrollY = window.scrollY;
        set({
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 300
        });
        set2({
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 300
        });
        set3({
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 300
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="main-wrapper">
            <ThemeBtns />
            <div className='section1'>
                <div className={theme === 'dark' ? 'backgr' : 'backgr backgr2'}></div>
                {/* <img className='imgsect1' src='https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> */}
                {/* <h1>Параллакс эффект</h1>
  <small>Только CSS, никакого JavaScript</small> */}
                <div className='section-container container1'>
                    <div className="lolz">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 256 256" fill="none">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#16bcc8" />
                                    <stop offset="100%" stopColor="#9016c8" />
                                </linearGradient>
                                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#2f00ff" />
                                    <stop offset="100%" stopColor="#ffffff" />
                                </linearGradient>
                            </defs>
                            <g clipPath="url(#clip0_123_378)">
                                <path fill="url(#grad2)" fillRule="evenodd" clipRule="evenodd"
                                    d="M70.1504 207.392C91.8146 224.992 116.842 235.022 143.533 235.022C183.225 235.022 219.257 212.775 245.995 176.542C234.706 161.247 221.764 148.436 207.575 138.751L184.794 150.124C189.69 157.741 192.542 166.809 192.542 176.542C192.542 203.577 170.604 225.491 143.533 225.491C122.499 225.491 104.566 212.252 97.6139 193.666L70.1504 207.38V207.392ZM126.67 179.168C127.216 182.721 128.88 186.025 131.459 188.604C134.656 191.8 139.005 193.595 143.533 193.583C152.957 193.583 160.598 185.953 160.598 176.542C160.598 171.919 158.756 167.724 155.761 164.646L126.682 179.168H126.67Z"
                                />
                                <path fill="url(#grad1)"
                                    d="M76.3528 176.16L242.405 96.3367L205.91 20.4229L187.062 87.507L164.412 40.3758L145.552 107.46L122.902 60.3287L104.042 127.413L81.3916 80.2816L62.5319 147.366L39.8814 100.235L9.4707 208.318L50.9809 188.365L76.3528 176.172V176.16Z"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_123_378">
                                    <rect width="236.512" height="214.598" fill="white" transform="translate(9.4707 20.4229)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="title-wrapper">
                        <div className='title parallax'>
                            <animated.div style={animatedProps}>
                                <span className='titlespan parallax-layer layer1'>Frontend</span>
                            </animated.div>
                            <animated.div style={animatedProps2}>
                                <span className='spanDev parallax-layer layer2'>development</span>
                            </animated.div>
                            <animated.div style={animatedProps3}>
                                <span className='name parallax-layer layer3'>by<span className='spanname'>NikitaFreeze</span></span>
                            </animated.div>
                        </div>
                    </div>
                </div>

            </div>


            <div className={theme === 'dark' ? 'section2' : 'section2 section2Theme'} ref={sect1}>
                <div className='section-container container2'>
                    <div className={!isVisible ? 'titlesect2' : 'titlesect2 visible2'}>Проекты</div>
                    <div className={theme === 'dark' ? 'windowWrap' : 'windowWrap windowWrapTheme'}>
                        <div className="window">
                            <img className={!isVisible ? 'imgwind' : 'imgwind visible'} src='https://i.ibb.co/kMM39b7/img1.png' />
                            <img className={!isVisible ? 'imgwind' : 'imgwind visible'} src='https://i.ibb.co/bzYfKC8/img2.png' />
                            <img className={!isVisible ? 'imgwind' : 'imgwind visible'} src='https://i.ibb.co/nwTW8gL/img4.png' />
                            <img className={!isVisible ? 'imgwind' : 'imgwind visible'} src='https://i.ibb.co/ryFHbwr/img3.png' />

                        </div>
                    </div>
                </div>

            </div>
            <div className="section3 " ref={sect2}>
            <div className={theme === 'dark' ? 'backgr' : 'backgr backgr2'}></div>

                {/* <div className='bckgr2'></div> */}
                {/* <img className='imgsect3' src='https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> */}
                <div className='section-container container3'>
                    <div className="stackWrap">
                        <div className={!isVisible2 ? "list" : 'list visibleLI2'}>
                            <div className={!isVisible2 ? "listIem" : 'listIem visibleLI'}>
                                <span className="spanlist">1</span>
                                <span className='stackName s1'>HTML</span>
                            </div>
                            <div className={!isVisible2 ? "listIem" : 'listIem visibleLI'}>
                                <span className="spanlist">2</span>
                                <span className='stackName s2'>CSS, <span className='s3'>SCSS</span></span>

                            </div>
                            <div className={!isVisible2 ? "listIem" : 'listIem visibleLI'}>
                                <span className="spanlist">3</span>
                                <span className='stackName s4'>JavaScript, <span className='s5'>NodeJS</span></span>

                            </div>
                            <div className={!isVisible2 ? "listIem" : 'listIem visibleLI'}>
                                <span className="spanlist">4</span>
                                <span className='stackName s8'>TypeScript</span>

                            </div>
                            <div className={!isVisible2 ? "listIem" : 'listIem visibleLI'}>
                                <span className="spanlist">5</span>
                                <span className='stackName s6'>React, <span className='s7'>React-Redux</span></span>

                            </div>
                            <div className={!isVisible2 ? "listIem" : 'listIem visibleLI'}>
                                <span className="spanlist">6</span>
                                <span className='stackName s9'>Bootstrap</span>

                            </div>

                        </div>
                    </div>
                    <div className="stackWrap">
                        <div className={!isVisible ? 'titlesect3' : 'titlesect3'}>Мой стэк</div>
                        <div className={!isVisible2 ? "icnw" : 'icnw visicnw'}>
                            <div className="imgW i1" ><img className="icon ic1" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="" /></div>
                            <div className="imgW i2" ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" /></div>
                            <div className="imgW i3" ><img className="icon" src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png" alt="" /></div>
                            <div className="imgW i4" ><img className="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" /></div>
                            <div className="imgW i5" ><img className="icon" style={{ borderRadius: '100%' }} src="https://banner2.cleanpng.com/20191103/btz/transparent-js-icon-logo-icon-react-icon-5dbea1da3071a5.5168401015727743621985.jpg" alt="" /></div>
                            <div className="imgW i6" ><img className="icon" style={{ borderRadius: '100%' }} src="https://miro.medium.com/v2/resize:fit:600/1*ceLhTSGkPuN_5p5hIm6CtA.jpeg" alt="" /></div>
                            <div className="imgW i7" ><img className="icon" style={{ borderRadius: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKLph-3Hm6Pi8-mSBxs9mp2ozs8_G-RMaTg3Yh27W4w&s" alt="" /></div>
                            <div className="imgW i8" ><img className="icon" src="https://dh.library.virginia.edu/system/files/styles/large/private/bootstrap-stack.png?itok=b_S8F9nO" alt="" /></div>
                            <div className="imgW i9" ><img className="icon" src="https://static-00.iconduck.com/assets.00/html5-icon-2018x2048-st7q7lm6.png" alt="" /></div>

                        </div>
                    </div>



                </div>

            </div>
            <div className="section4">

            </div>
        </div>

    )
}