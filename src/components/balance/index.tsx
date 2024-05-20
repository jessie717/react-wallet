// import React from 'react'
import { useBalance } from 'wagmi'

export default function Balance() {
	const result = useBalance({
		address: '0x8e087455726de92317889d0e70600ec3'
	})
	const getAccountBalance = () => {
		console.log('result', result)
	}

	return (
		<>
			<div>
				<div
					className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
					onClick={getAccountBalance}
				>
					查询余额
				</div>
			</div>
		</>
	)
}
