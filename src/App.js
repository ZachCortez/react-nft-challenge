import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [punkListData, setPunkListData] = useState([])

    useEffect(() => {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0xD7B6aB09eb1F8598313E61cbAE482982CdC2e2C7order_direction=asc'
          )
          console.log(openseaData.data.assets)
      }

    return getMyNfts()
    }, [])

  return (
    <div className='app'>
      <Header />
      <CollectionCard
      id={0}
      name={'SB Shades'}
      traits={[{'value':7}]}
      image='https://nftlabs.mypinata.cloud/ipfs/bafkreidqv7fjr7w4ovjsc5v7muld5wxxakpk63ke4p7v6hvggti3ogqgoe'/>
    </div>
  );
}

export default App;







