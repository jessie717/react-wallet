import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import config from './config/index.tsx'
import App from './App.tsx'
import Disclaimer from './components/disclaimer/index.tsx'

import '@rainbow-me/rainbowkit/styles.css'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				<RainbowKitProvider
					modalSize="compact"
					showRecentTransactions={true}
					appInfo={{
						appName: 'react wallet',
						disclaimer: Disclaimer
					}}
				>
					<App />
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	</React.StrictMode>
)
