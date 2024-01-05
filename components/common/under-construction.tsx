import type { FC } from 'react'

const UnderConstruction: FC = () => {
  return (
    <div className="mx-auto mt-20 flex w-fit flex-col gap-4 text-center">
      <h1 className="text-[30px]/[35px] font-bold italic lg:text-[40px]/[50px]">
        Under Construction
      </h1>
      <p className="text-fm-aqua">
        This page is still being created, check back later.
      </p>
    </div>
  )
}

export default UnderConstruction
