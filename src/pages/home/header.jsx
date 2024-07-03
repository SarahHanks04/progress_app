import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


class HeaderPage extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='marquee-underline'>
                    <div className="marquee-content">Break into tech! &#8358;25 million naira worth of scholarship available for the Fellowship Program. Apply Now!</div>
                </div>
                
                <nav>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wlasXGmziQxYZawQ1sx3mVM6k8RMsfmmHgR4cQ8Hljl8zIsxr7UBTyMX4XMhOBN8E-I&usqp=CAU" alt="The Bulb Africa" width={70} height={70}/>
                    
                    <ul className='links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">AboutUs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Info</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>

                    <div className='search-input'>
                        <input type='text' placeholder="Search" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' size='lg'/>
                    </div>

                    <div className='notification'>
                        <FontAwesomeIcon icon={faBell} size='lg' className='bell'/>
                        <button>Sign Up</button>
                    </div>

                </nav>

                <div className='content'>
                    <div className='text'>
                        <h1>Work From home <br />
                            & Earn Money Online.
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat magnam dolorum, <br />suscipit quasi aspernatur, dignissimos repudiandae quos impedit totam aliquam, minus repellat voluptate <br /> adipisci vero! Nam similique laborum maiores quia totam? Alias possimus ad fugit repudiandae consectetur <br /> natus asperiores distinctio velit, laboriosam aliquid nobis libero, optio ipsa, mollitia dolores.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="video">
                        <iframe width="480" height="300" src="https://www.youtube.com/embed/FSTzqzwYfF0?si=IGQPlTvJqLIMRrc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default HeaderPage;