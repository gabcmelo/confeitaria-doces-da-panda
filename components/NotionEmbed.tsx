interface NotionEmbedProps {
  src: string
  title?: string
  className?: string
}

const NotionEmbed = ({ src, title = "Cardápio Digital", className = "" }: NotionEmbedProps) => {
  return (
    <div className="w-full mx-auto">
      <div className="relative h-svh w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={src}
          title={title}
          className={`w-full h-full border-0 ${className}`}
          loading="lazy"
          allow="clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  )
}

export default NotionEmbed

