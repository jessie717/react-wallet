import { ConnectButton } from '@rainbow-me/rainbowkit'

import Header from './components/header'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<div className="flex flex-col">
				<div className="px-2 mt-10 mb-4 text-start text-2xl">
					Also we can use 'ConnectButton' component to connect wallet
				</div>
				<ConnectButton accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }} />
			</div>
		</>
	)
}

export default App
