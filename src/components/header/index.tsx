import { useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function Header() {
	const { isConnected } = useAccount()
	const { openConnectModal } = useConnectModal()
	const { openAccountModal } = useAccountModal()
	const { openChainModal } = useChainModal()

	return (
		<>
			<div className="flex justify-between p-2">
				<div className="flex gap-2">
					<a
						className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
						href="https://www.rainbowkit.com/zh-CN"
					>
						rainbow-me
					</a>
					<a
						className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
						href="https://wagmi.sh/"
					>
						wagmi
					</a>
				</div>
				<div className="flex gap-2">
					{isConnected ? (
						<>
							<div
								className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
								onClick={openAccountModal}
							>
								Account
							</div>
							<div
								className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
								onClick={openChainModal}
							>
								Chain
							</div>{' '}
						</>
					) : (
						<div
							className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
							onClick={openConnectModal}
						>
							Connect wallet
						</div>
					)}
				</div>
			</div>
		</>
	)
}
