// import React from 'react'
import { useBalance } from 'wagmi'

export default function Balance() {
	const result = useBalance({
		address: '0xC44D0bC59eDF90d13988c3820953ACeA048BcEd2'
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
