import { XTransferErrorStatus } from '@connext/nxtp-utils'
import _ from 'lodash'

const ERROR_STATUSES = [
  XTransferErrorStatus.LowRelayerFee,
  XTransferErrorStatus.LowSlippage,
  XTransferErrorStatus.ExecutionError,
  XTransferErrorStatus.NoBidsReceived,
]

export default ({ value, onClick }) => {
  return (
    <div className="flex flex-wrap pb-1">
      {_.concat('', ERROR_STATUSES).map((d, i) => {
        const selected = d === value
        const item = (
          <span className={`whitespace-nowrap leading-4 ${selected ? 'font-bold': ''}`}>
            {d || 'Any'}
          </span>
        )
        return (
          <div
            key={i}
            onClick={() => onClick(d)}
            className={`${selected ? 'bg-slate-100 dark:bg-slate-800' : 'hover:bg-slate-50 dark:hover:bg-slate-700'} w-full cursor-pointer flex items-center justify-start space-x-1 py-2 px-3`}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}