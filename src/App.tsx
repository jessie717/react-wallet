import { useAccount } from 'wagmi'
import './App.css'
import {
  ConnectButton,
  useAccountModal,
  useChainModal,
  useConnectModal,
} from '@rainbow-me/rainbowkit'

function App() {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()

  return (
    <>
      <div>
        <ConnectButton
          accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
        />

        <div className='my-4 text-3xl'>use hooks</div>
        <div className='flex gap-2'>
          {isConnected ? (
            <>
              <div
                className='px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300'
                onClick={openAccountModal}>
                open account modal
              </div>
              <div
                className='px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300'
                onClick={openChainModal}>
                open chain modal
              </div>{' '}
            </>
          ) : (
            <div
              className='px-4 py-2 border rounded-xl bg-slate-400 cursor-pointer hover:bg-slate-300'
              onClick={openConnectModal}>
              open connect modal
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
