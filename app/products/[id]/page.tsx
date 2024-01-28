'use client'

import { type FC, useEffect, useMemo } from 'react'
import type { Product } from '@/types/product'
import { useParams } from 'next/navigation'
import ErrorBox from '@/components/common/error-box'
import Image from 'next/image'
import LinkButton from '@/components/common/link-button'
import InfoBox from '@/components/common/info-box'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { loadProducts } from '@/store/slices/products'

const Product: FC = () => {
  const params = useParams()
  const { products, loading, error } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts())
    }
  }, [dispatch, products.length])

  const sectionClass = useMemo(() => 'mx-auto w-full max-w-[1200px] pt-14', [])

  const product = useMemo(
    (): Product | undefined =>
      products.find((product) => product.id === params.id),
    [params.id, products]
  )

  if (loading) {
    return (
      <section className={sectionClass}>
        <InfoBox />
      </section>
    )
  }

  if (error || !product) {
    return (
      <section className={sectionClass}>
        <ErrorBox error={error ?? undefined} />
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 pt-20 sm:px-8 md:px-20">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex w-fit items-center gap-5">
          <h1 className="text-[30px]/[35px] font-bold italic lg:text-[35px]/[40px]">
            {product.name}
          </h1>
          <div className="w-fit rounded-xl bg-fm-cyan/10 px-3 py-1 text-sm font-semibold uppercase text-fm-aqua">
            {product.type}
          </div>
        </div>
        <LinkButton
          href={product.shopLink}
          text={`Buy ${Intl.NumberFormat(navigator.language, {
            style: 'currency',
            currency: 'EUR',
          }).format(product.price)}`}
          className="max-sm:hidden"
        />
      </div>
      <p className="mt-2 text-fm-aqua">
        Released on{' '}
        {new Date(product.releaseDate!).toLocaleDateString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <Image
        src={product.showcaseImage ?? product.coverImage}
        alt={product.name}
        width={2000}
        height={2000}
        className="mt-10 max-h-[400px] w-full select-none rounded-2xl object-cover"
        draggable={false}
      />
      <section className="mt-10 flex flex-col gap-2 max-sm:mb-4 max-sm:mt-4">
        <h6 className="font-medium text-fm-aqua">About {product.name}</h6>
        <p>{product.description}</p>
      </section>
      <LinkButton
        href={product.shopLink}
        text={`Buy ${Intl.NumberFormat(navigator.language, {
          style: 'currency',
          currency: 'EUR',
        }).format(product.price)}`}
        className="w-full justify-center sm:hidden"
      />
    </section>
  )
}

export default Product
