import React from 'react'
import { RouteComponentProps, useNavigate } from '@reach/router'
import { observer } from 'mobx-react'

import './style.scss'
import Button from '../../components/Button/Button'

interface HomeProps extends RouteComponentProps {}

export default observer((props: HomeProps) => {
    const navigate = useNavigate();
    return (
        <div className='page home'>
            <div className="home-app_bar">
                <div className="app-bar-infos">
                    <Button className="app-bar-btn btn-success">Success</Button>                
                    <Button className="app-bar-btn btn-credit">Credits</Button>                
                </div>
                <div className="socials">
                    <Button className="social-btn gmail-btn">
                        Gmail
                    </Button>    
                </div>
            </div>

            <div className="content">
                <div className="play-zone content-box">
                    <div className="left-part">
                        <div className="game-title">
                            <div className="game-title-motorsport">MOTOSPORT</div>
                            <div className="game-title-manager">MANAGER</div>
                        </div>
                        <hr className="separator" />
                        <div className="subtitle">Un monde de sport automobile</div>
                        <Button className='btn-play'
                            onClick={() => navigate('testday')}
                        >JOUER</Button>
                    </div>
                    <div className="right-part" />
                </div>

                <div className="extras">
                    <div className="race content-box">
                        <div className="extras-title">
                            COURSE UNIQUE
                        </div>
                        <div className="extras-sub-title">
                            La course que vous voulez quand vous voulez
                        </div>
                        <Button className='btn-extras'>Course unique</Button>
                    </div>
                    <div className="settings content-box">
                        <div className="extras-title">
                            PREFERENCES
                        </div>
                        <div className="extras-sub-title">
                            Peaufinez votre jeu
                        </div>
                        <Button className='btn-extras'>Modifier</Button>
                    </div>
                </div>
            </div>
        </div>
    )
})