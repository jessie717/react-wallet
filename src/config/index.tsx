import { arbitrum, base, mainnet, optimism, polygon, sepolia } from 'viem/chains'
import { getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { argentWallet, ledgerWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets'

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

export default config
