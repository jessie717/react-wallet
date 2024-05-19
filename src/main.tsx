import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from 'viem/chains'
import { argentWallet, ledgerWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css'
import App from './App.tsx'
import './index.css'
import Disclaimer from './components/disclaimer/index.tsx'

const { wallets } = getDefaultWallets()

const config = getDefaultConfig({
	appName: 'react-wallet',
	projectId: '8e087455726de92317889d0e70600ec3', // TODO:
	chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
	wallets: [
		...wallets,
		{
			groupName: 'Other',
			wallets: [argentWallet, trustWallet, ledgerWallet]
		}
	]
})

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
