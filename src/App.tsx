// import { ConnectButton } from '@rainbow-me/rainbowkit'

import Header from './components/header'
import Balance from './components/balance'
import Transfer from './components/transfer'

import './App.css'

function App() {
	return (
		<>
			<Header />
			<div className="flex flex-col">
				<div className="px-2 mt-10 mb-4 text-start text-2xl">
					Also we can use 'ConnectButton' component to connect wallet
				</div>
				{/* <ConnectButton accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }} /> */}

				<div className="my-2 flex gap-2">
					<Balance />
					<Transfer />
				</div>
			</div>
		</>
	)
}

export default App
