import NotionEmbed from "@/components/NotionEmbed"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cardápio Digital - Confeitaria",
  description: "Confira nosso cardápio de doces e bolos para encomenda",
}

export default function CardapioPage() {
  return (
      <div className="max-w-4xl mx-auto">
      <div className="flex text-panda-primary text-4xl my-4 justify-center items-center font-alternates font-light">
            <span  >Confeitaria Doces da Panda</span>
          </div>
        <NotionEmbed
          src="https://fortunate-index-af5.notion.site/ebd/193e9e2baa988040b322cc61a9deeafb"
          title="Cardápio de Doces e Bolos"
        />
      </div>
  )
}

