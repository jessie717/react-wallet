import { useState } from 'react'
import { useSendTransaction } from 'wagmi'
import { estimateGas, getAccount, getBalance, getGasPrice } from 'wagmi/actions'
import { Address, formatEther, parseEther } from 'viem'
import { Button, Modal, Spin, message } from 'antd'
// import { getGasPrice } from '@wagmi/core'

import config from '../../config/index.tsx'

const [messageApi, contextHolder] = message.useMessage()

export default function Transfer() {
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
	// 转账 0.01ETH TODO: 手动输入转账金额
	const [balance, setBalance] = useState(0)
	const { sendTransaction } = useSendTransaction()
	const sendTransfer = async (_: React.MouseEvent<HTMLElement, MouseEvent>, address: Address) => {
		const gasPrice = await getGasPrice(config)
		const gas = await estimateGas(config, {
			to: address,
			value: parseEther('0.01')
		})
		const gasService = Number(formatEther(gas * gasPrice))
		if (balance - gasService > 0.01) {
			const result = sendTransaction(
				{
					to: address,
					value: parseEther('0.01')
				},
				{
					onSuccess: (res) => {
						console.log('res', res)
						messageApi.open({
							type: 'success',
							content: `Transaction Hash: ${res}`
						})
					}
				}
			)
			console.log('result', result)
		}
	}
	//
	const transferModalHandler = () => {
		setBalance(0)
		setAddresses([])
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
				<Modal title="账户列表" open={transferModal} onOk={transferModalHandler} onCancel={transferModalHandler}>
					<div className="flex flex-col">
						{addresses ? (
							addresses?.map((address, index) => (
								<div
									key={address}
									className="flex justify-start items-center my-1 py-1 px-2 text-center border rounded shadow"
								>
									<span className="font-bold w-14">{index + 1}、</span>
									<span className="flex grow">{address}</span>
									<Button danger onClick={(e) => sendTransfer(e, address)}>
										转账
									</Button>
									{contextHolder}
								</div>
							))
						) : (
							<Spin />
						)}
					</div>
				</Modal>
			</div>
		</>
	)
}
