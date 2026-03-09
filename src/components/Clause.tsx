type ClauseProps = {
  title: string
  text: string
  checked: boolean
  onCheck: () => void
}

export default function Clause({
  title,
  text,
  checked,
  onCheck
}: ClauseProps) {

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

      <div className="flex items-start gap-4">

        <input
          type="checkbox"
          checked={checked}
          onChange={onCheck}
          className="mt-1 w-5 h-5 accent-green-600"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {text}
          </p>
        </div>

      </div>

    </div>
  )
}