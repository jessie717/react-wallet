import { useState } from 'react'
import { useSendTransaction } from 'wagmi'
import { getAccount, getBalance } from 'wagmi/actions'
import { Address, parseEther } from 'viem'
import { Button, Modal } from 'antd'

import config from '../../config/index.tsx'

export default function Transfer() {
	const [balance, setBalance] = useState(0)
	const { sendTransaction } = useSendTransaction()
	const sendTransfer = (_: React.MouseEvent<HTMLElement, MouseEvent>, address: Address) => {
		if (balance > 0) {
			sendTransaction({
				to: address,
				value: parseEther('0.01')
			})
		}
	}

	const [transferModal, setTransferModal] = useState(false)
	const [addresses, setAddresses] = useState<readonly Address[]>()
	const openTransferModal = async () => {
		setTransferModal(true)
		const account = getAccount(config)
		console.log('account :>> ', account)
		const balance = await getBalance(config, { address: account.address as Address })
		setBalance(Number(balance.formatted))
		if (account.addresses) {
			setAddresses(account.addresses)
		}
	}
	const transferModalOkHandler = () => {
		setTransferModal(false)
	}

	return (
		<>
			<div className="flex flex-col">
				<div
					className="px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300"
					onClick={openTransferModal}
				>
					转账
				</div>
				<Modal title="账户列表" open={transferModal} onOk={transferModalOkHandler}>
					<div className="flex flex-col">
						{addresses?.map((address, index) => (
							<div
								key={address}
								className="flex justify-start items-center my-1 py-1 px-2 text-center border rounded shadow"
							>
								<span className="font-bold w-14">{index + 1}、</span>
								<span className="flex grow">{address}</span>
								<Button danger onClick={(e) => sendTransfer(e, address)}>
									转账
								</Button>
							</div>
						))}
					</div>
				</Modal>
			</div>
		</>
	)
}
