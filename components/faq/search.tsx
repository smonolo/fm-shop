import type { FC } from 'react'

type Props = {
  setQuery: (query: string) => void
}

const FaqsSearch: FC<Props> = ({ setQuery }) => {
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-[600px]">
      <input
        type="text"
        placeholder="Type here to search for a product..."
        className="w-full rounded-full bg-fm-cyan/10 px-5 py-3 text-sm font-medium outline-0 backdrop-blur placeholder:text-fm-gray"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  )
}

export default FaqsSearch
