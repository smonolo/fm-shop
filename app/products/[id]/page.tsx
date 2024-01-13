'use client'

import { type FC, useCallback, useEffect, useMemo, useState } from 'react'
import type { Product } from '@/types/product'
import { supabase } from '@/utils/supabase'
import { useParams } from 'next/navigation'
import ErrorBox from '@/components/common/error-box'
import Image from 'next/image'
import LinkButton from '@/components/common/link-button'
import Loading from '@/components/common/loading'

const Product: FC = () => {
  const params = useParams()
  const [product, setProduct] = useState<Product>()
  const [error, setError] = useState<string>()

  const sectionClass = useMemo(() => 'mx-auto w-full max-w-[1200px] pt-14', [])

  const loadProduct = useCallback(async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', params.id)
      .single<Product>()

    if (error) {
      setError(error.message)
    } else {
      setProduct(data)
    }
  }, [params.id])

  useEffect(() => {
    loadProduct().then(() => console.log('Product loaded'))
  }, [loadProduct])

  if (error) {
    return (
      <section className={sectionClass}>
        <ErrorBox error={error} />
      </section>
    )
  }

  if (!product) {
    return (
      <section className={sectionClass}>
        <Loading />
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-[1200px] pt-14">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex w-fit items-center gap-5">
          <h1 className="text-[30px]/[35px] font-bold italic lg:text-[35px]/[40px]">
            {product?.name}
          </h1>
          <div className="w-fit rounded-xl bg-fm-cyan/10 px-4 py-1 text-sm font-semibold uppercase text-fm-aqua">
            {product?.type}
          </div>
        </div>
        <LinkButton href={product?.shopLink!} text="Buy" />
      </div>
      <p className="mt-2 text-fm-aqua">
        Released on{' '}
        {new Date(product?.releaseDate!).toLocaleDateString(
          navigator.language,
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        )}
      </p>
      <Image
        src={product?.coverImage!}
        alt={product?.name!}
        width={2000}
        height={2000}
        className="mt-8 max-h-[400px] w-full rounded-2xl object-cover"
      />
      <section className="mt-10 flex flex-col gap-2">
        <h6 className="font-medium text-fm-cyan">About {product?.name}</h6>
        <p>{product?.description}</p>
      </section>
    </section>
  )
}

export default Product
