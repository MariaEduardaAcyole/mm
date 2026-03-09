type Props = {
  progress: number
}

export default function ProgressBar({ progress }: Props) {

  return (

    <div className="mb-8">

      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>Progresso do contrato</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

        <div
          className="bg-rose-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>

  )

}