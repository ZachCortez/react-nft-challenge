import React, { useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({ selectedPunk, punkListData}) => {

    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    },[punkListData, selectedPunk])

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img
                        className='selectedPunk'
                        src={activePunk.image_original_url}
                        alt=''
                    />
                    </div>
                </div>

                <div className='punkDetails' style={{ color: '#fff'}}>
                    <div className='title'>
                        {activePunk.name}
                    </div>
                        <span className='itemNumber'>
                            •#{activePunk.token_id}
                        </span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img
                        src='https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/s150x150/136667205_251176016352530_3497120234463796089_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=5N8kudMLxpgAX8S6xIO&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-lLNGWlFHoRxITjB2fG8uZQkb6RXWsGtxqcWEnCT3ASQ&oe=61EC5F8D&_nc_sid=7bff83'
                        alt=''
                        />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>0xD7B6aB09eb1F8598313E61cbAE482982CdC2e2C7</div>
                            <div className='ownerHandle'>@SaturnBay</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
