'use client'

import type { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Product } from '@/types/product'
import classNames from 'classnames'
import Link from 'next/link'

type Props = {
  product: Product
  expanded: boolean
  setExpanded: () => void
}

const ProductsCard: FC<Props> = ({ product, expanded, setExpanded }) => {
  return (
    <motion.div
      initial={expanded ? {} : { width: '90%', height: 100 }}
      animate={expanded ? { width: '100%', height: 150 } : {}}
      transition={{ type: 'tween', duration: 0.3 }}
      className="mx-auto flex cursor-pointer items-center overflow-hidden rounded-3xl bg-fm-cyan/10 bg-cover bg-center bg-no-repeat backdrop-blur"
      onClick={setExpanded}
    >
      <AnimatePresence>
        {expanded && (
          <motion.img
            key="product-image"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 250 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ type: 'tween', duration: 0.3, delay: 0.6 }}
            src={product.showcaseImage ?? product.coverImage}
            alt={product.name}
            className="h-[150px] w-[200px] rounded-3xl object-cover"
          />
        )}
      </AnimatePresence>
      <div className="flex h-full w-full items-center justify-between gap-4 px-16">
        <div className="flex w-fit flex-col gap-4">
          <div className="flex w-fit items-baseline gap-2">
            <h3
              className={classNames(
                'font-semibold transition-[font-size] delay-[300ms] duration-[300ms]',
                expanded ? 'text-lg lg:text-xl' : 'text-lg lg:text-2xl'
              )}
            >
              {product.name}
            </h3>
            <span className="text-sm italic">{product.type}</span>
          </div>
          <AnimatePresence>
            {expanded && (
              <motion.p
                key="product-description"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'fit-content' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: 'tween', duration: 0.3, delay: 0.3 }}
                className="text-sm"
              >
                {product.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="flex w-fit items-center gap-6">
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="product-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="flex w-fit items-center gap-4 text-2xl text-fm-cyan"
              >
                {product.additionalDetails && (
                  <i
                    title={product.additionalDetails}
                    className="bi bi-info-circle transition-colors hover:text-fm-aqua"
                    onClick={(event) => event.stopPropagation()}
                  />
                )}
                <Link
                  href={product.shopLink}
                  target="_blank"
                  onClick={(event) => event.stopPropagation()}
                >
                  <i className="bi bi-cart transition-colors hover:text-fm-aqua" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.i
            initial={expanded ? {} : { transform: 'rotate(0)' }}
            animate={expanded ? { transform: 'rotate(-180deg)' } : {}}
            transition={{ type: 'tween', duration: 0.3 }}
            className={classNames([
              'bi bi-chevron-down p-2 text-2xl',
              expanded ? 'text-fm-cyan' : 'text-fm-gray',
            ])}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ProductsCard
