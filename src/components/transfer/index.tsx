import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

export default function Transfer() {
	const { sendTransaction } = useSendTransaction()
	return (
		<>
			<div className="flex">
				<div
					className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
					onClick={() =>
						sendTransaction({
							to: '0x',
							value: parseEther('0.01')
						})
					}
				>
					转账
				</div>
			</div>
		</>
	)
}
