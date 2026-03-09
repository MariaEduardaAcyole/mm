import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import ProgressBar from "../components/ProgressBar"
import SignatureCard from "../components/SignatureCard"

const contractSections = [
  {
    title: "Capítulo I — Respeito, diálogo e resolução de conflitos",
    clauses: [
      "Sempre reconhecer e pedir desculpas quando estiver errado.",
      "Evitar dormir brigados sempre que possível.",
      "Nunca ignorar um ao outro durante conflitos.",
      "Resolver os problemas através do diálogo.",
      "Explicar o que está sentindo em vez de fazer 'doce' ou criar silêncio.",
      "Comunicar quando algo machucar — seja uma fala, gesto ou atitude.",
      "Ser sempre sincero(a), sem mentiras! (sem exceção)",
      "Quando brigar, lembrar que somos do mesmo time."
    ]
  },
  {
    title: "Capítulo II — Cuidado, apoio e crescimento juntos",
    clauses: [
      "Escolher se apaixonar um pelo outro todos os dias.",
      "Dividir sonhos, planos e objetivos de vida.",
      "Incentivar e apoiar os sonhos um do outro.",
      "Cuidar das inseguranças um do outro com carinho.",
      "Manter palavras de afirmação e carinho no dia a dia.",
      "Valorizar e respeitar a família um do outro.",
      "Evitar deixar o relacionamento cair na rotina.",
      "Sempre lembrar do motivo de estarmos juntos."
    ]
  },
  {
    title: "Capítulo III — Benefícios oficiais do relacionamento",
    clauses: [
      "Beijus ilimitados sempre que possível.",
      "Dengo disponível sob demanda.",
      "Promessa de cuidado nos dias bons e nos dias difíceis.",
      "Massagem oficial quando um dos dois estiver cansado.",
      "Amor em abundância, todos os dias.",
      "Broncas construtivas quando necessário (com carinho)."
    ]
  },
  {
    title: "Capítulo IV — Quebra de contrato",
    clauses: [
      "A cada quebra de cláusula, a parte prejudicada poderá escolher uma compensação.",
      "Um date romântico pago pela parte infratora.",
      "Direito de escolher um passeio ou atividade juntos.",
      "Um beiju extra.",
      "Um amorzinho especial."
    ]
  }
]

export default function ContractPage() {

  const totalClauses =
    contractSections.reduce((acc, s) => acc + s.clauses.length, 0)

  const [checked, setChecked] = useState<boolean[]>(
    new Array(totalClauses).fill(false)
  )

  const [signed, setSigned] = useState(false)

  const [noPos, setNoPos] = useState({ x: 0, y: 0 })

  const [isMobile, setIsMobile] = useState(false)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)

  }, [])

  function toggle(index: number) {

    const copy = [...checked]
    copy[index] = !copy[index]
    setChecked(copy)

  }

  function moveButton() {

    const x = Math.random() * 200 - 100
    const y = Math.random() * 100 - 50

    setNoPos({ x, y })

  }

  function handleNoClick() {

    if (isMobile) {
      setShowModal(true)
    }

  }

  const allAccepted = checked.every(Boolean)

  function handleAccept() {

    if (allAccepted) {
      setSigned(true)
    }

  }

  const checkedCount = checked.filter(Boolean).length

  const progress = (checkedCount / totalClauses) * 100

  const today = new Date().toLocaleDateString()

  let clauseIndex = 0

  return (

    <div className="min-h-screen bg-background flex justify-center py-20 px-4">

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 border">

        {/* título */}

        <div className="text-center mb-10">

          <Heart className="mx-auto text-rose-500 mb-3" size={32} />

          <h1 className="text-4xl font-display text-rose-deep">
            Contrato de Relacionamento
          </h1>

          <p className="text-muted-foreground mt-2">
            Este documento oficializa nosso compromisso ❤️
          </p>

        </div>

        {/* progress bar */}

        <ProgressBar progress={progress} />

        {/* cláusulas */}

        <div className="space-y-10">

          {contractSections.map((section, sIndex) => (

            <div key={sIndex}>

              <h2 className="text-2xl font-semibold text-rose-deep mb-4 border-b pb-2">
                {section.title}
              </h2>

              <div className="space-y-4">

                {section.clauses.map((text, cIndex) => {

                  const index = clauseIndex++

                  return (

                    <label
                      key={cIndex}
                      className="flex gap-3 p-4 border rounded-xl hover:bg-rose-50 cursor-pointer"
                    >

                      <input
                        type="checkbox"
                        checked={checked[index]}
                        onChange={() => toggle(index)}
                        className="accent-rose-500 mt-1"
                      />

                      <span className="text-gray-700">
                        {text}
                      </span>

                    </label>

                  )

                })}

              </div>

            </div>

          ))}

        </div>

        {/* botões */}

        <div className="mt-12 flex justify-center gap-6 relative">

          <button
            onClick={handleAccept}
            disabled={!allAccepted}
            className={`
            px-8 py-3 rounded-xl font-semibold transition
            ${allAccepted
              ? "bg-rose-500 text-white hover:bg-rose-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"}
            `}
          >
            Concordo ❤️
          </button>

          <button
            onMouseEnter={!isMobile ? moveButton : undefined}
            onClick={handleNoClick}
            style={{
              transform: !isMobile
                ? `translate(${noPos.x}px, ${noPos.y}px)`
                : "none"
            }}
            className="
            px-8 py-3
            rounded-xl
            bg-gray-200
            hover:bg-gray-300
            transition
            absolute
            "
          >
            Não concordo
          </button>

        </div>

        {/* assinatura */}

        {signed && (
          <SignatureCard
            name="Nosso amor"
            date={today}
          />
        )}

      </div>

      {/* modal mobile */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white rounded-xl p-8 text-center max-w-sm shadow-xl">

            <Heart className="mx-auto text-rose-500 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              Ei amor 😅
            </h3>

            <p className="text-gray-600 mb-6">
              Já foi longe demais para discordar agora ❤️
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="
              px-6 py-2
              bg-rose-500
              text-white
              rounded-lg
              hover:bg-rose-600
              transition
              "
            >
              Voltar e concordar ❤️
            </button>

          </div>

        </div>

      )}

    </div>
  )

}