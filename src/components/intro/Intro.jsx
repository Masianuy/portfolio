import React from 'react';
import './intro.scss';
import Me from '../../img/me.png';

const intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left_wrapper">
                <h2 className="i-left_intro">Hello, My name is</h2>
                <h2 className="i-left_name">Maria Mikhalova</h2>
                <div className="i-title">
                    <div className="i-title_wrapper">
                        <p className="i-title_item">Reliably</p>
                        <p className="i-title_item">Creativity</p>
                        <p className="i-title_item">Self-motivated</p>
                        <p className="i-title_item">Punctual</p>
                        <p className="i-title_item">Adaptability</p>
                    </div>
                </div>
                <div className="i-discription">
                    <p>I'm looking for a position as a Trainee / Junior Front-end Developer.</p>
                    <p>I have experience with HTML / CSS, a bit JavaScript and GIT.</p>
                    <p>I know the programmes Adobe Photoshop, Adobe Illustrator, Figma.</p>
                    <p>Before the war, I have started a course Full Stack Developer with training center by Freshcode and after our victory, I am going to continue it.</p>
                    <svg width="35px" height="35px" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" className="i-discription-scroll" stroke="black">
                        <g>
                            <path d="M12.4,5.611V0.949c0-0.221-0.179-0.4-0.4-0.4s-0.4,0.179-0.4,0.4v4.662c-2.73,0.208-4.895,2.471-4.895,5.254v7.292
                                c0,2.919,2.375,5.294,5.294,5.294s5.294-2.375,5.294-5.294v-7.292C17.294,8.082,15.13,5.819,12.4,5.611z M16.495,18.156
                                c0,2.479-2.016,4.495-4.495,4.495s-4.495-2.016-4.495-4.495v-7.292C7.505,8.386,9.521,6.37,12,6.37s4.495,2.016,4.495,4.495V18.156
                                z"/>
                            <path d="M12,8.25c-0.502,0-0.91,0.409-0.91,0.911v2.553c0,0.502,0.408,0.91,0.91,0.91s0.91-0.408,0.91-0.91V9.16
                                C12.91,8.658,12.502,8.25,12,8.25z M12.11,11.713c0,0.122-0.221,0.122-0.221,0V9.16c0-0.061,0.05-0.111,0.11-0.111
                                s0.11,0.05,0.11,0.111V11.713z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-right_bg"></div>
            <img src={Me} alt="Me" className="i-right_img"/>
        </div>
    </div>
  )
}

export default intro