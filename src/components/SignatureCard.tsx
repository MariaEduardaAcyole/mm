type Props = {
  name: string
  date: string
}

export default function SignatureCard({ name, date }: Props) {

  return (

    <div className="mt-10 bg-green-50 border border-green-200 p-6 rounded-xl">

      <h3 className="font-semibold text-green-800 mb-4">
        Assinatura registrada
      </h3>

      <div className="space-y-2 text-gray-700">

        <p>
          <strong>Assinado por:</strong> {name}
        </p>

        <p>
          <strong>Data:</strong> {date}
        </p>

        <p className="text-sm text-gray-500">
          Este contrato foi aceito digitalmente.
        </p>

      </div>

    </div>

  )

}